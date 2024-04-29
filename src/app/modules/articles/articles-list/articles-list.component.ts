import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { CHANGE_TITLE } from '@app/app.actions';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent implements OnInit{
  env!: string;
  constructor(private readonly actions$: Actions){}

  ngOnInit(): void {
    this.env = environment.basePath;
  }
}
