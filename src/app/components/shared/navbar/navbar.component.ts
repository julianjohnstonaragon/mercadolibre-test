import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchResult: any = [];
  categories: any = [];
  textCategories: string;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
  }

  searchData(termino: string) {
    this.productService.getProducts(termino)
    .subscribe( (data: any) => {
      if (data != null) {
        this.searchResult = data;
        this.productService.searchResults.next(data);
      }
      this.productService.getCategories(this.searchResult[0].category_id)
      .subscribe( ( categories: any) => {
        if (categories != null) {
          this.categories = categories;
          this.textCategories = '';
          this.categories.forEach(element => {
            this.textCategories += ' ' + element.name + ' >';
          });
          this.textCategories = this.textCategories.substring(0, this.textCategories.length - 1);
        }
      });
    });

    this.router.navigate(['/home']);
  }
}
