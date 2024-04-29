import { Component, OnInit } from '@angular/core';
import { CHANGE_TITLE } from '@app/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent implements OnInit{
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CHANGE_TITLE({ title: 'Groups' }));
  }
}
