import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent {

  @Input() result: any;

  // tslint:disable-next-line:no-trailing-whitespace
  constructor(private router: Router) {
  }

}
