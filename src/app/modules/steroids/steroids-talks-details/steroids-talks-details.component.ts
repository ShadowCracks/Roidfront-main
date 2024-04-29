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
  selector: 'app-steroids-talks-details',
  templateUrl: './steroids-talks-details.component.html',
  styleUrl: './steroids-talks-details.component.scss'
})
export class SteroidsTalksDetailsComponent implements OnInit {
  steroid: SteroidDto = new SteroidDto();
  steroidId: string = '';
  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.steroidId = this.activatedRoute.snapshot.params['steroidId'];
  }

  ngOnInit(): void {
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
      { name: 'Talk' },
      { name: text }
    ];

    this.store.dispatch(SET_BREADCRUMB({ data: breadCrumbData }));
  }
}
