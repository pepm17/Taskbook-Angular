import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../models/activity';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
	myActivities: Activity[];
	selectedActivity: Activity ={
		title: '',
		_id: '',
		description: '',
		_dad: '',
		response: ''
	};
	constructor(private http: HttpClient) { }

	activitiesUser(): Observable<any>{
		return this.http.get(environment.apiBaseUrl);
	}

	createActivity(activity: Activity){
		return this.http.post(environment.apiBaseUrl+'/teams/${_id}/activities', activity);
	}

	updateActivity(activity: Activity): Observable<any>{
		return this.http.put(environment.apiBaseUrl+'/activities/'+activity._id, activity);
	}
}
