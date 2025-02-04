import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatediscountComponent } from './creatediscount.component';

describe('CreatediscountComponent', () => {
  let component: CreatediscountComponent;
  let fixture: ComponentFixture<CreatediscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatediscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatediscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
