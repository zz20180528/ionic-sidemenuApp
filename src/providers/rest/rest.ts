import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"

import {Product} from "../../model/Product";

@Injectable()
export class RestProvider {
  baseUrl : string = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  //Product 전체 List
  public getProducts():Observable<Product[]>{
    return this.http.get( this.baseUrl + "/products")
      .map( (resp:Product[])=> {  //object 형태를 product[] 로 변환하기 위해서 map method를 사용함
         return resp.map(product => {
           return new Product(product)
         } )
      } )
      .catch(
        err => {
          return Observable.empty<Product[]>();//error 발생시 빈 product[]을 넘겨줌
        }
      )
    ;

  }
}
