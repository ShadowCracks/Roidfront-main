import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceTalkComponent } from './source-talk.component';

describe('SourceTalkComponent', () => {
  let component: SourceTalkComponent;
  let fixture: ComponentFixture<SourceTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceTalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
