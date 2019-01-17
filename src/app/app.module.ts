import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtModule} from '@auth0/angular-jwt';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
//componentes
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { MyteamsComponent }  from './components/myteams/myteams.component';
import { ListarActividadesComponent } from './components/listar-actividades/listar-actividades.component';
import { TeamComponent } from './components/team/team.component';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { UpdateActivityComponent } from './components/update-activity/update-activity.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    PrincipalPageComponent,
    MyteamsComponent,
    ListarActividadesComponent,
    TeamComponent
    CreateActivityComponent,
    UpdateActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001/taskbook']
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
