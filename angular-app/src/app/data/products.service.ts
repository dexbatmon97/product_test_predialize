import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import { Ticket } from '../model/ticket';
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

  postTicket(productId: String, dateOfCreation: String) {
    return this.http.post<Ticket>(`http://localhost:3000/products/${productId}/tickets`,
    {dateOfCreation: dateOfCreation});
  }

  getTickets(productId: String) {
    return this.http.get<Ticket[]>(`http://localhost:3000/products/${productId}/tickets`);
  }
}
