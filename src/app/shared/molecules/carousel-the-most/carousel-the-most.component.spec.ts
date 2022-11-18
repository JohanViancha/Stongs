import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTheMostComponent } from './carousel-the-most.component';

describe('CarouselTheMostComponent', () => {
  let component: CarouselTheMostComponent;
  let fixture: ComponentFixture<CarouselTheMostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTheMostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTheMostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
