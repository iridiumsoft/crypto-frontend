import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Orders.HistoryComponent } from './orders.history.component';

describe('Orders.HistoryComponent', () => {
  let component: Orders.HistoryComponent;
  let fixture: ComponentFixture<Orders.HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Orders.HistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Orders.HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
