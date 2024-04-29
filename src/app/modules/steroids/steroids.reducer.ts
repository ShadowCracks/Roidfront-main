import { createReducer, on } from '@ngrx/store';
import { SteroidDto } from './steroids.classes';
import { GET_STEROIDS_SUCCESS, GET_STEROID_BY_ID_SUCCESS } from './steroids.actions';

export const steroidFeatureKey = 'steroid';

export interface SteroidState {
  steroids: SteroidDto[];
  steroidDetails: SteroidDto;
}

export const initialState: SteroidState = {
  steroids: [],
  steroidDetails: new SteroidDto(),
};

export const reducer = createReducer(
  initialState,
  on(GET_STEROIDS_SUCCESS, (state, payload) =>
    ({ ...state, steroids: payload.steroids })
  ),
  on(GET_STEROID_BY_ID_SUCCESS, (state, payload) =>
    ({ ...state, steroidDetails: payload.steroid })
  ),
);

