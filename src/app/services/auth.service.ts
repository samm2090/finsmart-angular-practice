import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private main_url = '//localhost:8080/';

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    const url = this.main_url + "user"
    return this.http.post(url, user);
  }

  login(user: any) {
    const url = this.main_url + "user/login"
    this.http.post(url, user).subscribe((resp: any) => {
      localStorage.setItem('token', resp.headers.get('auth-token'));
    });
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
