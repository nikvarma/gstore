import { Action, createReducer, on } from "@ngrx/store";
import { StoreState } from './page-store.state';
import { actionStoreHomePageProducts } from './page-store.actions';

export const initialState: StoreState = {
    location: {
        lat: 0,
        lng: 0
    }
}

const reducer = createReducer(initialState, on(
    actionStoreHomePageProducts
    , (state, action) => ({ ...state, ...action })
));

export function storeReducer(
    state: StoreState | undefined,
    action: Action
) {
    return reducer(state, action);
}