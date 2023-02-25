import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  filterHeaderText: string = 'Categories'
  selectedFilterItem : any ;
  itemList = [
    {
      id: 'C001',
      category: 'cloth',
      label: 'tshirts',
      isChecked: false
    },
    {
      id: 'C002',
      category: 'cloth',
      label: 'shirts',
      isChecked: false
    },
    {
      id: 'C003',
      category: 'cloth',
      label: 'pants',
      isChecked: false
    },
    {
      id: 'C004',
      category: 'footwear',
      label: 'sports shoe',
      isChecked: false
    },
    {
      id: 'C005',
      category: 'footwear',
      label: 'casual shoe',
      isChecked: false
    },
    {
      id: 'C005',
      category: 'footwear',
      label: 'sandals',
      isChecked: false
    }    
  ]

  products:any = [
    {
      id:1, 
      name: 'Orange kids shoe', 
      price: 250, 
      color: 'orance',
      available: 'available',
      category: 'sports shoe',
      image:'./assets/products/shoe1.jpeg',
      productFor: 'girl'
    },
    {
      id:2, 
      name: 'Flip Flop Kids', 
      price: 200, 
      color: 'grey',
      category: 'sports shoe',
      available: 'not available', 
      image:'./assets/products/shoe2.jpeg',
      productFor: 'boy'
    },
    { 
      id:3, 
      name: 'Sports shoe kids', 
      price: 300, 
      color: 'grey',
      category: 'sandals',
      available: 'available', 
      image:'./assets/products/shoe3.jpeg',
      productFor: 'girl'
    },
    { 
      id:4, 
      name: 'Sleeper Kids', 
      price: 500, 
      color: 'white',
      category: 'sandals',
      available: 'not available', 
      image:'./assets/products/shoe4.jpeg',
      productFor: 'boy'
    }
  ]

  selectedItems(items: string) {
    console.log('items='+ typeof items)  
    console.log('items value='+  items.toString()) 
    let itemsValue = items.toString()
    this.selectedFilterItem = itemsValue.length > 1 ? itemsValue.split(",") : itemsValue;
    console.log('this.selectedFilterItem=='+this.selectedFilterItem)
  }

  getProducts(){
    if(this.selectedFilterItem.length) {
      return this.products.filter((item : any) => {
        return this.selectedFilterItem.includes(item.category) 
      })
    } else {
      return this.products
    }
    
  }
}
