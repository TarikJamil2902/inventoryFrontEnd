import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateauditlogComponent } from './createauditlog.component';

describe('CreateauditlogComponent', () => {
  let component: CreateauditlogComponent;
  let fixture: ComponentFixture<CreateauditlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateauditlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateauditlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
