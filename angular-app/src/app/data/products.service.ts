import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../model/post';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private  http: HttpClient) { }
  getPosts(){
   this.http.get<Post[]>('http://http://jsonplaceholder.typicode.com/posts?_limit=3');
  }
}
