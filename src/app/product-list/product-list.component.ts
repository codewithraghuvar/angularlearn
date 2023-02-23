import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products:any = [
    {id:1, name: 'Orange kids shoe', price: 250, color: 'orance',available: 'Available', image:'./assets/products/shoe1.jpeg'},
    {id:2, name: 'Flip Flop Kids', price: 200, color: 'grey',available: 'Not Available', image:'./assets/products/shoe2.jpeg'},
    {id:3, name: 'Sports shoe kids', price: 300, color: 'grey',available: 'Available', image:'./assets/products/shoe3.jpeg'},
    {id:4, name: 'Sleeper Kids', price: 500, color: 'white',available: 'Not Available', image:'./assets/products/shoe4.jpeg'}
    ]
}
