import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './component/categories/categories.component';
import { ProductCategoriesComponent } from './component/product-categories/product-categories.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

import { HomeComponent } from './structure/home/home.component';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { AboutComponent } from './component/about/about.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { SignupPageComponent } from './component/signup-page/signup-page.component';
import { PlaceorderComponent } from './component/placeorder/placeorder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    ProductCategoriesComponent,
    ProductDetailsComponent,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    AboutComponent,
    LoginPageComponent,
    SignupPageComponent,
    PlaceorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
