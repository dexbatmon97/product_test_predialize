import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../data/products.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: Product[] = []; 

  constructor(public ProductsService: ProductsService) { }

  ngOnInit(): void {
    console.log(ProductsService);
    this.ProductsService.getProducts()
      .subscribe((result) => this.products = result);
  }

}
