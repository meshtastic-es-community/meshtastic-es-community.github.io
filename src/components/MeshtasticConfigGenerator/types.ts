export interface ChannelSettings {
  psk: Uint8Array;
  name: string;
  uplinkEnabled: boolean;
  downlinkEnabled: boolean;
}

export interface LoRaConfig {
  usePreset: boolean;
  modemPreset?: number;
  bandwidth?: number;
  spreadFactor?: number;
  codingRate?: number;
  overrideFrequency?: number;
  region: number;
  hopLimit: number;
  txEnabled?: boolean;
  txPower?: number;
  sx126xRxBoostedGain?: boolean;
  configOkToMqtt?: boolean;
}

export interface ChannelSet {
  settings: ChannelSettings[];
  loraConfig: LoRaConfig;
}

export interface RegionConfig {
  channel: string;
  key?: Uint8Array | null;
}

export interface Preset {
  label?: string;
  overrideChannelName?: string;
  loraConfig: Omit<LoRaConfig, 'hopLimit' | 'txPower'>;
}

export type Presets = Record<string, Preset>;

export type RegionConfigs = Record<string, RegionConfig>;

// Radio module configurations where key is the radio model name and value is the transmit power in dBm
export type RadioConfigs = Record<string, number>;