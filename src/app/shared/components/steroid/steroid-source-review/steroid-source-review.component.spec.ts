import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidSourceReviewComponent } from './steroid-source-review.component';

describe('SteroidSourceReviewComponent', () => {
  let component: SteroidSourceReviewComponent;
  let fixture: ComponentFixture<SteroidSourceReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteroidSourceReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteroidSourceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
