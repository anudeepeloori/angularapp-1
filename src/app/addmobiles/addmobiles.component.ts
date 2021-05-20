import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobilesService } from '../mobiles.service';
import { Mobile } from '../models/mobile.model';

@Component({
  selector: 'app-addmobiles',
  templateUrl: './addmobiles.component.html',
  styleUrls: ['./addmobiles.component.css']
})
export class AddmobilesComponent implements OnInit {

  constructor(private msObj:MobilesService,private router:Router) { }

  ngOnInit(): void {
  }
  mobileModel=new Mobile('','','','');
  onSubmitNewMobile(){

    this.msObj.createNewMobile(this.mobileModel).subscribe(
      _res=>{
        //navigate to viewmobiles component
        this.router.navigateByUrl("products/mobiles")

      },
      err=>{
        console.log('err in creating new mobile',err)
      }
    )
}
  

}
