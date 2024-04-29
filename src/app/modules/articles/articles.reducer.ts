import { createReducer, on } from '@ngrx/store';
import { ArticleDto } from './articles.classes';
import { GET_ARTICLES_SUCCESS } from './articles.actions';

export const articleFeatureKey = 'article';

export interface ArticleState {
  articles: ArticleDto[];
  lastArticles: ArticleDto[];
}

export const initialState: ArticleState = {
  articles: [],
  lastArticles: [],
};

export const reducer = createReducer(
  initialState,
  on(GET_ARTICLES_SUCCESS, (state, payload) =>
    ({ ...state, articles: payload.articles })
  ),
);

