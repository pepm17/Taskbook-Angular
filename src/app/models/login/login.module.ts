import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoginModule {
  public email: string;
  public password: string;
  public error: string;

  constructor(email: string, password: string){
    this.email =  email;
    this.password =  password;
  }
}
