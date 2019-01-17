import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component'
import { AuthGuard } from './services/auth.guard';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
	{ path: '', component: PrincipalPageComponent, canActivate: [AuthGuard]},
	{ path: 'teams/:_id', component: TeamComponent, canActivate: [AuthGuard]},
	{ path: 'signin', component: LoginComponent },
	{ path: 'signup', component : RegisterComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
	
})

export class AppRoutingModule{ }
export const routingComponents = [LoginComponent, RegisterComponent]