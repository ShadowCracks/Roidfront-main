import { createReducer, on } from '@ngrx/store';
import { GET_MANUFACTURERS_SUCCESS } from './manufacturers.actions';
import { ManufacturerDto } from './manufacturer.classes';

export const manufacturerFeatureKey = 'manufacturer';

export interface ManufacturerState {
  manufacturers: ManufacturerDto[];
}

export const initialState: ManufacturerState = {
  manufacturers: [],
};

export const reducer = createReducer(
  initialState,
  on(GET_MANUFACTURERS_SUCCESS, (state, payload) =>
    ({ ...state, manufacturers: payload.manufacturers })
  ),
);

