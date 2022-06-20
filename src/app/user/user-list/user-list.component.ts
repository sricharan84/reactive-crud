import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserState } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  userState: UserState;

  constructor() { }

  ngOnInit() {
  }

}