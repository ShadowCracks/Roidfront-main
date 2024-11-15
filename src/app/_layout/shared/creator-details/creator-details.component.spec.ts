import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorDetailsComponent } from './creator-details.component';

describe('CreatorDetailsComponent', () => {
  let component: CreatorDetailsComponent;
  let fixture: ComponentFixture<CreatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
