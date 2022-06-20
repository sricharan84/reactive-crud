import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacadeService } from './user/user-facade.service';
import { User, UserState } from './user/user.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  addUser$:any;
  deleteUser$: any;
  users$: Observable<UserState> = this.facade.state$; 
  constructor(private readonly facade: UserFacadeService){
    
  }


  ngOnInit(){
    this.facade.state$
  }
  // refreshed version of data changes like adduser, delete user, any any more in future
  addUser(user: User){
    // i will push an emission in add steam, which in turn triggers refresh
    this.facade.newUserSub.next(user);
  }

  deleteUser(){

  }
}
