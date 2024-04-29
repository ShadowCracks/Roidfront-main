import { createAction, props } from '@ngrx/store';
import { SourceDto } from './sources.classes';

export const GET_SOURCES = createAction('[SOURCE] Get Source List');
export const GET_SOURCES_SUCCESS = createAction('[SOURCE] Get Source List Success', props<{ sources: SourceDto[] }>());
export const GET_SOURCES_FAILURE = createAction('[SOURCE] Get Source List Failure', props<{ error: any }>());

export const GET_SOURCE_BY_ID = createAction('[SOURCE] Get Source By Id', props<{ sourceId: string }>());
export const GET_SOURCE_BY_ID_SUCCESS = createAction('[SOURCE] Get Source By Id Success', props<{ source: SourceDto }>());
export const GET_SOURCE_BY_ID_FAILURE = createAction('[SOURCE] Get Source By Id Failure', props<{ error: any }>());