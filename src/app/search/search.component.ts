import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addproductDataType } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchResult : undefined | addproductDataType[];
  constructor(private activateRoute : ActivatedRoute , private product : ProductService) { }

  ngOnInit(): void {
    let query = this.activateRoute.snapshot.paramMap.get('query');
    query && this.product.searchProduct(query).subscribe((result)=>{console.warn(result);
        this.searchResult = result;
    })
  }

}
