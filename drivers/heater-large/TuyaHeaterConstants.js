'use strict';

class TuyaHeaterConstants {
  static HEATER_CAPABILITIES_MAPPING = {
    switch: 'onoff',
    temp_set: 'target_temperature',
    temp_current: 'measure_temperature',
    lock: 'child_lock',
    eco: 'eco_mode',
  };
}

module.exports = TuyaHeaterConstants;
