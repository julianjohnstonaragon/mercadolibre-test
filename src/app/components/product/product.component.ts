import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  product: any = {};
  categories: [];
  textCategories: string;
  productId: string;
  imgUrl: string;
  condition: string;
  description: string;

  constructor(private router: ActivatedRoute,
              private productService: ProductService) {
    this.router.params.subscribe( params => {
      this.GetProduct(params.id);
    });
  }

  ngOnInit() {
  }

  GetProduct(productId: string) {
    // Recupero el producto específico
    this.productService.getSpecificProduct(productId)
      .subscribe( (data: any) => {
        if ( data != null ) {
          this.product    = data;
          this.imgUrl     = data.pictures[0].secure_url;
          this.condition  = (data.condition === 'new') ? 'Nuevo' : 'Usado';
        }
        this.condition += ' - ' + data.sold_quantity.toString() + ' ' + 'vendidos';
        // Recupero la categoría de ese producto
        this.productService.getCategories(this.product.category_id)
        .subscribe( ( categories: any) => {
          if (categories != null) {
            this.categories = categories;
            this.textCategories = '';
            this.categories.forEach(element => {
            // tslint:disable-next-line:no-string-literal
            this.textCategories += ' ' + element['name'] + ' >';
            });
            this.textCategories = this.textCategories.substring(0, this.textCategories.length - 1);
          }
        });
      });
    // Recupero la descripción del producto y la formateo para que aparezca tal cual en la página
    this.productService.getSpecificProductDescription(productId)
      .subscribe( (data: any) => {
        // this.description = this.description.replace(/\n/g, '<br />');
        this.description = data.plain_text.replace(/[\n\r]/g, '<br>');
      });
  }

}

