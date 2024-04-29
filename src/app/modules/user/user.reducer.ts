import { createReducer, on } from '@ngrx/store';
import { UserDto } from './user.classes';
import { GET_CURRENT_USER_SUCCESS } from './user.actions';

export const featureKey = 'user';

export interface UserState {
  loggedUser: UserDto;
  isLoggedIn: boolean;
}

export const initialState: UserState = {
  loggedUser: new UserDto(),
  isLoggedIn: false,
};

export const reducer = createReducer(
  initialState,
  on(GET_CURRENT_USER_SUCCESS, (state, payload) =>
    ({ ...state, loggedUser: payload.user, isLoggedIn: true })
  )
);

