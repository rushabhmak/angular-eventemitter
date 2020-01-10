import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() productDetail: any;
  @Output() updateQuantity = new EventEmitter<{ productDetail: any, quantity: number }>();
  quantity: any;
  constructor() { }

  ngOnInit() {
  }

  updateProductQuantity(productData) {
    this.productDetail.quantity = parseInt(productData.quantity) + parseInt(this.quantity);
    this.quantity = "";
  }
}
