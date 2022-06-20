import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenderEnum, StatusEnum, User } from '../user.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  @Output()
  addUser = new EventEmitter<User>();
  constructor() {}

  ngOnInit() {}

  add() {
    this.addUser.emit({
      name: 'Sachin Tendulkar',
      email: 'sachin_ten@cric.com',
      gender: GenderEnum.MALE,
      status: StatusEnum.ACTIVE,
    });
  }
}
