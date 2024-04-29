import { createAction, props } from '@ngrx/store';
import { BreadCrumbData } from './globals/global.classes';

export const LOAD_APP = createAction('[APP] Load App');

export const CHANGE_TITLE = createAction('[APP] Change title', props<{ title: string }>());
export const SET_BREADCRUMB = createAction('[APP] Set BreadCrumb', props<{ data: BreadCrumbData[] }>());
