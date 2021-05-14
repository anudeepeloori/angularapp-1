import { Injectable } from '@angular/core';
import { product } from './models/product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  constructor( private hc:HttpClient) { }

  getBikesData():Observable<product[]>{
        return this.hc.get<product[]>("assets/bikes.json");
  }
}
