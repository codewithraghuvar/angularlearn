import { Component } from '@angular/core';

@Component({
  selector: 'search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  searchedValue : String = ''
 
  searchFilter() {
    console.log(this.searchedValue )
  }
}
