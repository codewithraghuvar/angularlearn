import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products:any = [
    {id:1, name: 'Watch', price: 100, color: 'black',available: 'Available', image:'assets/images/products/watch.jpg'},
    {id:2, name: 'Mobile', price: 200, color: 'black',available: 'Not Available', image:'assets/images/products/mobile.jpg'},
    {id:3, name: 'TV', price: 300, color: 'black',available: 'Available', image:'assets/images/products/tv.jpg'},
    {id:4, name: 'Freeze', price: 500, color: 'black',available: 'Not Available', image:'assets/images/products/freeze.jpg'}
    ]
}
