import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidsTalksDetailsComponent } from './steroids-talks-details.component';

describe('SteroidsTalksDetailsComponent', () => {
  let component: SteroidsTalksDetailsComponent;
  let fixture: ComponentFixture<SteroidsTalksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteroidsTalksDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteroidsTalksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
