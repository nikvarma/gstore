import { CommonState } from './common.state';
import { commonReducer } from './common.reducer';
import { CommonEffects } from './common.effects';
import { actionDeviceType, actionDeviceSize } from './common.action';
import { selectCommon, selectDeviceType, selectDeviceSize } from './common.selector';

export {
    CommonState,
    CommonEffects,
    commonReducer,
}

export {
    selectCommon,
    selectDeviceSize,
    selectDeviceType
}

export {
    actionDeviceSize,
    actionDeviceType
}