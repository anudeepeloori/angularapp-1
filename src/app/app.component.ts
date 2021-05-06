import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users=[];

 
  addUserData(ref){

    let userObj=ref.value;
    
    //push into users array
    this.users.push(userObj)

    //clear form flields
    ref.reset();
  }
   
  deleteUser(index){
    this.users.splice(index,1)
  }


}


