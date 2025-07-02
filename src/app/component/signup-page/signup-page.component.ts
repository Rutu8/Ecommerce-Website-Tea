import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  formData:any;
  infousers:any;



  constructor(private share:ShareService, private router:Router){}

  ngOnInit(): void {

    this.formData = new FormGroup({
      businessid:new FormControl(""),
      name:new FormControl("",Validators.compose([Validators.required])),
      email:new FormControl("", Validators.compose([Validators.required, Validators.email])),
      mobileno:new FormControl("", Validators.compose([Validators.required, Validators.maxLength(10)])),
      password:new FormControl("", Validators.compose([Validators.required]))
    })

  }


  singup(data:any){
      this.share.existedLogin(data).subscribe((result:any)=>{
        console.log(result)
        if(result.status = "exists")
        {
          // alert(result.data)
          Swal.fire({
            title: result.data,
            icon: 'warning',
            draggable: true,
          });

          this.router.navigate(['/loginpage'])
        }
      })

  }

}
