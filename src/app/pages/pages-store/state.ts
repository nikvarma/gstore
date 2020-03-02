import { ActionStoreModel } from "src/app/models";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export const storePageAdapter: EntityAdapter<ActionStoreModel> =
    createEntityAdapter<ActionStoreModel>({
        selectId: model => model.id,
        sortComparer: (a: ActionStoreModel, b: ActionStoreModel): number =>
            b.date.toString().localeCompare(a.date.toString())
    });

export interface State extends EntityState<ActionStoreModel> {
    error?: any;
    hasError?: boolean;
    isLoading?: boolean;
}

export const initialState: State = storePageAdapter.getInitialState(
    {
        hasError: false,
        isLoading: false,
        error: undefined
    }
)