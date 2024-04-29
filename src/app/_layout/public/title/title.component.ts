import { Component, OnInit } from '@angular/core';
import { Actions, EffectsModule, ofType } from '@ngrx/effects';
import { CHANGE_TITLE } from '../../../app.actions';
import { State, Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { applicationTittle, selectAppState } from '../../../app.selectors';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit {
  appState$!: Observable<any>;
  constructor(
    private readonly store: Store,
    private readonly actions$: Actions
  ) {
  }

  ngOnInit(): void {
    this.appState$ = this.store.select(applicationTittle);
    //this.store.select('app').subscribe(console.log)
  }
}
