import { DeviceSize, DeviceType } from '../models/common-types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  setDeviceType(type: DeviceType): DeviceType {
    return DeviceType.MOBILE;
  }

  setDeviceSize(): DeviceSize {
    return DeviceSize.LARGE;
  }
}
