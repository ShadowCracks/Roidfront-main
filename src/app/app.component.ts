import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_BREADCRUMB } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 constructor(private readonly store: Store) {
 } 

  ngOnInit(): void {
    const breadcrumbData = [
      { name: 'Home' }
    ];
    this.store.dispatch(SET_BREADCRUMB({ data: breadcrumbData }));
  }
}
