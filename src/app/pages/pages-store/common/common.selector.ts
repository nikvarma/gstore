import { CommonState } from './common.state'
import { createSelector } from '@ngrx/store'
import { selectCommonState } from 'src/app/root-store/root.state'

export const selectCommon = createSelector(
    selectCommonState,
    (state: CommonState) => state
)
export const selectDeviceType = createSelector(
    selectCommon,
    (state: CommonState) => state.deviceType
)

export const selectDeviceSize = createSelector(
    selectCommon,
    (state: CommonState) => state.deviceSize
)