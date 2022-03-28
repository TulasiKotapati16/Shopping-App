import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartservice';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  public products:any=[];
  public grandTotal !:number;

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);

  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  Signout(){
    this.router.navigate(['/login']);
  }

  homeFn(){
    this.router.navigate(['/home'])
  }

  productsFn(){
    this.router.navigate(['/products']);

  }

}
