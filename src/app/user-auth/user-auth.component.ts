import { Component, OnInit } from '@angular/core';
import { userAuthDataType } from '../data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  UsersignUp(val : userAuthDataType){
    console.log("usersignup is : " , val);
    
  }
}
