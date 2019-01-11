import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(private auth: AuthService, private router: Router){}

  logout() {
    this.auth.logout();
    this.router.navigate(['signin']);
  }

  ngOnInit() {
  }

}
