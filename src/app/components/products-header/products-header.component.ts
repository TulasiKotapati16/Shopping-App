import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  cartItemsCount:number|any = 0;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  countercart(e: any){
    if(this.cartItemsCount==0){

      this.router.navigate(['/addtocart']);

    }
    else{
      this.router.navigate(['/cartproducts']);
    }
      
  }

}
