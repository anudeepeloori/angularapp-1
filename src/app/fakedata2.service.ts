import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post2 } from './models/posts2.model';

@Injectable({
  providedIn: 'root'
})
export class Fakedata2Service {

  constructor(private hc:HttpClient) { }

  getPosts2():Observable<Post2>{

    return this.hc.get<Post2>('https://reqres.in/api/unknown')
  }
}
