import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTheMostComponent } from './card-the-most.component';

describe('CardTheMostComponent', () => {
  let component: CardTheMostComponent;
  let fixture: ComponentFixture<CardTheMostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTheMostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTheMostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
