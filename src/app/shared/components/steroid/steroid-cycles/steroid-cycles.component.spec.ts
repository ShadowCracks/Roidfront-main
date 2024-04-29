import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidCyclesComponent } from './steroid-cycles.component';

describe('SteroidCyclesComponent', () => {
  let component: SteroidCyclesComponent;
  let fixture: ComponentFixture<SteroidCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteroidCyclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteroidCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
