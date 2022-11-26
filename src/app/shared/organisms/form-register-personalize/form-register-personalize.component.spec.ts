import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterPersonalizeComponent } from './form-register-personalize.component';

describe('FormRegisterPersonalizeComponent', () => {
  let component: FormRegisterPersonalizeComponent;
  let fixture: ComponentFixture<FormRegisterPersonalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterPersonalizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterPersonalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
