import { createAction, props } from '@ngrx/store';
import { UserDto } from './user.classes';

export const GET_CURRENT_USER = createAction('[USER] Get User Details');
export const GET_CURRENT_USER_SUCCESS = createAction('[USER] Get User Details Success', props<{ user: UserDto }>());
export const GET_CURRENT_USER_FAILURE = createAction('[USER] Get User Details Failure', props<{ error: any }>());
