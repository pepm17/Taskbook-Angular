import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModule } from '../models/login/login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  selectedLogin: LoginModule;

  constructor(private http: HttpClient) { }

}
