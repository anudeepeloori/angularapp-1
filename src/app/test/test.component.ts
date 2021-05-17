import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FakedataService } from'../fakedata.service';
import { Post } from '../models/posts.model';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myPosts:Post;
  users;
  constructor(private fsObj:FakedataService,private router:Router) { }


  ngOnInit(): void {

  
      this.fsObj.getPosts().subscribe(
      userData=>{
       this.users=userData;
      },
      err=>{
        console.log("error is ",err)
      }
      )

  }
  onSelectId(id){
    this.router.navigateByUrl('test/'+id)
  }

  
}

