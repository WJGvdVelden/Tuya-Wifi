'use strict';

import TuyaOAuth2DriverSensor from '../../lib/TuyaOAuth2DriverSensor';
import {TuyaDeviceResponse, TuyaDeviceSpecificationResponse} from "../../types/TuyaApiTypes";
const TuyaOAuth2Constants = require('../../lib/TuyaOAuth2Constants');

export default class TuyaOAuth2DriverSensorMotion extends TuyaOAuth2DriverSensor {

  TUYA_DEVICE_CATEGORIES = [
    TuyaOAuth2Constants.DEVICE_CATEGORIES.SECURITY_VIDEO_SURV.MOTION_SENSOR,
  ];

  onTuyaPairListDeviceProperties(device: TuyaDeviceResponse, specifications: TuyaDeviceSpecificationResponse) {
    const props = super.onTuyaPairListDeviceProperties(device, specifications);

    // alarm_motion
    const hasPir = device.status.some(({ code }) => code === 'pir');
    if (hasPir) {
      props.store.tuya_capabilities.push('pir');
      props.capabilities.push('alarm_motion');
    }

    return props;
  }

}

module.exports = TuyaOAuth2DriverSensorMotion;