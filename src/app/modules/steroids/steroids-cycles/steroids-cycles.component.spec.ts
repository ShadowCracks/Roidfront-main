import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidsCyclesComponent } from './steroids-cycles.component';

describe('SteroidsCyclesComponent', () => {
  let component: SteroidsCyclesComponent;
  let fixture: ComponentFixture<SteroidsCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteroidsCyclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteroidsCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
