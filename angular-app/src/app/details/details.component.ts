import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import {ProductsService} from '../data/products.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../model/ticket';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public product: Product;
  public tickets: Ticket[] = [];
  public createTicketDisabled: boolean = true;

  constructor(public ProductsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params.id;
    this.ProductsService.getProductById(productId)
      .subscribe(result => {
        this.product = result
        console.log(new Date() > new Date(result.deadline))
        this.createTicketDisabled = new Date() > new Date(result.deadline)
      });
    this.ProductsService.getTickets(productId)
      .subscribe(result => {
        this.tickets = result
      });
  }

  createTicket() {
    const productId = this.route.snapshot.params.id;
    this.ProductsService.postTicket(productId, new Date().toISOString())
      .subscribe(result => {
        this.tickets.push(result);
      });
  }

}
