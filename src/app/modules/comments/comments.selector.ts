import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComments from './comments.reducer';

export const selectCommentsState = createFeatureSelector<fromComments.CommentState>(
  fromComments.commentFeatureKey
);

export const commentsList = createSelector(selectCommentsState, state => state.comments);
export const lastCommentsList = createSelector(selectCommentsState, state => state.lastComments);


