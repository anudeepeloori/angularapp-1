import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
 export class ProductDetailsComponent{

  @Input() productObj: product;

  //create custom event
  @Output() myEvent=new EventEmitter();

  sendProductDetailsToParent(productTitle){
    //emit data to parent
    this.myEvent.emit(productTitle);
  }
}
