import { createAction, props } from '@ngrx/store';
import { ArticleDto, CreateArticleDto } from './articles.classes';

export const CREATE_ARTICLE = createAction('[ARTICLE] Create Article', props<{ createArticle: CreateArticleDto }>());
export const CREATE_ARTICLE_SUCCESS = createAction('[ARTICLE] Create Article Success', props<{ article: ArticleDto }>());
export const CREATE_ARTICLE_FAILURE = createAction('[ARTICLE] Create Article Failure', props<{ error: any }>());

export const GET_ARTICLES = createAction('[ARTICLE] Get Articles');
export const GET_ARTICLES_SUCCESS = createAction('[ARTICLE] Get Articles Success', props<{ articles: ArticleDto[] }>());
export const GET_ARTICLES_FAILURE = createAction('[ARTICLE] Get Articles Failure', props<{ error: any }>());

