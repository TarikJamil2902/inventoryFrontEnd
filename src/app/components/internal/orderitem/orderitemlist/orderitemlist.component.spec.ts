import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderitemlistComponent } from './orderitemlist.component';

describe('OrderitemlistComponent', () => {
  let component: OrderitemlistComponent;
  let fixture: ComponentFixture<OrderitemlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderitemlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderitemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
