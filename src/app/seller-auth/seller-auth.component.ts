import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router} from '@angular/router';
import { login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller : SellerService , private router : Router) {}
  showing = false;
  IsErrorAuth : String = "";
  ngOnInit(): void {
    this.seller.reloadSeller();
  
  }
  
  signUp(data: SignUp): void{
    console.warn(data);
    this.seller.userSignUp(data)
        
   
  }  

  Login(data : login) : void{
    this.IsErrorAuth = "";
    console.warn(data);
    this.seller.userLogin(data)
    this.seller.isLogin.subscribe((result)=>{
        if(result){
            this.IsErrorAuth = "User Email Or Password Not Matched Try Again !!"
        }
    })
    
  }

  openLogin(){
    this.showing=true;
    
  }
 
  openSignUp(){
    this.showing = false;
  }


  }


