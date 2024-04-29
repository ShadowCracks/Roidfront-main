import { Component, OnInit } from '@angular/core';
import { CHANGE_TITLE, SET_BREADCRUMB } from '@app/app.actions';
import { Store } from '@ngrx/store';
import { SourceState } from '../sources.reducer';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SourceDto } from '../sources.classes';
import { sourcesList } from '../sources.selectors';
import { GET_SOURCES } from '../sources.actions';

@Component({
  selector: 'app-sources-reviews',
  templateUrl: './sources-reviews.component.html',
  styleUrl: './sources-reviews.component.scss'
})
export class SourcesReviewsComponent implements OnInit {
  sources$!: Observable<SourceDto[]>;

  constructor(
    private readonly store: Store<{ source: SourceState }>
  ) {
    const breadCrumbData = [
      { name: 'Home' },
      { name: 'Sources' },
      { name: 'Reviews' },
    ];

    store.dispatch(SET_BREADCRUMB({ data: breadCrumbData }));
  }

  ngOnInit(): void {
    this.store.dispatch(CHANGE_TITLE({ title: 'SOURCE REVIEWS' }));
    this.store.dispatch(GET_SOURCES());

    this.sources$ = 
      this.store.select(sourcesList);
  }
}
