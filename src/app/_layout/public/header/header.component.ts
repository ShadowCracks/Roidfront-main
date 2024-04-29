import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IS_LOGGED } from '@app/modules/user/user.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleComponent, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isLogged$: Observable<boolean>;
  constructor(private readonly store: Store) {
    this.isLogged$ = store.select(IS_LOGGED);
  }

  ngOnInit(): void {
  }
}
