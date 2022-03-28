import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
