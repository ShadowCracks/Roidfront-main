import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidsTalkComponent } from './steroids-talk.component';

describe('SteroidsTalkComponent', () => {
  let component: SteroidsTalkComponent;
  let fixture: ComponentFixture<SteroidsTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteroidsTalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteroidsTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
