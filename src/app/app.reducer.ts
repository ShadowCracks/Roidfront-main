import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { BreadCrumbData } from './globals/global.classes';

export const appFeatureKey = 'app';

export interface State {
  appTitle: string;
  breadCrumbData: BreadCrumbData[];
}

export const initialState: State = {
  appTitle: 'Eroids',
  breadCrumbData: [{ name: 'Home' }],
};


export const appReducer = createReducer(
  initialState,
  on(AppActions.CHANGE_TITLE, (state, payload) => {
    return { ...state, appTitle: payload.title };
  }),
  on(AppActions.SET_BREADCRUMB, (state, payload) => {
    return { ...state, breadCrumbData: payload.data }
  })
);

