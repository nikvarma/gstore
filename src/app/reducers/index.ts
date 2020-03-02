import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { State } from '../root-store/root-state';
import { StorePageReducer } from '../pages/pages-store/reducer';

export const reducers: ActionReducerMap<State> = {
  storePage: StorePageReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];