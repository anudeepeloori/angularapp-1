import { Component, OnInit } from '@angular/core';
import { Fakedata2Service } from '../fakedata2.service';
import { Post2 } from '../models/posts2.model';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {


  myPosts2:Post2;
  constructor(private fs2Obj:Fakedata2Service) { }

  ngOnInit(): void {
    this.fs2Obj.getPosts2().subscribe(
      posts2Data=>{
        this.myPosts2=posts2Data;
      },
      err=>{
        console.log("error is ",err)
      }
    )
  }

}
