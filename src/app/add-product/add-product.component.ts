import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  @ViewChild('name')  productName!: ElementRef;
  @ViewChild('price') productPrice!: ElementRef;
 
  addProduct(){
    console.log(this.productName.nativeElement.value)
    console.log(this.productPrice.nativeElement.value)
  }

}
