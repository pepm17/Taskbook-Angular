import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { TeamService } from '../../services/team.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public error: string;
  public teamid: string;

  constructor(private route: Router, private actRoute: ActivatedRoute, private activityService: ActivityService) {}

  ngOnInit() {
    this.teamid = this.actRoute.snapshot.params._id;
    this.getActivities();
    console.log(this.teamid);
  }

  onSubmit(){

  }

  getActivities(){
		this.activityService.getActivitiesTeam(this.teamid)
	    .subscribe(res =>{
	      this.activityService.getActivitiesTeam = res.activities;
	      console.log(this.activityService.getActivitiesTeam);
	    })
	}





}
