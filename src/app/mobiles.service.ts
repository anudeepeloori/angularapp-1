import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Mobile } from './models/mobile.model';
@Injectable({
  providedIn: 'root'
})
export class MobilesService {

 // inject HttpClient service object
  constructor(private hc:HttpClient) { }


  getMobilesData():Observable<Mobile[]>{
    //http get
   return this.hc.get<Mobile[]>("http://localhost:3000/mobiles")
}
  createNewMobile(mobileObj):Observable<any>{
  return this.hc.post("http://localhost:3000/mobiles",mobileObj)
  
}
}
