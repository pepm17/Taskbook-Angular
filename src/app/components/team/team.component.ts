import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import {} from '../myteams/myteams.component';
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
  public _id: string;

  constructor(private route: Router, private actRoute: ActivatedRoute, private activityService: ActivityService) {}

  ngOnInit() {
    this._id = this.actRoute.snapshot.params._id;
    this.getActivities();
    console.log(this._id);
  }

  onSubmit(form: NgForm){
    this.activityService.postActivity(this._id ,form.value).subscribe(
      res =>{
        let _id = this._id;
        console.log(_id);
        this.route.navigate([`teams/${_id}`])
        
      },
      err =>this.error = 'Something went wrong'
  )}

  getActivities(){
		this.activityService.getActivitiesTeam(this._id)
	    .subscribe(res =>{
	      this.activityService.getActivitiesTeam = res.activities;
	      console.log(this.activityService.getActivitiesTeam);
	    })
	}





}
