import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonalzeComponent } from './create-personalze.component';

describe('CreatePersonalzeComponent', () => {
  let component: CreatePersonalzeComponent;
  let fixture: ComponentFixture<CreatePersonalzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePersonalzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePersonalzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
