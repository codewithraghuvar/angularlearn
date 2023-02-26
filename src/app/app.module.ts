import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FormsModule } from '@angular/forms';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ContainerComponent,
    SearchFilterComponent,
    SideFilterComponent,
    AddProductComponent,
    FooterComponent,
    ErrorComponent,
    UserComponent,
    ProductsComponent,
    ProductComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
