import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {
	public error: string;
  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
	this.activityService.createActivity(form.value).subscribe(
		res =>this.router.navigate(['/']),
		err =>this.error = 'Something went wrong'
	)}
}
