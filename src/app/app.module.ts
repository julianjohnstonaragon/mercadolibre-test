import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

// Importamos las rutas
import { ROUTES } from './app.routes';

// Importamos los servicios
import { ItemsComponent } from './components/items/items.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    SearchComponent,
    ItemsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
