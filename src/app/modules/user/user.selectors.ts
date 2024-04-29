import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './user.reducer';

export const selectUserState = createFeatureSelector<fromUsers.UserState>(
fromUsers.featureKey
);

export const LOGGED_USER = createSelector(selectUserState, state => state.loggedUser);
export const IS_LOGGED = createSelector(selectUserState, state => state.isLoggedIn);

