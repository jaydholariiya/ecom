import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    menuHeader : String = "default";
    sellerName : any = "";
    data1 : any = "";
    sellerEmail : any = ""; 
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val : any)=>{
        
        if(val.url){
            if(localStorage.getItem('seller') && val.url.includes('seller')){
                console.warn("seller in");
                this.menuHeader = 'seller';
                let sellerStorage = localStorage.getItem('seller');
                let sellerData = sellerStorage && JSON.parse(sellerStorage)[0];
                this.sellerName = sellerData.email;


                this.data1  = localStorage.getItem('seller');
                let parsedData = JSON.parse(this.data1);
                this.sellerEmail = parsedData['email'];
                console.warn(this.sellerEmail);
            }
            else{
                this.menuHeader = 'default';
                console.warn("seller out");
                
            }
        }
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

}
