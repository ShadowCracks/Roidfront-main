import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArticles from './articles.reducer';

export const selectArticlesState = createFeatureSelector<fromArticles.ArticleState>(
  fromArticles.articleFeatureKey
);

export const articlesList = createSelector(selectArticlesState, state => state.articles);


