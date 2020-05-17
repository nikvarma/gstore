import {
  ActionReducerMap,
  MetaReducer,
  ActionReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from '../root-store/root.state';
import { storeReducer } from '../pages/pages-store';
import { commonReducer } from '../pages/pages-store/common';
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<AppState> = {
  store: storeReducer,
  common: commonReducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];