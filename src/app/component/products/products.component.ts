import { CommonService } from './../../services/common.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data:any;
  display:any;
  show:any = true;
  content:any;





  constructor(private http:HttpClient, private api:CommonService){}
  ngOnInit(): void {
      this.getdata();





  }

  getdata(){

    this.api.getData("https://elitecom.abhijitgatade.com/api/products/RIOOBCUH/0").subscribe((result:any)=>{
      this.data = result.data;
      //  this.record = JSON.stringify(this.record.push(this.data))
      //  console.log(this.record);

      // this.items = JSON.stringify(this.data)
      // this.record.push(this.items)
      // JSON.parse(this.data)
      //  console.log(this.record);
      // this.record = Object.values(this.data)
      console.log(this.data)
      // console.log(this.record)
      console.log(result)
    })

    if(this.show){
      this.data;

    }else if(this.display){
      this.data.sorted();

    }






  }

  // select(){
  //     this.display = this.data

  //  this.show = this.data.sort(this.data.price)

  // }

  // record:any = []









}
