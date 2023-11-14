import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { addproductDataType } from '../data-type';
import { ProductService } from '../services/product.service';

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
    searchResult : undefined | addproductDataType[];
  constructor(private router : Router , private product : ProductService) { }

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

  submitSearch(val : String){
    this.router.navigate([`search/${val}`]);
    window.location.href = `http://localhost:4200/search/${val}`;
    // setTimeout(()=>{ this.router.navigate([`search/${val}`]);},3000)
    // console.warn("value is :" + val);
   
  }

  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  searchProduct(query : KeyboardEvent){
    if(query){
        const ele = query.target as HTMLInputElement;
        console.log(ele.value);
        this.product.searchProduct(ele.value).subscribe((result)=>{
            console.log(result);
            this.searchResult = result;
            
        })
        

    }
  }

}
