import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../models/activity';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
	myTeams: Activity[];
	constructor(private http: HttpClient) { }

	activitiesUser(){
		this.http.get(environment.apiBaseUrl).toPromise().then(res=>this.myTeams = res as Activity[]);
	}
}
