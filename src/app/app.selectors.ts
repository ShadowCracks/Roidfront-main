import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as appReducer from './app.reducer';

export const selectAppState = createFeatureSelector<appReducer.State>(
  appReducer.appFeatureKey
);

export const applicationTittle = createSelector(selectAppState, state => state.appTitle);
export const breadCrumbSelector = createSelector(selectAppState, state => state.breadCrumbData);
