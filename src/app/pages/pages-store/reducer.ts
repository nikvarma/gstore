import { initialState, State, storePageAdapter } from './state';
import { Actions, ActionTypes } from './action';

export function StorePageReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.LOAD_REQUEST:
            {
                return {
                    ...state,
                    hasError: false,
                    isLoading: true,
                    error: undefined
                }
            };
        case ActionTypes.LOAD_FAILURE:
            {
                return {
                    ...state,
                    hasError: true,
                    isLoading: true,
                    error: (action && action["payload"] && action["payload"]["error"]) ? action["payload"]["error"] : undefined
                }
            }
        case ActionTypes.LOAD_SUCCESS:
            {
                return storePageAdapter.addAll(action["payload"], {
                    ...state,
                    hasError: false,
                    isLoading: false,
                    error: undefined,
                });
            }
        default:
            {
                return state;
            }
    }
}