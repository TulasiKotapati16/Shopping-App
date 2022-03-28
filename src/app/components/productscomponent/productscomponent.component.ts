import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from 'src/app/services/cartservice';

@Component({
  selector: 'app-productscomponent',
  templateUrl: './productscomponent.component.html',
  styleUrls: ['./productscomponent.component.css']
})
export class ProductscomponentComponent implements OnInit {


  get: any;
  delete: any;
  
  

  categories:string[]|null = null;
  products:any[]|null = null;
  cartItems:any[]|null = [];
   cartItemsCount:number|any = 0;
   isCartVisible:boolean = false;
   grandTotal:number|any=0;



  GetCartItemsCount(){
    this.cartItemsCount = this.cartItems?.length;
  }

  // GetgrandTotal(){
  //   this.cartItems?.map((a:any)=>{
  //     this.grandTotal +=a.total;
  //   })
   
  // }
  



  GetProducts(url:any){
    fetch(url)
    .then(response=> response.json())
    .then(data=> {
      this.products = data;
    })
  }

  GetCategories(){
    fetch('http://fakestoreapi.com/products/categories')
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
    this.Email = this.cookie.get('Email');
    if(this.Email=="") {
       this.loginFlag = false;
    } else {
      this.loginFlag = true;
    }
    this.GetCategories();
    this.GetProducts('http://fakestoreapi.com/products');
  }

  SingoutClick() {
    this.cookie.delete('Email');
    this.router.navigate(['/login']);
  }

  onCategoryChange(e:any){
    if(e.target.value=='All'){
      this.GetProducts('http://fakestoreapi.com/products');
    } else {
      this.GetProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }
  }

  onAddToCartClick(id:any){
     fetch(`http://fakestoreapi.com/products/${id}`)
     .then(response=> response.json())
     .then(data=> {
        this.cartItems?.push(data);
        alert('Item Added to Cart');
        this.GetCartItemsCount();
        //this.GetgrandTotal();
     })
  }

  //  onToggleCart(){
  //    this.isCartVisible = (this.isCartVisible==false)?true:false;
  //    if(this.cartItemsCount==0){

  //     this.router.navigate(['/addtocart']);

  //   }
  //   else{
  //     this.router.navigate(['/cartproducts']);
  //   }
  //  }

   onToggleCart(){

    if(this.cartItemsCount==0){

      this.router.navigate(['/addtocart']);
    }
    else{
      this.isCartVisible=(this.isCartVisible==false)?true:false;

    }
   
    
  }

   loginFn()
  {
    this.router.navigate(['/login']);

  }
  homeFn(){
    this.router.navigate(['/home']);
  }

  productsFn(){
    this.router.navigate(['/products']);

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
