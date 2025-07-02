import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  counter = 0;

  constructor(private common:CommonService){}


  ngOnInit(): void {

 this.common.currentCounterValue.subscribe(count=>{
      this.counter = count;
    });
    if(localStorage.getItem("record") != null){
      let data = JSON.parse(localStorage.getItem("record") || '[]')
      this.common.updateCounterValue(data.length);
    }

  }

  // incrementcartcount(){
  //   this.counter++;
  //   this.common.updateCounterValue(this.counter)
  // }


}
