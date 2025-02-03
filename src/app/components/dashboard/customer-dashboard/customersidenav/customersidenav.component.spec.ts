import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersidenavComponent } from './customersidenav.component';

describe('CustomersidenavComponent', () => {
  let component: CustomersidenavComponent;
  let fixture: ComponentFixture<CustomersidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
