import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User, UserState } from './user.model';

let _initialState: UserState = {
  users : []
};

@Injectable()
export class UserFacadeService {
  users$: Observable<User[]>;

  constructor(private http: HttpClient) {}

  updateUsers(){

  }
}
