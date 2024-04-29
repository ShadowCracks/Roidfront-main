import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CHANGE_TITLE, SET_BREADCRUMB } from '@app/app.actions';
import { Store } from '@ngrx/store';
import { GET_SOURCE_BY_ID, GET_SOURCE_BY_ID_SUCCESS } from '../sources.actions';
import { Actions, ofType } from '@ngrx/effects';
import { SourceDto } from '../sources.classes';

@Component({
  selector: 'app-source-reviews-details',
  templateUrl: './source-reviews-details.component.html',
  styleUrl: './source-reviews-details.component.scss'
})
export class SourceReviewsDetailsComponent implements OnInit {
  sourceId: string = '';
  source = new SourceDto();
  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.sourceId = this.activatedRoute.snapshot.params['sourceId'];
    this.store.dispatch(GET_SOURCE_BY_ID({ sourceId: this.sourceId }));

    this.actions$.pipe(
      ofType(GET_SOURCE_BY_ID_SUCCESS)
    ).subscribe(({ source }) => {
      this.source = source;
      this.setBreadCrumb(source.url);
      this.store.dispatch(CHANGE_TITLE({ title: source.url }));
    })
  }

  setBreadCrumb(text: string) {
    const breadCrumbData = [
      { name: 'Home' },
      { name: 'Sources' },
      { name: 'Reviews' },
      { name: text }
    ];

    this.store.dispatch(SET_BREADCRUMB({ data: breadCrumbData }));
  }
}
