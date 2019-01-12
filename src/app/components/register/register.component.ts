import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
	public error: string;

  	constructor(private userService: UserService, private router: Router) { }

	ngOnInit() {

	}

	onSubmit(form: NgForm){
	  	this.userService.register(form.value).subscribe(
	  		res =>this.router.navigate(['/signin']),
	  		err =>this.error = 'Something went wrong'
	  	)
	  }
}
