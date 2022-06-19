import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User, UserState } from './user.model';

let _initialState: UserState = {
  users : []
};

@Injectable()
export class UserFacadeService {
  users$: Observable<User[]>;

  store = new BehaviorSubject<UserState>(_initialState);
  state$ = this.store.asObservable();

  public newUserSub = new Subject();
  private createNewUser$ = this.newUserSub.asObservable();

  constructor(private http: HttpClient) {
    
  }

  createNewUser(){}
  UpdateUser(){}
  deleteUser(){}
  getAllUsers(){}
}
