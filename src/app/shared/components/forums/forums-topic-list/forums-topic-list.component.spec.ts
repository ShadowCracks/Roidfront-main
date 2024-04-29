import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsTopicListComponent } from './forums-topic-list.component';

describe('ForumsTopicListComponent', () => {
  let component: ForumsTopicListComponent;
  let fixture: ComponentFixture<ForumsTopicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumsTopicListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumsTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
