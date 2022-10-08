import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSignGoogleComponent } from './button-sign-google.component';

describe('ButtonSignGoogleComponent', () => {
  let component: ButtonSignGoogleComponent;
  let fixture: ComponentFixture<ButtonSignGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSignGoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSignGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
