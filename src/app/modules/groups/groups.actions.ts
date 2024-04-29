import { createAction, props } from '@ngrx/store';
import { GroupDto, CreateGroupDto } from './groups.classes';

export const CREATE_GROUP = createAction('[GROUP] Create Group', props<{ createGroup: CreateGroupDto }>());
export const CREATE_GROUP_SUCCESS = createAction('[GROUP] Create Group Success', props<{ group: GroupDto }>());
export const CREATE_GROUP_FAILURE = createAction('[GROUP] Create Group Failure', props<{ error: any }>());

export const GET_GROUPS = createAction('[GROUP] Get Groups');
export const GET_GROUPS_SUCCESS = createAction('[GROUP] Get Groups Success', props<{ groups: GroupDto[] }>());
export const GET_GROUPS_FAILURE = createAction('[GROUP] Get Groups Failure', props<{ error: any }>());

