import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTheMostComponent } from './page-the-most.component';

describe('PageTheMostComponent', () => {
  let component: PageTheMostComponent;
  let fixture: ComponentFixture<PageTheMostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTheMostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTheMostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
