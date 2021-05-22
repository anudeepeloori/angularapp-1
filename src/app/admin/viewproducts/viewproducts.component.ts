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
  editMobileIndex;
  editMobileObj=new Mobile('','','','')
  editMobileStatus:boolean=false;
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

  //to edit mobile
  editMobile(mobileObj,ind){
    this.editMobileObj=mobileObj;
    this.editMobileIndex=ind;
    this.editMobileStatus=true;

    console.log('obj to be edited ',this.editMobileObj)
  }

  //save mobile after edit
  saveMobile(modifiedMobileObj){
    this.editMobileStatus=false;

    modifiedMobileObj.id=this.editMobileObj["id"];
    
    modifiedMobileObj.productImage=this.editMobileObj["productImage"];

    this.msObj.updateMobile(modifiedMobileObj).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log("err in update ",err)
      }
    )
  }

  //delete mobile
  deleteMobile(mobileObj){
    console.log("mobile to delete",mobileObj.id)
    this.msObj.deleteMobile(mobileObj.id).subscribe(
      res=>{
        //write getting latest data from API
        console.log("res is ",res);
        alert("Mobile deleted")
      },
      err=>{
        console.log("err in delete mobile",err)
      }
    )
  }

}
