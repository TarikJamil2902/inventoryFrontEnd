import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepaymentComponent } from './updatepayment.component';

describe('UpdatepaymentComponent', () => {
  let component: UpdatepaymentComponent;
  let fixture: ComponentFixture<UpdatepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
