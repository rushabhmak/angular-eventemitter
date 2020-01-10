import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.scss']
})
export class AddQauntityComponent implements OnInit {

  @Input() productDetail: any;
  @Output() updateQuantity = new EventEmitter<{productDetail: any, quantity: number}>();
  quantity:any;
  constructor() { }

  ngOnInit() {
  }

  updateProductQuantity(productData){
    this.productDetail.quantity = parseInt(productData.quantity) + parseInt(this.quantity);
    this.updateQuantity.emit({ productDetail: productData, quantity: this.quantity});
    this.quantity = "";
  }

}
