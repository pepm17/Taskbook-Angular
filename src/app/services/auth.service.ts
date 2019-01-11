import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: String): Observable<boolean> {
    return this.http.post<{token: string}>('signin', {email: email, password: password}).pipe(
      map(result => {
        localStorage.setItem('access_token', result.token);
        return true;
      })
    )
  }

  logout(){
    localStorage.removeItem('access_token');
  }

  public get loggedIn():boolean {
    return (localStorage.getItem('access_token')!= null);
  }
}
