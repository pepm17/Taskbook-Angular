import { Component, OnInit, NgModule} from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from 'src/app/models/team';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-myteams',
  templateUrl: './myteams.component.html',
  styleUrls: ['./myteams.component.css'],
  providers: [ TeamService ]
})
export class MyteamsComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(){
    this.teamService.getMyTeams()
    .subscribe(res =>{
      this.teamService.teams = res.teams;
      console.log(this.teamService.teams);
    })
  }
}
