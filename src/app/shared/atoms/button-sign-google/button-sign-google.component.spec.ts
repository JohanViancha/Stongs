import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonSignGoogleComponent } from './button-sign-google.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthService } from 'src/app/core/security/auth/auth.service';
import { AlertService } from '../../util/services/alert.service';
import { Auth } from '@angular/fire/auth';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('ButtonSignGoogleComponent', () => {
  let component: ButtonSignGoogleComponent;
  let fixture: ComponentFixture<ButtonSignGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [ ButtonSignGoogleComponent ],
      providers: [
        AuthService,
        AlertService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
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
