import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addproductDataType } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  constructor(private route : ActivatedRoute , private product : ProductService , private router : Router ) { }
    ProductData : undefined | addproductDataType;
    ProductMSG : string | undefined;
  ngOnInit(): void {

    let ProductId = this.route.snapshot.paramMap.get('id');
    console.log("producct id is : " + ProductId);
    ProductId && this.product.getPorduct(ProductId).subscribe((result)=>{
        console.warn(result);
        this.ProductData = result;
    })

      
}
  
  submit(data : addproductDataType){
    console.warn(data);
    if(this.ProductData){
        data.id = this.ProductData.id 
    }
    this.product.updateProduct(data).subscribe((result)=>{console.warn(result)
        if(result){
            this.ProductMSG = "Data Updated SuccessFully";
        }

        
    }
    );
    setTimeout(()=>{this.ProductMSG = undefined;
    this.router.navigate(['seller-home'])
    },2000);

    
  }
}
