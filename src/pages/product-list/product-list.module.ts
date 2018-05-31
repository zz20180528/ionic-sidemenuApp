import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductListPage } from './product-list';
import {OrderModule} from "ngx-order-pipe";  //정렬모듈 npm install  ngx-order-pipe --save

@NgModule({
  declarations: [
    ProductListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductListPage),
    OrderModule //정렬모듈 npm install  ngx-order-pipe --save
  ],
})
export class ProductListPageModule {}
