import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubmissionsComponent } from './new-submissions.component';

describe('NewSubmissionsComponent', () => {
  let component: NewSubmissionsComponent;
  let fixture: ComponentFixture<NewSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSubmissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
