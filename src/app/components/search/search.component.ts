import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchResult: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  searchProducts(termino: string) {
    console.log(termino);
    this.productService.getProducts(termino)
      .subscribe( (data: any) => {
        this.searchResult = data;
      });
  }
}
