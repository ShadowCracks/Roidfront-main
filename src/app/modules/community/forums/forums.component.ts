import { Component, OnInit } from '@angular/core';
import { CHANGE_TITLE } from '@app/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrl: './forums.component.scss'
})
export class ForumsComponent implements OnInit{
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CHANGE_TITLE({ title: 'COMMUNITY FORUMS' }));
  }
}
