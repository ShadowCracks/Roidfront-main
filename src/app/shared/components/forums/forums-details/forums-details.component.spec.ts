import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsDetailsComponent } from './forums-details.component';

describe('ForumsDetailsComponent', () => {
  let component: ForumsDetailsComponent;
  let fixture: ComponentFixture<ForumsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
