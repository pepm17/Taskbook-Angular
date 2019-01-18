import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-actividades',
  templateUrl: './listar-actividades.component.html',
  styleUrls: ['./listar-actividades.component.css']
})
export class ListarActividadesComponent implements OnInit {
	error: string;
	constructor(private activityService: ActivityService, private router: Router) { }
	
	ngOnInit() {
		this.myActivities();
	}

	myActivities(){
		this.activityService.activitiesUser()
	    .subscribe(res =>{
	      this.activityService.myActivities = res.activities;
	      console.log(this.activityService.myActivities);
	    })
	}

	editActivity(activity: Activity){
		this.activityService.selectedActivity = activity;
	}

	deleteActivity(_id: string){
		this.activityService.deleteActivity(_id)
		.subscribe(
			res => console.log(res)
		)
	}
}
