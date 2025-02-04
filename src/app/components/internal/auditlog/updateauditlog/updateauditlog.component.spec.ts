import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateauditlogComponent } from './updateauditlog.component';

describe('UpdateauditlogComponent', () => {
  let component: UpdateauditlogComponent;
  let fixture: ComponentFixture<UpdateauditlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateauditlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateauditlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
