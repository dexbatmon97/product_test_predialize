import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import {ProductsService} from '../data/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public product: Product;

  constructor(public ProductsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params.id;
    this.ProductsService.getProductById(productId)
      .subscribe(result => {
        this.product = result
      });
  }

}
