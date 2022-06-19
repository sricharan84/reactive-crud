import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  users$: Observable<any>; 
  // refreshed version of data changes like adduser, delete user, any any more in future
  addUser(){

  }

  deleteUser(){

  }
}
