import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepurchaseorderComponent } from './createpurchaseorder.component';

describe('CreatepurchaseorderComponent', () => {
  let component: CreatepurchaseorderComponent;
  let fixture: ComponentFixture<CreatepurchaseorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepurchaseorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
