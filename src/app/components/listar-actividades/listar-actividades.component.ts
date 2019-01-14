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
		this.activityService.activitiesUser();
	}

}
