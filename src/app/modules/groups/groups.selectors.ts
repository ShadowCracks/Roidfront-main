import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGroups from './groups.reducer';

export const selectGroupsState = createFeatureSelector<fromGroups.GroupState>(
  fromGroups.groupFeatureKey
);

export const groupsList = createSelector(selectGroupsState, state => state.groups);


