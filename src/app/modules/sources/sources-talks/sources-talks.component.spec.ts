import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesTalksComponent } from './sources-talks.component';

describe('SourcesTalksComponent', () => {
  let component: SourcesTalksComponent;
  let fixture: ComponentFixture<SourcesTalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourcesTalksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourcesTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
