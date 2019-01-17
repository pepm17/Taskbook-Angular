import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from '../../models/activity';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {
	error: string;
	@Input() activity: Activity;
  constructor(private router: Router, private activityService: ActivityService) { 

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
  		this.activityService.updateActivity(form.value).subscribe(
  		res =>this.router.navigate(['/']),
		err =>this.error = 'Something went wrong'
	)}
}
