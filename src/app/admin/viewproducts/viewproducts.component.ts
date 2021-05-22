import { Component, OnInit } from '@angular/core';
import { MobilesService } from 'src/app/mobiles.service';
import { Mobile } from 'src/app/models/mobile.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {


  mobiles:Mobile[]=[];
  constructor(private msObj:MobilesService) { }

  ngOnInit(): void {
    this.msObj.getMobilesData().subscribe(
      res=>{
        this.mobiles=res;
      },
      err=>{
        console.log("error in view mobiles is ",err)
      }
    )
  }



}
