import { Component, OnInit } from '@angular/core';
import { userAuthDataType, userLoginDataType } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
    show = true;
  constructor(private user : UserService) { }

  ngOnInit(): void {
  }
  UsersignUp(val : userAuthDataType){
     this.user.UsersignUp(val);
  }
  LoginUser(val : userLoginDataType){
     this.user.LoginUser(val);
  }
  openSignUp(){
    this.show = false;
  }
  openLogin() {
    this.show = true;
  }
}
