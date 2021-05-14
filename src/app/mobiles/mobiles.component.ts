import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {


  mobiles:product[]=[];
  constructor(private msObj:MobilesService) { }

  ngOnInit(): void {
    this.msObj.getMobilesData().subscribe(
      data=>{this.mobiles=data;},
      err=>{console.log("error is",err)}
    )
  }

  
}
