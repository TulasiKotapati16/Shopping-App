import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from 'src/app/services/cartservice';

@Component({
  selector: 'app-cartproducts',
  templateUrl: './cartproducts.component.html',
  styleUrls: ['./cartproducts.component.css']
})
export class CartproductsComponent implements OnInit {
  get: any;
  delete: any;
  
  cartItemsCount:number|any=0;
  cartItems:any[]|null = [];
  categories:string[]|null = null;
  products:any[]|null = null;

  GetCartItemsCount(){
    this.cartItemsCount = this.cartItems?.length;
  }

  GetProducts(url:any){
    fetch(url)
    .then(response=> response.json())
    .then(data=> {
      this.products = data;
    })
  }

  GetCategories(id:any){
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response=> response.json())
    .then(data=> {
      data.unshift('All');
      this.categories = data;
    })
  }



  constructor(private cookie: CookieService,private router: Router) { }

  Email:any;
  loginFlag:boolean = false;

  ngOnInit(): void {
    //console.log('12345');
    

    this.cartItems?.push();
    //this.GetCategories();
    this.GetProducts('http://fakestoreapi.com/products');
    
    
  }

  homeFn(){
    this.router.navigate(['/home']);
  }

  
  loginFn()
  {
    this.router.navigate(['/login']);

  }

  

  
  onRemoveClick(index:any){
    let choice = confirm('Are you sure? whant to Delete?');
    if(choice==true) {
     this.cartItems?.splice(index,1);
     alert('Item Removed from Cart');
     this.cartItemsCount=this.cartItemsCount-1;
     
    }
  }

}


