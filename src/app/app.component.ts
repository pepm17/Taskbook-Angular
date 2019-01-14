import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyteamsComponent } from './components/myteams/myteams.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taskbook-Angular';
}
