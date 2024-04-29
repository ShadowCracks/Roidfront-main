import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSources from './sources.reducer';

export const selectSourceState = createFeatureSelector<fromSources.SourceState>(
  fromSources.sourceFeatureKey
);

export const sourceDetails = createSelector(selectSourceState, state => state.sourceDetails);
export const sourcesList = createSelector(selectSourceState, state => state.sources);

