import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() counterValue: number;
  @Output() updateCounterValue = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  showInputCounter() {
    alert(this.counterValue);
  }

  increaseCounter() {
    this.counterValue = this.counterValue + 1;
    this.updateCounterValue.emit(this.counterValue)
  }

}
