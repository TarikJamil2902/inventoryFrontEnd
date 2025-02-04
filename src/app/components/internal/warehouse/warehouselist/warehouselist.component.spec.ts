import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouselistComponent } from './warehouselist.component';

describe('WarehouselistComponent', () => {
  let component: WarehouselistComponent;
  let fixture: ComponentFixture<WarehouselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
