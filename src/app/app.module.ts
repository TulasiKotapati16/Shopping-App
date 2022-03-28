import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ProductscomponentComponent } from './components/productscomponent/productscomponent.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { CartproductsComponent } from './components/cartproducts/cartproducts.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';


@NgModule({
  declarations: [
    AppComponent,   
    HomeComponent,
    LoginComponent,   
    NotfoundComponent,
    RegisterComponent,
    ProductscomponentComponent,
    AddtocartComponent,
    CartproductsComponent,
    HeaderComponent,
    MainComponent,
    ProductsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
