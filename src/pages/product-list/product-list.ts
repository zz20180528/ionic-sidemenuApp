import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../model/Product";
import {Observable} from "rxjs/Observable";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  productsObservable : Observable<Product[]>;


  constructor(public navCtrl: NavController
              , public navParams: NavParams
              , private restProvidor: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
    this.productsObservable= this.restProvidor.getProducts();
  }



}
