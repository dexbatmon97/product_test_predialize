import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import{ProductsService} from './data/products.service';
import{Post} from './model/post'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='lista';
  posts:Post[]=[];

   

    constructor(public ProductsService: ProductsService){}
  ngOnInit() {
    this.ProductsService.getPosts()

    /*.subscribe(
      posts =>{
      console.log(posts);
      this.posts= posts;
      },
      err=>console.log(err)
    )*/
  }
  

}
