import { Component, OnInit } from '@angular/core';
import { CHANGE_TITLE, SET_BREADCRUMB } from '@app/app.actions';
import { Store } from '@ngrx/store';
import { SteroidDto } from '../steroids.classes';
import { steroidsList } from '../steroids.selectors';
import { Observable } from 'rxjs';
import { GET_STEROIDS } from '../steroids.actions';

@Component({
  selector: 'app-steroids-talks',
  templateUrl: './steroids-talks.component.html',
  styleUrl: './steroids-talks.component.scss'
})
export class SteroidsTalksComponent implements OnInit{
  steroids$: Observable<SteroidDto[]>;
  constructor(private readonly store: Store) {
    this.steroids$ = store.select(steroidsList);
  }

  ngOnInit(): void {
    const breadCrumbData = [
      { name: 'Home' },
      { name: 'Steroids' },
      { name: 'Talk' },
    ];

    this.store.dispatch(SET_BREADCRUMB({ data: breadCrumbData }));
    this.store.dispatch(CHANGE_TITLE({ title: 'STEROIDS TALK' }));
    this.store.dispatch(GET_STEROIDS());
  }
}
