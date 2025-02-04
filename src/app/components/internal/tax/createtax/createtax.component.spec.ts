import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetaxComponent } from './createtax.component';

describe('CreatetaxComponent', () => {
  let component: CreatetaxComponent;
  let fixture: ComponentFixture<CreatetaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatetaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
