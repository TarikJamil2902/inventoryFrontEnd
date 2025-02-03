import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersidenavComponent } from './managersidenav.component';

describe('ManagersidenavComponent', () => {
  let component: ManagersidenavComponent;
  let fixture: ComponentFixture<ManagersidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
