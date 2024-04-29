import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ArticlesService } from "./articles.service";
import { 
  CREATE_ARTICLE, 
  CREATE_ARTICLE_FAILURE, 
  CREATE_ARTICLE_SUCCESS, 
  GET_ARTICLES, 
  GET_ARTICLES_FAILURE, 
  GET_ARTICLES_SUCCESS 
} from "./articles.actions";

@Injectable()
export class ArticlesEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly articlesService: ArticlesService) { }

    createArticle$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CREATE_ARTICLE),
        mergeMap(action => {
          return this.articlesService.createArticle(action.createArticle)
            .pipe(
              map((article) => {
                return CREATE_ARTICLE_SUCCESS({ article });
              }),
              catchError(error => of(CREATE_ARTICLE_FAILURE({ error })))
          )
        })
      )
    });

    getArticles$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(GET_ARTICLES),
        mergeMap(action => {
          return this.articlesService.getArticles()
            .pipe(
              map((articles) => GET_ARTICLES_SUCCESS({ articles })),
              catchError(error => of(GET_ARTICLES_FAILURE({ error })))
          )
        })
      )
    });
}