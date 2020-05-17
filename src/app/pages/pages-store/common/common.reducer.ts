import { CommonState } from './common.state';
import { DeviceSize, DeviceType } from 'src/app/models/common-types';
import { createReducer, on, Action } from '@ngrx/store';
import { actionDeviceType, actionDeviceSize } from './common.action';

export const initialState: CommonState = {
    deviceSize: DeviceSize.NONE,
    deviceType: DeviceType.NONE
}

const reducer = createReducer(initialState
, on(
    actionDeviceSize,
    (state, { deviceSize }) => ({
        ...state,
        deviceSize: deviceSize
    })
), on(
    actionDeviceType,
    (state, { deviceType }) => ({
        ...state,
        deviceType: deviceType
    })
));

export function commonReducer(
    state: CommonState | undefined,
    action: Action
) {
    return reducer(state, action);
}
