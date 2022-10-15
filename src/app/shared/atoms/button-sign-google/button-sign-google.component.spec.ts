import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonSignGoogleComponent } from './button-sign-google.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthService } from 'src/app/core/security/auth/auth.service';
import { AlertService } from '../../util/services/alert.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthServiceMock, _alertService } from './button-sign-google.mock';

fdescribe('ButtonSignGoogleComponent', () => {
  let component: ButtonSignGoogleComponent;
  let fixture: ComponentFixture<ButtonSignGoogleComponent>;
  let serviceAlert : AlertService;
  let serviceAuth: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [ ButtonSignGoogleComponent ],
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceMock
        },
        {
          provide: AlertService,
          useValue: _alertService.openAlert
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSignGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceAlert = fixture.debugElement.injector.get(AlertService);
    serviceAuth = fixture.debugElement.injector.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the textButton variable should contain the correct text', ()=>{
    expect(component.textBuutton).toContain('Iniciar con Google')
  })

  it('signWithGoogle get UserCreditial the Promise', ()=>{
    component.signWithGoogle();
    expect(component.textBuutton).toEqual('Iniciar con Google')
    
  })
});
