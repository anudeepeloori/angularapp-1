import { Injectable } from '@angular/core';
import { product } from './models/product.model';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TelevisionsService {

  constructor(private hc:HttpClient) { }

  
  getTelevisionsData():Observable<product[]>{
    return this.hc.get<product[]>("assets/televisions.json")
  }
}
