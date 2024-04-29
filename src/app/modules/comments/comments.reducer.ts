import { createReducer, on } from '@ngrx/store';
import { CommentDto } from './comment.classes';
import { CREATE_COMMENT_SUCCESS, GET_COMMENTS_SUCCESS, GET_LAST_COMMENTS_SUCCESS } from './comment.actions';

export const commentFeatureKey = 'comment';

export interface CommentState {
  comments: CommentDto[];
  lastComments: CommentDto[];
}

export const initialState: CommentState = {
  comments: [],
  lastComments: [],
};

export const reducer = createReducer(
  initialState,
  on(GET_LAST_COMMENTS_SUCCESS, (state, payload) =>
    ({ ...state, lastComments: payload.comments })
  ),
  on(GET_COMMENTS_SUCCESS, (state, payload) =>
    ({ ...state, comments: payload.comments })
  ),
  on(CREATE_COMMENT_SUCCESS, (state, payload) => 
  ({ ...state, comments: [payload.comment, ...state.comments] })
  )
);

