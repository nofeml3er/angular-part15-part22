import { Component, ViewChild, OnInit} from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-part15-part22';

  @ViewChild('productList', {static : true}) //ViewChild
  productList: ProductListComponent; //ViewChild
  
  ngOnInit() : void {
    this.productList.products = [
      {
        name: "samsung",
        price: 455
      },
      {
        name: "huawei",
        price: 564
      },
      {
        name: "vivo",
        price: 523
      }
    ]; //ViewChild
    
  }
  constructor(){

  }
  
}