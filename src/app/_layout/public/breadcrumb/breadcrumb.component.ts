import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SET_BREADCRUMB } from '@app/app.actions';
import { breadCrumbSelector } from '@app/app.selectors';
import { BreadCrumbData } from '@app/globals/global.classes';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadCrumbComponent implements OnInit {
  breadCrumbData$: Observable<BreadCrumbData[]>;
  constructor(private readonly store: Store) {
    this.breadCrumbData$ = store.select(breadCrumbSelector);
  }

  ngOnInit(): void {
  }
}
