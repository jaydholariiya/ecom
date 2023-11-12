import { Component, OnInit } from '@angular/core';
import {addproductDataType} from '../data-type';
import { ProductService } from '../services/product.service';
// import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
    addProductMessage : string | undefined;
  constructor(private product : ProductService) { }

  ngOnInit(): void {
   
  }
  submit(data : addproductDataType){ 
    this.product.addProduct(data).subscribe((result)=>
    {
        if(result){
            this.addProductMessage = "Data Added SuccessFully";
        }
        else{
            this.addProductMessage = "Something went wrong! Try again.";
        }
        setTimeout(()=>{ this.addProductMessage = undefined;
        
        
        },3000);
      }
    );
    }

}
