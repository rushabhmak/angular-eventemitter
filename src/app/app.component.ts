import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-event-emitter';
  counter: number;
  products = [];
  product: any;
  ngOnInit() {
    this.counter = 0;
    this.products = [
      {
        'id': 1,
        'name': "T-Shirts",
        'quantity': 10
      },
      {
        'id': 2,
        'name': "Shirts",
        'quantity': 10
      },
      {
        'id': 3,
        'name': "Jeans",
        'quantity': 10
      }
    ];
  }

  updateProductQuantity(data){
    this.product = this.products.find(x => x.id ==  data.productDetail.id);
    this.product.quantity = parseInt(this.product.quantity) + parseInt(data.quantity);
  }

  updateCounter(counter: number) {
    this.counter = counter;
  }
}
