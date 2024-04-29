import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidReviewInsideComponent } from './steroid-review-inside.component';

describe('SteroidReviewInsideComponent', () => {
  let component: SteroidReviewInsideComponent;
  let fixture: ComponentFixture<SteroidReviewInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteroidReviewInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteroidReviewInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
