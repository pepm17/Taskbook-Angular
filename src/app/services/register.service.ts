import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModule } from '../models/register/register.module';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
	selectedRegister
	constructor(private http: HttpClient) { }
}
