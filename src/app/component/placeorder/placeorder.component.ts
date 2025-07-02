import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  formData:any;
  ngOnInit(): void {
    this.formData = new FormGroup({
      businessid: new FormControl(""),
      userid:new FormControl(""),
      subtotal:new FormControl(""),
      couponid:new FormControl(""),
      couponamount:new FormControl(""),
      shipingamount:new FormControl(""),
      billamount:new FormControl(""),
      name:new FormControl(""),
      mobileno:new FormControl(""),
      address : new FormControl(""),
      town : new FormControl(""),
      district : new FormControl(""),
      state : new FormControl(""),
      pincode : new FormControl(""),
      weight : new FormControl(""),
      paymentmethod : new FormControl(""),
      count : new FormControl(""),
      productid : new FormControl(""),
      varietyid : new FormControl(""),
      price : new FormControl(""),
      quantity1 : new FormControl(""),
      couponid1 : new FormControl(""),
      couponamount1:new FormControl(""),
      subtotal1:new FormControl("")
    })
  }

  order(data:any){}

}
