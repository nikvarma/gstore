import { createAction, props } from '@ngrx/store';
import { DeviceType, DeviceSize } from 'src/app/models/common-types';

export const actionDeviceType = createAction(
    '[Store App] Common Device Type',
    props<{ deviceType: DeviceType }>()
);

export const actionDeviceSize = createAction(
    '[Store App] Common Device Size',
    props<{ deviceSize: DeviceSize }>()
)