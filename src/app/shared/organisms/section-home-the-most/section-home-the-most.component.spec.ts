import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHomeTheMostComponent } from './section-home-the-most.component';

describe('SectionHomeTheMostComponent', () => {
  let component: SectionHomeTheMostComponent;
  let fixture: ComponentFixture<SectionHomeTheMostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHomeTheMostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHomeTheMostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
