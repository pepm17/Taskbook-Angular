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

  getActivitiesTeam(_id: string): Observable<any>{
		console.log(_id);
		return this.http.get(environment.apiBaseUrl+`/teams/${_id}/activities`);
	}

	postActivity(_id: string, activity: Activity){
		return this.http.post(environment.apiBaseUrl+`/teams/${_id}/activities`, activity);
	}

	updateActivity(activity: Activity): Observable<any>{
		return this.http.put(environment.apiBaseUrl+'/activities/'+activity._id, activity);
	}
}
