import { Component, OnInit } from '@angular/core';
import { CHANGE_TITLE, SET_BREADCRUMB } from '@app/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-steroids-cycles',
  templateUrl: './steroids-cycles.component.html',
  styleUrl: './steroids-cycles.component.scss'
})
export class SteroidsCyclesComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    const breadcrumbData = [
      { name: 'Home' },
      { name: 'Steroids' },
      { name: 'Cycles' },
    ];
    this.store.dispatch(SET_BREADCRUMB({ data: breadcrumbData }));
    this.store.dispatch(CHANGE_TITLE({ title: 'STEROIDS CYCLES' }));
  }
}
