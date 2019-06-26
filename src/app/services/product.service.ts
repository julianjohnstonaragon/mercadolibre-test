import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public searchResults: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor( private http: HttpClient ) { }

  getProducts(queryName: string) {
    return this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=:' + queryName)
      .pipe( map( (data: any) => {
        return data.results.slice(0, 4);
      }));
  }

  getSpecificProduct(productId: string) {
    return this.http.get('https://api.mercadolibre.com/items/' + productId)
    .pipe( map( (data: any) => {
      return data;
    }));
  }

  getSpecificProductDescription(productId: string) {
    return this.http.get('https://api.mercadolibre.com/items/' + productId + '/description')
    .pipe( map( (data: any) => {
      return data;
    }));
  }

  getCategories(categoryId: string) {
    return this.http.get('https://api.mercadolibre.com/categories/' + categoryId )
    .pipe( map( (data: any) => {
      return data.path_from_root;
    }));
  }
}
