import { createSelector } from '@ngrx/store';
import { selectStoreState } from 'src/app/root-store/root.state';
import { StoreState } from '.';

export const selectStore = createSelector(
    selectStoreState,
    (state: StoreState) => state
)
