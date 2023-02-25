import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent {
  @Input() itemList: any = []
  @Input() filterHeaderText = 'Category'
  @Output()
  selectedItems: EventEmitter<string> = new EventEmitter<string>();

  selectedItemsList: any = [];
  checkedIDs: any = [];
  FilterHeadertText = 'Category'
  listOfItems = [{
    id: 'C001',
    label: 'Tshirts',
    isChecked: false
  }]
 
  ngOnInit(): void {
    this.listOfItems = this.itemList
    this.fetchSelectedItems()
    this.fetchCheckedIDs()

  }

  changeSelection() {
    this.fetchSelectedItems()
    this.fetchCheckedIDs();
  }

  fetchSelectedItems() {
    if(this.listOfItems.length) {
      this.selectedItemsList = this.listOfItems.filter((value, index) => {
        return value.isChecked
      }); 
    }
       
  }
  fetchCheckedIDs() {
    this.checkedIDs = []
    if(this.listOfItems.length) {
      this.listOfItems.forEach((value, index) => {
        if (value.isChecked) {
          this.checkedIDs.push(value.label);
        }
      });
    }
    this.selectedItems.emit(this.checkedIDs)
  }
}
