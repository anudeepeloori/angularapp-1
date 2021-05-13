import { Component, OnInit } from '@angular/core';
import { TelevisionsService } from '../televisions.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {


  televisions:product[]=[];
  constructor(private tsObj:TelevisionsService) { }

  ngOnInit(): void {
    this.televisions=this.tsObj.getTelevisionsData();
  }
   

}
