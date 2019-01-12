import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

	selectedUser: User ={
		displayName: '',
		email: '',
		password: ''
	};

	constructor(private http: HttpClient) { }
	
	register(user: User){
  		return this.http.post(environment.apiBaseUrl+'/signup', user);
	}
}
