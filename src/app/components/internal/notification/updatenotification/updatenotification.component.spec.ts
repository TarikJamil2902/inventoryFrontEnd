import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenotificationComponent } from './updatenotification.component';

describe('UpdatenotificationComponent', () => {
  let component: UpdatenotificationComponent;
  let fixture: ComponentFixture<UpdatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatenotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
