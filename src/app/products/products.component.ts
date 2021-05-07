import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products: product[]=[
{
productTitle:"Elephants",
description:"Elephants are the largest existing land animals. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant.",
productImage:"https://thumbs-prod.si-cdn.com/vMk0NVAHvjoshXbyEGIzcyRb6kQ=/fit-in/1600x0/filters:focal(714x204:715x205)/https://public-media.si-cdn.com/filer/6e/76/6e76bb77-6bd8-4d90-8d13-ef9d3791eb17/00310801web.jpg"
},
{
productTitle:"Crocodile",
description:"Crocodiles (subfamily Crocodylinae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia.",
productImage:"https://i.natgeofe.com/n/313593b4-eb7a-4154-b02a-dad499f5b36a/22-frans-lanting-nationalgeographic_1517624.jpg"
},

{
productTitle:"Lions",
description:"The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears etc",
productImage:"https://www.nhm.ac.uk/content/dam/nhmwww/discover/frans-lanting-lifetime-achievement/frans-lanting-lions-hero.jpg"
},

{
productTitle:"Under Water Creatures",
description:"Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa.",
productImage:"https://www.nhm.ac.uk/content/dam/nhmwww/discover/frans-lanting-lifetime-achievement/Frans-Lanting-3full-width.jpg.thumb.1920.1920.jpg"
},

{
productTitle:"Chameleon",
description:"Chameleons or chamaeleons (family Chamaeleonidae) are a distinctive and highly specialized clade of Old World lizards with 202 species described as of June 2015.",
productImage:"https://1843magazine.static-economist.com/sites/default/files/6.-chameleon.jpg"
},

{
productTitle:"Leapord",
description:"The leopard (Panthera pardus) is one of the five extant species in the genus Panthera, a member of the Felidae. It occurs in a wide range in sub-Saharan Africa.",
productImage:"https://www.outdoorphotographer.com/images/stories/2015/may/worldview/lead.jpg"
}


]


productsSentByChild=[];
productCount:number=0;
getProductDetailsFromChild(productTitle){
  this.productsSentByChild.push(productTitle);
  this.productCount++;
}


}
