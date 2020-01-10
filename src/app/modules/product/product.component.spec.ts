import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQauntityComponent } from './add-quantity.component';

describe('ProductComponent', () => {
  let component: AddQauntityComponent;
  let fixture: ComponentFixture<AddQauntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQauntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQauntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
