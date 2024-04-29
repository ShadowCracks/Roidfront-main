import { createReducer, on } from '@ngrx/store';
import { GET_SOURCE_BY_ID_SUCCESS, GET_SOURCES_SUCCESS } from './sources.actions';
import { SourceDto } from './sources.classes';

export const sourceFeatureKey = 'source';

export interface SourceState {
  sources: SourceDto[];
  sourceDetails: SourceDto;
}

export const initialState: SourceState = {
  sources: [],
  sourceDetails: new SourceDto(),
};

export const reducer = createReducer(
  initialState,
  on(GET_SOURCES_SUCCESS, (state, payload) =>
    ({ ...state, sources: payload.sources })
  ),
  on(GET_SOURCE_BY_ID_SUCCESS, (state, payload) =>
    ({ ...state, sourceDetails: payload.source })
  )
);

