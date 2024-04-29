import { createReducer, on } from '@ngrx/store';
import { GroupDto } from './groups.classes';
import { GET_GROUPS_SUCCESS } from './groups.actions';

export const groupFeatureKey = 'group';

export interface GroupState {
  groups: GroupDto[];
  lastGroups: GroupDto[];
}

export const initialState: GroupState = {
  groups: [],
  lastGroups: [],
};

export const reducer = createReducer(
  initialState,
  on(GET_GROUPS_SUCCESS, (state, payload) =>
    ({ ...state, groups: payload.groups })
  ),
);

