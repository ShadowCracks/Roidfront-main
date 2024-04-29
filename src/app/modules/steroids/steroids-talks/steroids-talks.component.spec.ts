import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidsTalksComponent } from './steroids-talks.component';

describe('SteroidsTalksComponent', () => {
  let component: SteroidsTalksComponent;
  let fixture: ComponentFixture<SteroidsTalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteroidsTalksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteroidsTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
