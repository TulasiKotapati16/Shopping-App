import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddtocartComponent } from './components/addtocart/addtocart.component';
import { CartproductsComponent } from './components/cartproducts/cartproducts.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductscomponentComponent } from './components/productscomponent/productscomponent.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  
   //{path: 'home', redirectTo: '', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  //{path: 'search/:id/:name/:price', component: SearchComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: 'login', component: LoginComponent},
  {path:'cartproducts', component:CartproductsComponent},
  //{path: 'shopping', component: ShoppingComponent},
  {path:'products', component:ProductscomponentComponent},
  {path:'addtocart', component:AddtocartComponent},
  {path: '**', component: NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
