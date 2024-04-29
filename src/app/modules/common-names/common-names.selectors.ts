import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCommonNames from './common-names.reducer';

export const selectCommonNamesState = createFeatureSelector<fromCommonNames.CommonNameState>(
  fromCommonNames.commonNameFeatureKey
);

export const commonNamesList = createSelector(selectCommonNamesState, state => state.commonNames);

