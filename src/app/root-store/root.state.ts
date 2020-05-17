import { StoreState } from '../pages/pages-store';
import { createFeatureSelector } from '@ngrx/store';
import { CommonState } from '../pages/pages-store/common/common.state';

export interface AppState {
    store: StoreState;
    common: CommonState;
}


export const selectStoreState = createFeatureSelector<AppState, StoreState>('store');
export const selectCommonState = createFeatureSelector<AppState, CommonState>('common');