import type { ChannelSettings, LoRaConfig, ChannelSet } from './types';

// Region codes from config.proto
export const RegionCode = {
  UNSET: 0,
  US: 1,
  EU_433: 2,
  EU_868: 3,
  CN: 4,
  JP: 5,
  ANZ: 6,
  KR: 7,
  TW: 8,
  RU: 9,
  IN: 10,
  NZ_865: 11,
  TH: 12,
  LORA_24: 13,
  UA_433: 14,
  UA_868: 15,
  MY_433: 16,
  MY_919: 17,
  SG_923: 18,
  PH_433: 19,
  PH_868: 20,
  PH_915: 21,
  ANZ_433: 22,
  KZ_433: 23,
  KZ_863: 24,
  NP_865: 25,
  BR_902: 26,
};

// Modem presets from config.proto
export const ModemPreset = {
  LONG_FAST: 0,
  LONG_SLOW: 1,
  VERY_LONG_SLOW: 2,
  MEDIUM_SLOW: 3,
  MEDIUM_FAST: 4,
  SHORT_SLOW: 5,
  SHORT_FAST: 6,
  LONG_MODERATE: 7,
  SHORT_TURBO: 8,
  LONG_TURBO: 9,
};

// Helper to get preset name from enum value
export function getPresetName(modemPreset: number | undefined): string {
  if (modemPreset === undefined) return 'Desconocido';
  const entry = Object.entries(ModemPreset).find(([_, v]) => v === modemPreset);
  return entry ? entry[0] : 'Desconocido';
}

// Helper function to encode varint
export function encodeVarint(value: number): number[] {
  const result: number[] = [];
  while (value > 127) {
    result.push((value & 0x7f) | 0x80);
    value >>>= 7;
  }
  result.push(value);
  return result;
}

// Helper function to encode length-delimited field
export function encodeLengthDelimited(fieldNumber: number, data: Uint8Array): number[] {
  const tag = encodeVarint((fieldNumber << 3) | 2); // wire type 2 = length-delimited
  const result = [...tag, ...encodeVarint(data.length)];
  return result.concat(Array.from(data));
}

// Helper function to encode varint field
export function encodeVarintField(fieldNumber: number, value: number): number[] {
  const tag = encodeVarint((fieldNumber << 3) | 0); // wire type 0 = varint
  return [...tag, ...encodeVarint(value)];
}

// Helper function to encode fixed32 field
export function encodeFixed32Field(fieldNumber: number, value: number): number[] {
  const tag = encodeVarint((fieldNumber << 3) | 5); // wire type 5 = fixed32
  const result = [...tag];
  // Little-endian encoding
  result.push(value & 0xff);
  result.push((value >> 8) & 0xff);
  result.push((value >> 16) & 0xff);
  result.push((value >> 24) & 0xff);
  return result;
}

// Encode ChannelSettings to protobuf bytes
export function encodeChannelSettings(settings: ChannelSettings): Uint8Array {
  const parts: number[][] = [];

  // psk = field 2 (bytes)
  if (settings.psk && settings.psk.length > 0) {
    parts.push(encodeLengthDelimited(2, settings.psk));
  }

  // name = field 3 (string)
  if (settings.name) {
    const nameBytes = new TextEncoder().encode(settings.name);
    parts.push(encodeLengthDelimited(3, nameBytes));
  }

  // uplink_enabled = field 5 (bool) - wire type 0
  if (settings.uplinkEnabled) {
    parts.push(encodeVarintField(5, 1));
  }

  // downlink_enabled = field 6 (bool) - wire type 0
  if (settings.downlinkEnabled) {
    parts.push(encodeVarintField(6, 1));
  }

  // Flatten the array
  const totalLength = parts.reduce((sum, p) => sum + p.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const part of parts) {
    result.set(part, offset);
    offset += part.length;
  }

  return result;
}

// Encode LoRaConfig to protobuf bytes
export function encodeLoRaConfig(config: LoRaConfig): Uint8Array {
  const parts: number[][] = [];

  // use_preset = field 1 (bool)
  parts.push(encodeVarintField(1, config.usePreset ? 1 : 0));

  if (config.usePreset) {
    // modem_preset = field 2 (enum/varint)
    if (config.modemPreset !== undefined) {
      parts.push(encodeVarintField(2, config.modemPreset));
    }
  } else {
    // bandwidth = field 3 (uint32)
    if (config.bandwidth !== undefined) {
      parts.push(encodeVarintField(3, config.bandwidth));
    }
    // spread_factor = field 4 (uint32)
    if (config.spreadFactor !== undefined) {
      parts.push(encodeVarintField(4, config.spreadFactor));
    }
    // coding_rate = field 5 (uint32)
    if (config.codingRate !== undefined) {
      parts.push(encodeVarintField(5, config.codingRate));
    }
  }

  // region = field 7 (enum/varint)
  parts.push(encodeVarintField(7, config.region));

  // hop_limit = field 8 (uint32)
  parts.push(encodeVarintField(8, config.hopLimit));

  // tx_enabled = field 9 (bool)
  parts.push(encodeVarintField(9, (config.txEnabled ?? true) ? 1 : 0));

  // tx_power = field 10 (int32) - only if specified
  if (config.txPower !== undefined) {
    parts.push(encodeVarintField(10, config.txPower));
  }

  // channel_num = field 11 (uint32) - only if specified
  if (config.frecuencySlot !== undefined) {
    parts.push(encodeVarintField(11, config.frecuencySlot));
  }

  // sx126x_rx_boosted_gain = field 13 (bool)
  parts.push(encodeVarintField(13, (config.sx126xRxBoostedGain ?? true) ? 1 : 0));

  // override_frequency = field 14 (float) - only for custom configs
  if (config.overrideFrequency !== undefined) {
    const tag = encodeVarint((14 << 3) | 5); // wire type 5 = fixed32 (float)
    const floatBuffer = new ArrayBuffer(4);
    new DataView(floatBuffer).setFloat32(0, config.overrideFrequency, true);
    const floatBytes = new Uint8Array(floatBuffer);
    parts.push([...tag, ...Array.from(floatBytes)]);
  }

  // config_ok_to_mqtt = field 105 (bool)
  parts.push(encodeVarintField(105, (config.configOkToMqtt ?? true) ? 1 : 0));

  // Flatten the array
  const totalLength = parts.reduce((sum, p) => sum + p.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const part of parts) {
    result.set(part, offset);
    offset += part.length;
  }

  return result;
}

// Encode ChannelSet to protobuf bytes
export function encodeChannelSet(channelSet: ChannelSet): Uint8Array {
  const parts: number[][] = [];

  // settings = field 1 (repeated ChannelSettings)
  for (const setting of channelSet.settings) {
    const settingsBytes = encodeChannelSettings(setting);
    parts.push(encodeLengthDelimited(1, settingsBytes));
  }

  // lora_config = field 2 (LoRaConfig)
  const loraBytes = encodeLoRaConfig(channelSet.loraConfig);
  parts.push(encodeLengthDelimited(2, loraBytes));

  // Flatten the array
  const totalLength = parts.reduce((sum, p) => sum + p.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const part of parts) {
    result.set(part, offset);
    offset += part.length;
  }

  return result;
}

// Base64 encoding function that produces URL-safe base64
export function base64UrlEncode(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  // Make URL-safe: replace + with -, / with _, remove padding
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
