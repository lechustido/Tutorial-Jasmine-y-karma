import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './home-Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('https://api.github.com/users');
  }
}
