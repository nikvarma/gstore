import { DeviceSize, DeviceType } from './common-types';

export interface ActionStoreModel {
    id: string;
    date: Date;
    common: {
        deviceSize: DeviceSize.NONE,
        deviceType: DeviceType.NONE
    };
}