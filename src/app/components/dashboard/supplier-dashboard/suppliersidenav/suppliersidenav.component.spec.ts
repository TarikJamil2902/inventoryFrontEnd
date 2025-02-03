import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersidenavComponent } from './suppliersidenav.component';

describe('SuppliersidenavComponent', () => {
  let component: SuppliersidenavComponent;
  let fixture: ComponentFixture<SuppliersidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliersidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliersidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
