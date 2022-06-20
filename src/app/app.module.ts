import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserFacadeService } from './user/user-facade.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user/user-list/user-list.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserListComponent,
    RegisterUserComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UserFacadeService],
})
export class AppModule {}
