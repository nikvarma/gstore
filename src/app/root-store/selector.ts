import { MemoizedSelector, createSelector } from '@ngrx/store';
import { StorePageStoreSelectors } from '../pages/pages-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    StorePageStoreSelectors.selectStorePageError,
    (storePageError: string) => {
        return storePageError;
    }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
    StorePageStoreSelectors.selectStorePageIsLoading,
    (storePage: boolean) => {
        return storePage;
    }
);