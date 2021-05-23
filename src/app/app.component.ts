import { Component } from '@angular/core';
import { MobilesService } from './mobiles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public msObj:MobilesService){}


}


