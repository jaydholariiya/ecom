import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';
import { addproductDataType } from '../data-type';
@Component({
  selector: 'app-home',
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    activeRoute: any;
    
  constructor(private product : ProductService) { }
  popularProduct : undefined | addproductDataType[];
  getValue :undefined | addproductDataType;
  trend : undefined | addproductDataType[];
  ngOnInit(): void {
    this.product.popularProduct().subscribe((result)=>{
        console.warn("popular result is : ",result);
        this.popularProduct = result;
    })

    this.product.TrendingProduct().subscribe((result)=>{
        console.warn("Trending result is :" , result);
        this.trend = result;
        
    })

    let data = this.activeRoute.snapshot.paramMap.get('productId');
    console.log("Product ID is " +data);
   data && this.product.getPorduct(data).subscribe((result)=>{
    console.warn(result);
    this.getValue = result;

  })
}


  

  

   
}
