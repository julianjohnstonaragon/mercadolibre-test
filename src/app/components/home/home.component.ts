import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchResult: any = [];
  categories: any = [];
  categoryId: string;
  textCategories: string;

  constructor(private productService: ProductService,
              private router: Router) {
    this.textCategories = '';
  }
  ngOnInit() {
    this.productService.searchResults.subscribe( (data: any) => {
      this.searchResult = data;
    });
  }

  goToProduct(item: any) {
      this.router.navigate( [ '/product', item.id ]);
  }

}
