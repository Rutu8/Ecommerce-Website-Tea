import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 records:any;
//  qty = 1;
 delivery:any;
 subtotal:any;
 discount:any;
 disscountvalue:any;
 totalcharges:any;
 total:any;
//  saving:any;



 constructor(private common:CommonService){}

  ngOnInit(): void {
    this.records = JSON.parse(localStorage.getItem('record') || '[]')
    console.log(this.records.data);

    this.common.getCartProducts(this.records).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.records = response.data; // assuming your API returns `data` with products
        this.quantitychange();
    this.subTotal();
    this.deliverycharges();
    this.discountcharges();
    this.totalbill();
      },
      error: (error) => {
        console.error('API Error:', error);
      }
    });


    // this.increment(this.records.index)
    // this.decrement(this.records.index)
    console.log(this.records);


    // this.saving = this.subtotal - this.discount
    // this.display()

  }


  removecart(id:any){
    this.records = this.records.filter((item:any)=>{
      if(item.id != id){
        return item
      }
    })
    localStorage.setItem("record", JSON.stringify(this.records));
    this.common.updateCounterValue(this.records.length);
  }

  decrement(index:any){
    //  this.qty -= 1;
    this.records[index].quantity -= 1;
    // this.quantitychange();
    this.subTotal();
    this.deliverycharges();
    this.discountcharges();
    this.totalbill();
  }

  increment(index:any){
    // this.qty +=1;
    this.records[index].quantity += 1;
    // this.quantitychange();
    this.subTotal();
    this.deliverycharges();
    this.discountcharges();
    this.totalbill();
  }

  quantitychange(){
   localStorage.setItem("record", JSON.stringify(this.records));
   this.common.updateCounterValue(this.records.length);
  }

  subTotal(){
    let sub = 0;
    for(let i=0;i<this.records.length;i++){
      this.total = this.records[i].price*this.records[i].quantity;
      console.log("Total : "+this.total);

      this.subtotal = sub += this.total;
    }
  }


  deliverycharges(){
    if(this.subtotal >= "1000"){
      this.delivery = 100;
    }else {
      this.delivery = 0;
    }
  }

  discountcharges(){
    if(this.subtotal <= "1000"){
      this.discount = 0;
      this.disscountvalue=0;
    }else if(this.subtotal <= "3000"){
      this.disscountvalue = 5;
      this.discount = 0.05
    }else if(this.subtotal<=5000){
      this.discount= 10;
      this.disscountvalue = 0.10;
    }else{
      this.discount = 25;
      this.disscountvalue = 0.25
    }
  }

  totalbill(){
    this.totalcharges = this.subtotal + this.delivery - (this.subtotal * this.disscountvalue/100);
  }

}
