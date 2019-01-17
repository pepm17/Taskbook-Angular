import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-listar-actividades',
  templateUrl: './listar-actividades.component.html',
  styleUrls: ['./listar-actividades.component.css']
})
export class ListarActividadesComponent implements OnInit {

	constructor(private activityService: ActivityService) { }
	
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

	populateForm(activity: Activity){
		this.activityService.selectedActivity = activity;
	}
}
