import { CartComponent } from './component/cart/cart.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './structure/home/home.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductsComponent } from './component/products/products.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { SignupPageComponent } from './component/signup-page/signup-page.component';
import { PlaceorderComponent } from './component/placeorder/placeorder.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"products", component:ProductsComponent},
  {path:"product-details/:title", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"contact", component:ContactComponent},
  {path:"loginpage", component:LoginPageComponent},
  {path:"signupPage", component:SignupPageComponent},
  {path:"placeOrder", component:PlaceorderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
