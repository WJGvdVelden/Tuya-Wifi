import type TuyaOAuth2Device from '../lib/TuyaOAuth2Device';

export type TuyaStatus = Record<string, unknown>;
export type TuyaStatusSource = 'sync' | 'online' | 'offline' | 'status' | 'iot_core_status';

// Legacy status update
export type TuyaStatusUpdate<T> = {
  code: string;
  value: T;
  t: number;
  [datapoint: string]: unknown; // Seems to be datapoint index as string to value as string
};

// IoT Core status update
export type TuyaIotCoreStatusUpdate<T> = {
  code: string;
  dpId: number;
  time: number;
  value: T;
};

export type DeviceRegistration = {
  productId: string;
  deviceId: string;
  onStatus: (source: TuyaStatusSource, status: TuyaStatus, changedStatusCodes: string[]) => Promise<void>;
};

export type SettingsEvent<T extends { [key: string]: unknown }> = {
  oldSettings: T;
  newSettings: T;
  changedKeys: (keyof T)[];
};

export type StandardDeviceFlowArgs<T = TuyaOAuth2Device> = { device: T };
export type StandardValueFlowArgs<T = unknown> = { value: T };
export type StandardFlowArgs<TDevice = TuyaOAuth2Device, TValue = unknown> = StandardDeviceFlowArgs<TDevice> &
  StandardValueFlowArgs<TValue>;

export type ParsedColourData = { h: number; s: number; v: number };
