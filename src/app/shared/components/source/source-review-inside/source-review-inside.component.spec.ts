import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceReviewInsideComponent } from './source-review-inside.component';

describe('SourceReviewInsideComponent', () => {
  let component: SourceReviewInsideComponent;
  let fixture: ComponentFixture<SourceReviewInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceReviewInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceReviewInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
