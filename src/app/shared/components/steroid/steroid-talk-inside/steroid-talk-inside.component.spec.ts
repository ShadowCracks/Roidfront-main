import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidTalkInsideComponent } from './steroid-talk-inside.component';

describe('SteroidTalkInsideComponent', () => {
  let component: SteroidTalkInsideComponent;
  let fixture: ComponentFixture<SteroidTalkInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteroidTalkInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteroidTalkInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
