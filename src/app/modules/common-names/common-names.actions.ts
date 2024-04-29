import { createAction, props } from '@ngrx/store';
import { CommonNameDto } from './common-names.classes';

export const GET_COMMON_NAMES = createAction('[COMMON_NAME] Get List Of Common Names');
export const GET_COMMON_NAMES_SUCCESS = createAction('[COMMON_NAME]  Get List Of Common Names Success', props<{ commonNames: CommonNameDto[] }>());
export const GET_COMMON_NAMES_FAILURE = createAction('[COMMON_NAME]  Get List Of Common Names Failure', props<{ error: any }>());