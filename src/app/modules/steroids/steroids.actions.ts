import { createAction, props } from '@ngrx/store';
import { SteroidDto } from './steroids.classes';

export const GET_STEROIDS = createAction('[STEROIDS] Get Steroids');
export const GET_STEROIDS_SUCCESS = createAction('[STEROIDS] Get Steroids Success', props<{ steroids: SteroidDto[] }>());
export const GET_STEROIDS_FAILURE = createAction('[STEROIDS] Get Steroids Error', props<{ error: any }>());

export const GET_STEROID_BY_ID = createAction('[STEROIDS] Get Steroid By Id', props<{ steroidId: string }>());
export const GET_STEROID_BY_ID_SUCCESS = createAction('[STEROIDS] Get Steroid By Id Success', props<{ steroid: SteroidDto }>());
export const GET_STEROID_BY_ID_FAILURE = createAction('[STEROIDS] Get Steroid By Id Error', props<{ error: any }>());