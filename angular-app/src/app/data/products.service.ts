import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private  http: HttpClient) { }

  getProducts() {
   return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductById(id: String) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
   }
}
