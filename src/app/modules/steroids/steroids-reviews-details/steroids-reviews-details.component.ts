import { Component, OnInit } from '@angular/core';
import { CHANGE_TITLE, SET_BREADCRUMB } from '@app/app.actions';
import { Store } from '@ngrx/store';
import { GET_STEROID_BY_ID, GET_STEROID_BY_ID_SUCCESS } from '../steroids.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SteroidDto } from '../steroids.classes';
import { steroidDetail } from '../steroids.selectors';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'app-steroids-reviews-details',
  templateUrl: './steroids-reviews-details.component.html',
  styleUrl: './steroids-reviews-details.component.scss'
})
export class SteroidsReviewsDetailsComponent implements OnInit {
  steroid: SteroidDto = new SteroidDto();
  steroidId: string = '';
  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    
  }

  ngOnInit(): void {
    this.steroidId = this.activatedRoute.snapshot.params['steroidId'];
    this.store.dispatch(GET_STEROID_BY_ID({ steroidId: this.steroidId }));

    this.actions$.pipe(
      ofType(GET_STEROID_BY_ID_SUCCESS)
    ).subscribe(({ steroid }) => {
      this.steroid = steroid;
      this.store.dispatch(CHANGE_TITLE({ title: steroid.name }));
      this.setBreadCrumb(steroid.name);
    })
  }

  setBreadCrumb(text: string) {
    const breadCrumbData = [
      { name: 'Home' },
      { name: 'Steroids' },
      { name: 'Reviews' },
      { name: text }
    ];

    this.store.dispatch(SET_BREADCRUMB({ data: breadCrumbData }));
  }
}
