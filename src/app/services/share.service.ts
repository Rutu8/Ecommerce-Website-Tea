import { ProductCategoriesComponent } from './../component/product-categories/product-categories.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  loginURL = 'https://elitecom.abhijitgatade.com/api/login/RIOOBCUH';

  registerURL = 'https://elitecom.abhijitgatade.com/api/register/RIOOBCUH';


  constructor(private http: HttpClient) {}

  getLogin(data: any) {
    const formData = new FormData();
    for (const key in data) {
      const value = data[key];
      formData.append(key, value);
    }
    return this.http.post(this.loginURL, formData);
  }



  existedLogin(data: any) {  
    const formdata = new FormData();
    for(const key in data){
      const record = data[key];
      formdata.append(key, record)
    }

    return this.http.post(this.registerURL, formdata);
  }

  // settoken(token: string) {
  //   localStorage.setItem('token', token);
  // }

  // gettoken() {
  //   return localStorage.getItem('token');
  // }


}
