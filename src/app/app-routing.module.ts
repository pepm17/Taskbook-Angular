import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component'
import { AuthGuard } from './services/auth.guard';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';

const routes: Routes = [
	{ path: '', component: PrincipalPageComponent, canActivate: [AuthGuard] },
	{ path: 'signin', component: LoginComponent },
	{ path: 'signup', component : RegisterComponent },
	{ path: 'activity', component: CreateActivityComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
	
})

export class AppRoutingModule{ }
export const routingComponents = [LoginComponent, RegisterComponent]