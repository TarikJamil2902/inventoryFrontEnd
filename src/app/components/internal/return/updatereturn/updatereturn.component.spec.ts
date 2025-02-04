import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReturnComponent } from './updatereturn.component';

describe('UpdateReturnComponent', () => {
  let component: UpdateReturnComponent;
  let fixture: ComponentFixture<UpdateReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
