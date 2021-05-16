import { Component, OnInit } from '@angular/core';
import{ FakedataService } from'../fakedata.service'
import { Post } from '../models/posts.model';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myPosts:Post[]=[];
  constructor(private fsObj:FakedataService) { }


  ngOnInit(): void {


    this.fsObj.getPosts().subscribe(
      postsData=>{
        this.myPosts=postsData;
      },
      err=>{console.log("error is ",err)}
    )
  }

}
