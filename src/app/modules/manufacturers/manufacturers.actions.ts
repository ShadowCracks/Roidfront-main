import { createAction, props } from '@ngrx/store';
import { ManufacturerDto } from './manufacturer.classes';

export const GET_MANUFACTURERS = createAction('[MANUFACTURER] Get List Of Manufacturers');
export const GET_MANUFACTURERS_SUCCESS = createAction('[MANUFACTURER]  Get List Of Manufacturers Success', props<{ manufacturers: ManufacturerDto[] }>());
export const GET_MANUFACTURERS_FAILURE = createAction('[MANUFACTURER]  Get List Of Manufacturers Failure', props<{ error: any }>());