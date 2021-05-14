import { Component, OnInit } from '@angular/core';
import {BikesService} from '../bikes.service';
import { product } from '../models/product.model';
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {



  bikes:product[]=[];
  constructor(private bsObj:BikesService) { }

  ngOnInit(): void {
    this.bsObj.getBikesData().subscribe(
      data=>{this.bikes=data;},
      err=>{console.log("error",err)}
    )
  }

  
  
}
