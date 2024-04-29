import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromManufacturers from './manufacturers.reducer';

export const selectManufacturersState = createFeatureSelector<fromManufacturers.ManufacturerState>(
  fromManufacturers.manufacturerFeatureKey
);

export const manufacturersList = createSelector(selectManufacturersState, state => state.manufacturers);

