import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeServiceService } from './home-service.service';
import { User } from './home-Model';


describe('HomeServiceService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      injector = getTestBed();
      httpMock = injector.get(HttpTestingController);
    });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: HomeServiceService = TestBed.get(HomeServiceService);
    expect(service).toBeTruthy();
  });

  it('Debe retornar un observable de Users', () => {
    const service: HomeServiceService = TestBed.get(HomeServiceService);
    const mockUsers: User[] = [
      {
        login: 'simonjefford',
        id: 136,
        node_id: 'MDQ6VXNlcjEzNg == ',
        avatar_url: 'https://avatars2.githubusercontent.com/u/136?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/simonjefford',
        html_url: 'https://github.com/simonjefford',
        followers_url: 'https://api.github.com/users/simonjefford/followers',
        following_url: 'https://api.github.com/users/simonjefford/following{/other_user}',
        gists_url: 'https://api.github.com/users/simonjefford/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/simonjefford/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/simonjefford/subscriptions',
        organizations_url: 'https://api.github.com/users/simonjefford/orgs',
        repos_url: 'https://api.github.com/users/simonjefford/repos',
        events_url: 'https://api.github.com/users/simonjefford/events{/privacy}',
        received_events_url: 'https://api.github.com/users/simonjefford/received_events',
        type: 'User',
        site_admin: false
      },
      {
        login: 'josh',
        id: 137,
        node_id: 'MDQ6VXNlcjEzNw==',
        avatar_url: 'https://avatars2.githubusercontent.com/u/137?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/josh',
        html_url: 'https://github.com/josh',
        followers_url: 'https://api.github.com/users/josh/followers',
        following_url: 'https://api.github.com/users/josh/following{/other_user}',
        gists_url: 'https://api.github.com/users/josh/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/josh/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/josh/subscriptions',
        organizations_url: 'https://api.github.com/users/josh/orgs',
        repos_url: 'https://api.github.com/users/josh/repos',
        events_url: 'https://api.github.com/users/josh/events{/privacy}',
        received_events_url: 'https://api.github.com/users/josh/received_events',
        type: 'User',
        site_admin: true
      },
    ];
    service.getAll().subscribe(
      (users) => {
        expect(users.length).toBe(2);
        expect(users).toEqual(mockUsers);
        expect(users[0].login).toBeDefined();
      }
    );
    const req = httpMock.expectOne('https://api.github.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});
