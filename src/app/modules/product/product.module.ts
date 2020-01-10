import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddQauntityComponent } from './add-quantity.component';
import { ProductDetailComponent } from './product-detail.component';




@NgModule({
  declarations: [AddQauntityComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddQauntityComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }

