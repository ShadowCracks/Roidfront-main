import { Component, OnInit } from '@angular/core';
import { CHANGE_TITLE, SET_BREADCRUMB } from '@app/app.actions';
import { Store } from '@ngrx/store';
import { SourceState } from '../sources.reducer';
import { Observable } from 'rxjs';
import { sourcesList } from '../sources.selectors';
import { SourceDto } from '../sources.classes';
import { GET_SOURCES } from '../sources.actions';

@Component({
  selector: 'app-sources-talks',
  templateUrl: './sources-talks.component.html',
  styleUrl: './sources-talks.component.scss'
})
export class SourcesTalksComponent implements OnInit {
  sources$: Observable<SourceDto[]>;
  constructor(private readonly store: Store<{ source: SourceState }>) {
    this.sources$ = store.select(sourcesList);

    const breadCrumbData = [
      { name: 'Home' },
      { name: 'Sources' },
      { name: 'Talk' },
    ];

    store.dispatch(SET_BREADCRUMB({ data: breadCrumbData }));
  }

  ngOnInit(): void {
    this.store.dispatch(CHANGE_TITLE({ title: 'SOURCE TALKS' }));
    this.store.dispatch(GET_SOURCES());
  }
}
