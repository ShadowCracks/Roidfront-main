import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceTalkInsideComponent } from './source-talk-inside.component';

describe('SourceTalkInsideComponent', () => {
  let component: SourceTalkInsideComponent;
  let fixture: ComponentFixture<SourceTalkInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceTalkInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceTalkInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
