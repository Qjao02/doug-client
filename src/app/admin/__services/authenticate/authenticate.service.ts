import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})



export class AuthenticateService {
  logged = false
  constructor(
    private http: HttpClient,
  ) { }


  login(user) {
    this.http.post(environment.API_URL + '/api-auth/' , user, httpOptions )
      .subscribe(data => {
          this.logged = true
          localStorage.setItem('token', data['token'])
        }
      )
  }


  logout() {
    this.logged = false
    localStorage.removeItem('token')
}
}
