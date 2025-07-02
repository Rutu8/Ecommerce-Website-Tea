import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;
  items:any
  constructor(private api:CommonService){}
  images=[
    'https://elitecom.abhijitgatade.com/sliderpics/II7784OO5955RF8588OQ6459.png',
    'https://elitecom.abhijitgatade.com/sliderpics/RO5710KY1152ET6813EI4486.png',
    'https://elitecom.abhijitgatade.com/sliderpics/PT4170NQ5088GU6987PR6911.png'
  ]

  ngOnInit(): void {
    this.getdata();



  }

  getdata(){

    this.api.getData("https://elitecom.abhijitgatade.com/api/products/RIOOBCUH/0").subscribe((result:any)=>{
      this.data = result.data;
      console.log(this.data)
      console.log(result)
    })

    this.api.gettea("https://elitecom.abhijitgatade.com/api/productcategories/RIOOBCUH/0").subscribe((result:any)=>{
      this.items =result.data
      console.log(result)
      console.log(this.items)
    })

}
}
