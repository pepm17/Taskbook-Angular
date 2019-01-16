import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  selectedTeam: Team;
  teams: Team[];

  constructor(private http: HttpClient) { 
    this.selectedTeam = new Team();
  }

  getTeams(){
    return this.http.get(environment.apiBaseUrl+'/teams');
  }

  getMyTeams(): Observable<any>{
    return this.http.get(environment.apiBaseUrl+'/myteams');
  }

  getTeam(_id: string){
    return this.http.get(environment.apiBaseUrl+`/teams/${_id}`);
  }

  postTeam(team: Team){
    return this.http.post(environment.apiBaseUrl+'/teams', team);
  }

  putTeam(team: Team){
    return this.http.post(environment.apiBaseUrl+`/teams/${team._id}`, team);
  }

  deleteTeam(_id: string){
    return this.http.delete(environment.apiBaseUrl+`/teams/${_id}`);
  }
}
