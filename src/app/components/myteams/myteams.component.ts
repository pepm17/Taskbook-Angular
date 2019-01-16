import { Component, OnInit, NgModule} from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from 'src/app/models/team';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myteams',
  templateUrl: './myteams.component.html',
  styleUrls: ['./myteams.component.css'],
  providers: [ TeamService ]
})
export class MyteamsComponent implements OnInit {
  public error: string;

  constructor(private teamService: TeamService, private router: Router) { }

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

  onSubmit(form: NgForm){
    this.teamService.postTeam(form.value).subscribe(
      res =>this.router.navigate(['']),
      err =>this.error = 'Something went wrong'
  )}
}
