import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private counterValue = new BehaviorSubject(0);
  currentCounterValue = this.counterValue.asObservable();

  constructor(private http:HttpClient) { }

  baseUrl= "https://elitecom.abhijitgatade.com/api/products/RIOOBCUH/0";

  baseUrl2="http://elitecom.abhijitgatade.com/api/product/RIOOBCUH/"

  teaCategory = "https://elitecom.abhijitgatade.com/api/productcategories/RIOOBCUH/0"

  cartURL= "https://elitecom.abhijitgatade.com/api/cartproducts/RIOOBCUH/"

  getData(body: string)
  {
    return this.http.post(this.baseUrl , body);
  }

  getbytitle(body:string, title:string):Observable<any>
  {
    return this.http.post(this.baseUrl2 + title, body);
  }

  gettea(body:string)
{
  return this.http.post(this.teaCategory,body);

}

getcart(body:string, title:string):Observable<any>
{
  return this.http.post(this.cartURL+title,body)
}

getCartProducts(cartItems:any[]):Observable<any>
{
  if (!Array.isArray(cartItems)) {
    throw new Error('cartItems must be an array');
  }
  const productids = cartItems.map(item => item.productid).join(',');
  const varietyids = cartItems.map(item => item.varietyid).join(',');
  const quantities = cartItems.map(item => item.quantities).join(',');

  const formdata = new FormData();
  formdata.append('productids', productids);
  formdata.append('varietyids', varietyids);
  formdata.append('quantities', quantities);
  // formdata.append('couponcode','');

  console.log(formdata);


  return this.http.post(this.cartURL,formdata);
}

updateCounterValue(count:number){
  this.counterValue.next(count);
}

}   
