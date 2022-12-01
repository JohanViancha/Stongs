import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonalizeComponent } from './list-personalize.component';

describe('ListPersonalizeComponent', () => {
  let component: ListPersonalizeComponent;
  let fixture: ComponentFixture<ListPersonalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPersonalizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPersonalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
