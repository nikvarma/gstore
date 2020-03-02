import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD_REQUEST = '[Store Page] Load Request',
    LOAD_FAILURE = '[Store Page] Load Failure',
    LOAD_SUCCESS = '[Store Page] Load Success'
}

export class LoadRequestAction implements Action {
    readonly type: string = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
    readonly type: string = ActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: any }) { };
}

export class LoadSuccessAction implements Action {
    readonly type: string = ActionTypes.LOAD_SUCCESS;
    constructor(public payload: { item: any }) { };
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;