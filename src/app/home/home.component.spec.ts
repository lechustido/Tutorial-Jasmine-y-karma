import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeServiceService } from './Servicio/home-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { User } from './Servicio/home-Model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let servicio: HomeServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [HomeServiceService],
    })
      .compileComponents();
    servicio = TestBed.get(HomeServiceService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe llamar a nuestro servicio Homeservice y a su metodo getAll', () => {
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
    const users = spyOn(servicio, 'getAll').and.callFake(
      () => {
        return of(mockUsers);
      });
    component.ngOnInit();
    expect(users).toHaveBeenCalled();
  });
});
