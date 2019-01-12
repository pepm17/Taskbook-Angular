import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModule } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }
	
	register(user: UserModule){
  		return this.http.post('http://localhost:3001/taskbook/signup', user);
	}
}
