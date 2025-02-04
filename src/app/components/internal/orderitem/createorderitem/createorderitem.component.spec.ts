import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderItemComponent } from './createorderitem.component';

describe('CreateorderitemComponent', () => {
  let component: CreateOrderItemComponent;
  let fixture: ComponentFixture<CreateOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrderItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
