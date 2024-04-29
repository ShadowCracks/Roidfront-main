import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidsReviewsDetailsComponent } from './steroids-reviews-details.component';

describe('SteroidsReviewsDetailsComponent', () => {
  let component: SteroidsReviewsDetailsComponent;
  let fixture: ComponentFixture<SteroidsReviewsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteroidsReviewsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteroidsReviewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
