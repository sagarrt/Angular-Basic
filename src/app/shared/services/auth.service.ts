import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://192.168.0.100:6002/';
  registr_Url = 'http://192.168.0.100:6002/';
  confirmUrl = "http://localhost:4200/confirm-email";
  changePasswordUrl = "http://localhost:4200/chnage-password";

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.authUrl+'login/', model).pipe(
      map((response: any) =>{
        const user= response;
        if(user.result.success){
          localStorage.setItem('token', user.token);
        }
      })
    )
  }

  register(model: any){
    let headers = new HttpHeaders({
        'confirnmationUrl' : this.confirmUrl
    });
    let options = {headers : headers};
    return this.http.post(this.registr_Url+'register/', model, options);
  }

  resetPassword(model: any){
    let headers = new HttpHeaders({
        'confirnmationUrl' : this.confirmUrl
    });
    let options = {headers : headers};
    return this.http.post(this.registr_Url+'restpassword/', model, options);
  }

  confirmEmail(model: any){
    return this.http.post(this.authUrl+"confirmemail", model)
  }

  chagePassword(model: any){
    return this.http.post(this.authUrl+"changepassword", model)
  }
}
