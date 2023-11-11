import { Component, OnInit } from '@angular/core';
import { addproductDataType } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
    productList : undefined | addproductDataType[];
    productMsg : undefined | string;
  constructor(private product : ProductService) { }

  ngOnInit(): void {
    this.product.getProduct().subscribe((result)=>{
        console.warn(result);
        this.productList = result;

    })
  }

deleteProduct(id : number){
    // console.warn("data Deleted Successgully ID is : " , id);

    this.product.deleteProduct(id).subscribe((result)=>{
        if(result){
            this.productMsg = "Product Is Deleted"
        }
        this.product.getProduct().subscribe((result)=>{
            console.warn(result);
            this.productList = result;
    
        })
        
        setTimeout(()=>{this.productMsg = undefined},3000);
    })
    
}

}
