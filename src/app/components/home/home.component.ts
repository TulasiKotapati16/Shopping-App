import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  get: any;
  delete: any;
  
  
  
  

  constructor( private cookie: CookieService,private router: Router) { }
  Email:any;
  loginFlag:boolean = false;
  ngOnInit(): void {
    this.Email = this.cookie.get('Email');
    if(this.Email=="") {
       this.loginFlag = false;
    } else {
      this.loginFlag = true;
    }
  }
  SingoutClick() {
    this.cookie.delete('Email');
    this.router.navigate(['/login']);
  }
  
  loginfn()
  {
    this.router.navigate(['/login']);
  }
  SignUpfn(){
    this.router.navigate(['/register']);
  }
  homeFn(){
    this.router.navigate(['/home']);
  }
  productsFn()
  {
    this.router.navigate(['/login']);

  }

}
