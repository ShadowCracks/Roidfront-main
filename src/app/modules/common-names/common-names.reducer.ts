import { createReducer, on } from '@ngrx/store';
import { CommonNameDto } from './common-names.classes';
import { GET_COMMON_NAMES_SUCCESS } from './common-names.actions';

export const commonNameFeatureKey = 'commonName';

export interface CommonNameState {
  commonNames: CommonNameDto[];
}

export const initialState: CommonNameState = {
  commonNames: [],
};

export const reducer = createReducer(
  initialState,
  on(GET_COMMON_NAMES_SUCCESS, (state, payload) =>
    ({ ...state, commonNames: payload.commonNames })
  ),
);

