import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
import{MobilesService}from '../mobiles.service';
import { Mobile } from '../models/mobile.model';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {

  mobiles:Mobile[]=[];
  constructor(private msObj:MobilesService) { }

  ngOnInit(): void {

    this.msObj.getMobilesData().subscribe(
      data=>{this.mobiles=data;},
      err=>{console.log("error is",err)}
    )

  }

}
