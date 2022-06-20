import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User, UserState } from './user.model';

let _initialState: UserState = {
  users: [],
};

@Injectable()
export class UserFacadeService {
  users$: Observable<User[]>;

  private store = new BehaviorSubject<UserState>(_initialState);
  state$ = this.store.asObservable();

  public newUserSub = new Subject();
  private createNewUser$ = this.newUserSub.pipe(
    switchMap((user: User) => this.createNewUser(user))
  );

  constructor(private http: HttpClient) {
    this.getAllUsers().subscribe((list) =>
      this.store.next({ ..._initialState, users: list })
    );
    this.createNewUser$
      .pipe(
        tap(() => console.log('hi there')),
        switchMap(() => this.getAllUsers())
      )
      .subscribe((users) => this.store.next({ ..._initialState, users }));
  }

  createNewUser(user: User): Observable<any> {
    let params = new HttpParams().set(
      'access-token',
      '41443f0946ca0c89bd1b837a6c4902c2f1d493f9374fdcd90d0f66fb09e4f7b5'
    );
    return this.http.post<User[]>(
      'https://gorest.co.in/public/v2/users',
      user,
      { params }
    );
  }
  UpdateUser() {}
  deleteUser() {}
  getAllUsers(): Observable<User[]> {
    let params = new HttpParams().set(
      'access-token',
      '41443f0946ca0c89bd1b837a6c4902c2f1d493f9374fdcd90d0f66fb09e4f7b5'
    );
    return this.http.get<User[]>('https://gorest.co.in/public/v2/users', {
      params,
    });
  }
}
