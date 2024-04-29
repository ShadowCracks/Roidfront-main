import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsInsideComponent } from './pics-inside.component';

describe('PicsInsideComponent', () => {
  let component: PicsInsideComponent;
  let fixture: ComponentFixture<PicsInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicsInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicsInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
