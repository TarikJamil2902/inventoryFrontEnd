import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditloglistComponent } from './auditloglist.component';

describe('AuditloglistComponent', () => {
  let component: AuditloglistComponent;
  let fixture: ComponentFixture<AuditloglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditloglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
