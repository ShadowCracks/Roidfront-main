import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidsReviewComponent } from './steroids-review.component';

describe('SteroidsReviewComponent', () => {
  let component: SteroidsReviewComponent;
  let fixture: ComponentFixture<SteroidsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteroidsReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteroidsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
