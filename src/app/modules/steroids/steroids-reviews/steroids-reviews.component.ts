import { Component, OnInit } from '@angular/core';
import { CHANGE_TITLE, SET_BREADCRUMB } from '@app/app.actions';
import { Store } from '@ngrx/store';
import { GET_STEROIDS } from '../steroids.actions';
import { SteroidDto } from '../steroids.classes';
import { steroidsList } from '../steroids.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-steroids-reviews',
  templateUrl: './steroids-reviews.component.html',
  styleUrl: './steroids-reviews.component.scss'
})
export class SteroidsReviewsComponent implements OnInit {
  steroids$: Observable<SteroidDto[]>;
  constructor(private readonly store: Store) {
    this.steroids$ = store.select(steroidsList);
  }

  ngOnInit(): void {
    const breadCrumbData = [
      { name: 'Home' },
      { name: 'Steroids' },
      { name: 'Reviews' },
    ];

    this.store.dispatch(SET_BREADCRUMB({ data: breadCrumbData }));
    this.store.dispatch(CHANGE_TITLE({ title: 'STEROIDS REVIEWS' }));
    this.store.dispatch(GET_STEROIDS());
  }
}
