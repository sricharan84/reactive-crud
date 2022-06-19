import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
    this.createNewUser$.pipe(
      switchMap((newUserData) => this.createNewUser()),
      switchMap(() => this.getAllUsers())
    ).subscribe( users => this.store.next({..._initialState, users}))
  }

  createNewUser(): Observable<any>{ return of(null)}
  UpdateUser(){}
  deleteUser(){}
  getAllUsers(): Observable<User[]>{ return of([])}
}
