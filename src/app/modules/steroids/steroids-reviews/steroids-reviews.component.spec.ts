import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidsReviewsComponent } from './steroids-reviews.component';

describe('SteroidsReviewsComponent', () => {
  let component: SteroidsReviewsComponent;
  let fixture: ComponentFixture<SteroidsReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteroidsReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteroidsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
