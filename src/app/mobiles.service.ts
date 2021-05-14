import { Injectable } from '@angular/core';
import { product } from './models/product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MobilesService {

 // inject HttpClient service object
  constructor(private hc:HttpClient) { }


  getMobilesData():Observable<product[]>{
    //http get
   return this.hc.get<product[]>("assets/mobiles.json")
}
}
