import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addproductDataType } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    // addProductMessage : string | undefined;
  constructor(private http : HttpClient) { }
  addProduct(data : addproductDataType){
    console.warn(data);
    return this.http.post('http://localhost:3000/product', data , {observe :'response'})
    
  }

  getProduct(){
    return this.http.get<addproductDataType[]>('http://localhost:3000/product')
  }

  deleteProduct(id : number){
    console.warn("deleted successfully");
    return this.http.delete(`http://localhost:3000/product/${id}`);
    
}
}

