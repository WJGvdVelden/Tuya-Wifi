import { ScaledProperty } from '../../types/TuyaTypes';
import TRANSLATIONS from './translations.json';

export const THERMOSTAT_CAPABILITIES_MAPPING = {
  switch: 'onoff',
  temp_set: 'target_temperature',
  child_lock: 'child_lock',
  frost: 'frost_guard',
  work_power: 'measure_power',
  temp_current: 'measure_temperature',
  window_state: 'open_window_sensor',
  mode: 'thermostat_mode',
} as const;

export const THERMOSTAT_CAPABILITIES = {
  read_write: [
    'switch',
    'child_lock',
    'frost',
    'mode',
  ],
  read_only: ['window_state'],
  read_scaled: ['temp_set', 'work_power', 'temp_current', 'humidity'],
  setting: ['capacity_set', 'temp_correction', 'sensor_choose', 'backlight', 'backlight_enum', 'window_check'],
} as const;

export const THERMOSTAT_FLOWS = {
  capability_action: [
    'frost_guard',
    'child_lock'
    ],
  boolean_capability_trigger: ['open_window_sensor'],
} as const;

export type HomeyThermostatSettings = {
  target_temperature_scaling: ScaledProperty;
  measure_temperature_scaling: ScaledProperty;
  temp_correction: number;
  sensor_choose: 'room' | 'floor';
  backlight: number;
  backlight_enum: 'closed' | 'half_bright' | 'full_bright';
  window_check: boolean;
};

export type TuyaThermostatSettings = {
  temp_correction: number;
  sensor_choose: 'room' | 'floor';
  backlight: number;
  backlight_enum: 'closed' | 'half_bright' | 'full_bright';
  window_check: boolean;
};

export const THERMOSTAT_SETTING_LABELS = TRANSLATIONS.setting_labels;
