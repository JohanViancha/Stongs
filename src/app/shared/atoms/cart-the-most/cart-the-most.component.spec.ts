import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTheMostComponent } from './cart-the-most.component';

describe('CartTheMostComponent', () => {
  let component: CartTheMostComponent;
  let fixture: ComponentFixture<CartTheMostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTheMostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTheMostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
