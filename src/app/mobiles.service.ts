import { Injectable } from '@angular/core';
import { product } from './models/product.model';
@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  constructor() { }

  private mobiles:product[]=[
    {
      productTitle:"Samsung",
      productBrand:" Samsung Galaxy S20",
      productPrice:"20,000",
      productImage:"https://www.reliancedigital.in/medias/Samsung-F62-Gray-6GB-128GB-Smart-Phone-491947006-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0Nzc2OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDMwL2g1Ni85NDg3NjU0NDUzMjc4LmpwZ3xiNTg0NWMyZDA4MjNhMjZiNTViMzgxMWVkNzhkMDljYzhhODkxNThjYjA3MTY5YTY5OGU4MDQzN2IwYTE4YjNm"
      },
      {
      productTitle:"Samsung",
      productBrand:" Samsung Galaxy S30",
      productPrice:"30,000",
      productImage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkBGzfkKkOYJVYQ8doKsekLbg4-hxvhU03lnTJ3ANTVtTCjbbjfGx_KwLWDIHC_F_bZwEJzISQbg5ZcJBdgIq0Jv3264PxYYpAojNS&usqp=CAE"
      },
    
      {
      productTitle:"Honor",
      productBrand:"Honor 11 ",
      productPrice:"15,000",
      productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbP0LnZv3qE1Rfi-Odh1gXeUG2KgYcy8f1OuyWpUW541vobmZKGc_Se_ZGWiSvgmxrryXb1t6Djd8u-SbOtB3Dc9OTpQZbL13NOddtnbKIJRc_Z9mMr_8prtRZ1707&usqp=CAE"
      },
    
      {
      productTitle:"Iphone-11",
      productBrand:" Iphone-11 128Gb",
      productPrice:"50,000",
      productImage:"https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDM0Njh8aW1hZ2UvanBlZ3xpbWFnZXMvaGVkL2hmOC85NDIxOTEzODgyNjU0LmpwZ3xhNjFjNWUwZjEyYjQ2ZDM2Y2U5MmYwNDhiOGYzN2NmMjU2ZjNjMGU5ODE3ZmIzNzliMjc4ODM5MTcyMjU4NWU3"
      },
    
      {
      productTitle:"OnePlus",
      productBrand:" OnePlus Nord",
      productPrice:"35,000",
      productImage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSUuEBAPL5zK9DxOSP7wVmZvmsrEkreYBElrHbiRWzi-5E5I7xIRofTaQHyu__yckyryhzs95_i71YBzRwNaia3mfZaZkeh7SZfUL4OZqZRmwQgUQ6Xnf4OdCriEFg&usqp=CAE"
      },
    
      {
      productTitle:"Google pixel",
      productBrand:" Google pixel - 4a",
      productPrice:"40,000",
      productImage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRBTGWt2DocSe4zyFYWDFFrqB7eSl8l-UK6Wg55jGeC0AH2mdzBjsHleb7UJUtyolOS-_NDvwRQRWA8wVx7A1cYqjJD81KVZkqkKwvW-xFGAs5IAFDj3T_apl3QcBE&usqp=CAE"
      }
  ];

  getMobilesData():product[]{
    return this.mobiles;
  }
}
