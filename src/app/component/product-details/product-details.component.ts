import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  title: any;
  data: any;
  qty:any = 1;
  counter=0;

  products: any = {
    productid:" ",
    varietyid:" ",
    quantities:" "
  };

  constructor(private route: ActivatedRoute, private api: CommonService) {
    this.title = route.snapshot.paramMap.get("title");
    console.log(this.title);
  }



  ngOnInit(): void {
    this.api.getbytitle("https://elitecom.abhijitgatade.com/api/cartproducts/RIOOBCUH/", this.title).subscribe((result)=>{
        this.data = result.data;
        console.log(this.data);
        console.log(result);

      });
    // this.api.cartURL("https://elitecom.abhijitgatade.com/api/cartproducts/RIOOBCUH/")
      this.record = JSON.parse(localStorage.getItem("record") || "[]");
      this.api.updateCounterValue(this.record.length);



  }

  // incrementcartcount(){

  // }

  record: any = [];

  increment(){
    this.qty += 1;
  }
  decrement(){
    this.qty -= 1;

  }



  addtocart(id:number) {
    let found = false;
    for(let i=0; i<this.record.length;i++){
      if(this.record[i].productid ==id){
        found= true;
        break;
      }
    }
    if(!found){
      this.products = {
        productid:this.data.id,
        varietyid:0,
        quantities:this.qty
      };

      console.log(this.products);

      this.record.push(this.products);
      console.log(this.record);

      localStorage.setItem("record", JSON.stringify(this.record));
      // alert("product added to cart")
      Swal.fire({
        title: "product added to cart",
        icon: "success"
      });
    }else{
      // alert("product already addedd to cart");
      Swal.fire({
        title: "product already addedd to cart",
        icon: "success"
      });
    }

    this.counter++;
    this.api.updateCounterValue(this.counter);
    this.api.updateCounterValue(this.record.length);

    }





}
