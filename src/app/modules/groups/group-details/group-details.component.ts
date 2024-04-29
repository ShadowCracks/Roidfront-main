import { Component } from '@angular/core';
import { CHANGE_TITLE } from '@app/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrl: './group-details.component.scss'
})
export class GroupDetailsComponent {
  constructor(private readonly store: Store) {
    store.dispatch(CHANGE_TITLE({ title: 'Groups Inside' }))
  }
}
