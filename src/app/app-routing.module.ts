import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmobilesComponent } from './addmobiles/addmobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'mobiles',component:MobilesComponent,children:[
      {path:'viewmobiles',component:ViewmobilesComponent},
      {path:'addnewmobile',component:AddmobilesComponent},
      {path:'',redirectTo:"/products/mobiles/viewmobiles",pathMatch:"full"}
    ]
  
  
    },
    { path:"bikes",component:BikesComponent},
    {path:"televisions",component:TelevisionsComponent},
    {path:'',redirectTo:'/products/mobiles',pathMatch:'full'}
  ]},
  {path:'users',component:TestComponent},
  {path:'newusers',component:Test2Component},
  {path:'test/:id',component:UserdetailsComponent},
  { path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
