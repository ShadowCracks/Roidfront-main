import { createAction, props } from '@ngrx/store';
import { CreateCommentDto, CommentDto, CommentsQuery } from './comment.classes';

export const CREATE_COMMENT = createAction('[COMMENT] Create Comment', props<{ createComment: CreateCommentDto }>());
export const CREATE_COMMENT_SUCCESS = createAction('[COMMENT] Create Comment Success', props<{ comment: CommentDto }>());
export const CREATE_COMMENT_FAILURE = createAction('[COMMENT] Create Comment Failure', props<{ error: any }>());

export const GET_LAST_COMMENTS = createAction('[COMMENT] Get Last Comments', props<{ commentsQuery: CommentsQuery }>());
export const GET_LAST_COMMENTS_SUCCESS = createAction('[COMMENT] Get Last Comments Success', props<{ comments: CommentDto[] }>());
export const GET_LAST_COMMENTS_FAILURE = createAction('[COMMENT] Get Last Comments Failure', props<{ error: any }>());

export const GET_COMMENTS = createAction('[COMMENT] Get Comments', props<{ commentsQuery: CommentsQuery }>());
export const GET_COMMENTS_SUCCESS = createAction('[COMMENT] Get Comments Success', props<{ comments: CommentDto[] }>());
export const GET_COMMENTS_FAILURE = createAction('[COMMENT] Get Comments Failure', props<{ error: any }>());

