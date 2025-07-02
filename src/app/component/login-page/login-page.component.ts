import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  failedLogin: any;

  formdata: any;
  info: any;
  constructor(
    private share: ShareService,private router: Router) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({

      email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required])),
    });

  }

  login(data: any) {
    console.log(data);

      this.share.getLogin(data).subscribe((result:any)=>{
        console.log(result)
        if(result.status == "success"){
          // alert(result.status)

         Swal.fire({
           title: result.status,
           icon: "success",
           draggable: true
         });
          this.router.navigate(["/placeOrder"])
          console.log(result)
        }else {
          // alert("Please Create Account")
          Swal.fire({
            title: "Please Create Account",
            icon: "error",
            draggable: true
          });
          this.router.navigate(['/signupPage'])
        }
      })



    }


  }

