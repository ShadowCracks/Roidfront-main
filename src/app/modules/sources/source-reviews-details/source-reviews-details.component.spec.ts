import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceReviewsDetailsComponent } from './source-reviews-details.component';

describe('SourceReviewsDetailsComponent', () => {
  let component: SourceReviewsDetailsComponent;
  let fixture: ComponentFixture<SourceReviewsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceReviewsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceReviewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
