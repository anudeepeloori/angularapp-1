import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from './models/posts.model';


@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private hc:HttpClient) { }


  getPosts():Observable<Post[]>{
    return this.hc.get<Post[]>('http://localhost:3000/usersdata')
  }


  getPostById(id):Observable<Post>{
    return this.hc.get<Post>('http://localhost:3000/usersdata/'+id)
  }
}
