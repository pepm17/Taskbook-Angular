import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
	id: number;
	email: string;
	displayName: string;
	password: string;
	token: string;
}
