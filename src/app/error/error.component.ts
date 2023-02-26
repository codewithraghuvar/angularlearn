import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  constructor(private route: Router, private activeRoute: ActivatedRoute){

  }
  navigateHome(){
    this.route.navigate(['men']);
    // this.route.navigate(['men'],{relativeTo: this.activeRoute}); if want to add to relative path use this
    // this.route.navigateByUrl('men')
  }
}
