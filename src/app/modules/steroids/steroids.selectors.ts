import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSteroids from './steroids.reducer';

export const selectSteroidState = createFeatureSelector<fromSteroids.SteroidState>(
  fromSteroids.steroidFeatureKey
);

export const steroidDetail = createSelector(selectSteroidState, state => state.steroidDetails);
export const steroidsList = createSelector(selectSteroidState, state => state.steroids);

