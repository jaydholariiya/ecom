import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addproductDataType } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    getData : undefined | addproductDataType;
    productQua : number = 1;
  constructor(private activeRoute : ActivatedRoute , 
              private product : ProductService
    ) { }

  ngOnInit(): void {

    let data = this.activeRoute.snapshot.paramMap.get('productId');
    console.log("Product ID is " +data);
   data && this.product.getPorduct(data).subscribe((result)=>{
    console.warn(result);
    this.getData = result;

    
   })

   

  }
  handleQuantity(val : string){
    if(this.productQua > 1 && val == 'min'){
        this.productQua = this.productQua - 1;
    }
    else if(this.productQua < 20 && val == 'max'){
        this.productQua += 1;
    }
  }
}
