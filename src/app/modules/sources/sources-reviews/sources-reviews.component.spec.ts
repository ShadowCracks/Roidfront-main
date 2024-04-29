import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesReviewsComponent } from './sources-reviews.component';

describe('SourcesReviewsComponent', () => {
  let component: SourcesReviewsComponent;
  let fixture: ComponentFixture<SourcesReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourcesReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourcesReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
