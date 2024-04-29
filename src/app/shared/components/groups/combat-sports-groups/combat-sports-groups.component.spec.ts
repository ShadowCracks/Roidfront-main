import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatSportsGroupsComponent } from './combat-sports-groups.component';

describe('CombatSportsGroupsComponent', () => {
  let component: CombatSportsGroupsComponent;
  let fixture: ComponentFixture<CombatSportsGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatSportsGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatSportsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
