import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceReviewComponent } from './source-review.component';

describe('SourceReviewComponent', () => {
  let component: SourceReviewComponent;
  let fixture: ComponentFixture<SourceReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
