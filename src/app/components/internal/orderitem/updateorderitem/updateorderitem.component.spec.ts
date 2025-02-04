import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorderitemComponent } from './updateorderitem.component';

describe('UpdateorderitemComponent', () => {
  let component: UpdateorderitemComponent;
  let fixture: ComponentFixture<UpdateorderitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateorderitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateorderitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
