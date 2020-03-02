import { State, storePageAdapter } from './state'
import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionStoreModel } from 'src/app/models';

export const getError = (state: State): any => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;
export const selectStorePageState: MemoizedSelector<object, State> =
    createFeatureSelector<State>('storePage');

export const selectAllStorePageItems: (
    state: object
) => ActionStoreModel[] = storePageAdapter.getSelectors(selectStorePageState).selectAll;

export const selectStorePageById = (id: string) =>
    createSelector(this.selectAllStorePageItems, (allStorePage: ActionStoreModel[]) => {
        if (allStorePage) {
            return allStorePage.find(p => p.id === id);
        } else {
            return null;
        }
    });

export const selectStorePageError: MemoizedSelector<object, any> =
    createSelector(selectStorePageState, getError);

export const selectStorePageIsLoading: MemoizedSelector<object, boolean> =
    createSelector(selectStorePageState, getIsLoading);