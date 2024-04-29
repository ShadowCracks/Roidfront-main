import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceTalksDetailsComponent } from './source-talks-details.component';

describe('SourceTalksDetailsComponent', () => {
  let component: SourceTalksDetailsComponent;
  let fixture: ComponentFixture<SourceTalksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceTalksDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceTalksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
