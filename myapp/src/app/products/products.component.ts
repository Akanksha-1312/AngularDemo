import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allowNewProduct=false;
  productName="";
  
  status="No Product";

  constructor() { }

  ngOnInit(): void {
  }
  onCreateProduct(){
    this.status="Product Created";
  }
}
