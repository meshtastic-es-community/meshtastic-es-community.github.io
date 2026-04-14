import type { RegionConfigs, RadioConfigs, Presets } from './types';
import { RegionCode, ModemPreset } from './protobuf';

// Defaults
export const DEFAULT_HOP_LIMIT = 3;
export const DEFAULT_REGION = RegionCode.EU_868;
export const DEFAULT_PSK = new Uint8Array([1]); // AQ== in base64 = byte value 1, which is the special default key

// Preset definitions
export const PRESETS: Presets = {
  'LongFast': {
    loraConfig: {
      usePreset: true,
      modemPreset: ModemPreset.LONG_FAST,
      region: DEFAULT_REGION,
    },
  },
  'MediumFast': {
    loraConfig: {
      usePreset: true,
      modemPreset: ModemPreset.MEDIUM_FAST,
      region: DEFAULT_REGION,
    },
  },
  'ShortSlow': {
    loraConfig: {
      usePreset: true,
      modemPreset: ModemPreset.SHORT_SLOW,
      region: DEFAULT_REGION,
      overrideFrequency: 869.525, //Al venir de las pruebas lo incluyo por si alguien lo tiene mal
    },
  },
  'ShortFast': {
    loraConfig: {
      usePreset: true,
      modemPreset: ModemPreset.SHORT_FAST,
      region: DEFAULT_REGION,
      overrideFrequency: 869.525, //Al venir de las pruebas lo incluyo por si alguien lo tiene mal
    },
  },

  'SFNarrow - Prueba 1': {
    label: 'BW 62, SF 7, CR 5, 869.618 MHz',
    overrideChannelName: 'SFNarrow',
    loraConfig: {
      usePreset: false,
      bandwidth: 62,
      spreadFactor: 7,
      codingRate: 5,
      region: DEFAULT_REGION,
      overrideFrequency: 869.618,
    },
  },
  'SFNarrow - Prueba 2': {
    label: 'BW 62, SF 7, CR 5, 869.4313 MHz',
    overrideChannelName: 'SFNarrow',
    loraConfig: {
      usePreset: false,
      bandwidth: 62,
      spreadFactor: 7,
      codingRate: 5,
      region: DEFAULT_REGION,
      frecuencySlot: 1,
      overrideFrequency: 869.4313,
    },
  },
  'SFNarrow - Prueba 3': {
    label: 'BW 125, SF 7, CR 8, 869.5875 MHz',
    overrideChannelName: 'SFNarrow',
    loraConfig: {
      usePreset: false,
      bandwidth: 125,
      spreadFactor: 7,
      codingRate: 8,
      region: DEFAULT_REGION,
      frecuencySlot: 2,
      overrideFrequency: 869.5875,
    },
  },
  'Narrow 125kHz Slot 1': {
    label: 'BW 125, SF 7, CR 5, 869.4625 MHz',
    overrideChannelName: 'SFNarrow',
    loraConfig: {
      usePreset: false,
      bandwidth: 125,
      spreadFactor: 7,
      codingRate: 5,
      region: DEFAULT_REGION,
      frecuencySlot: 1,
      overrideFrequency: 869.4625,
    },
  },
  'SFNarrow - Prueba 7': {
    label: 'BW 62, SF 6, CR 5, 869.618 MHz',
    overrideChannelName: 'SFNarrow',
    loraConfig: {
      usePreset: false,
      bandwidth: 62,
      spreadFactor: 6,
      codingRate: 5,
      region: DEFAULT_REGION,
      overrideFrequency: 869.618,
    },
  },
  //Con el PR mergeado incluyo estos dos por si nos apetece probarlos en algun momento
  'ShortPlus': {
    label: 'BW 250kHz, SF6, CR5, 869.525MHz',
    overrideChannelName: 'ShortPlus',
    loraConfig: {
      usePreset: false,
      bandwidth: 250,
      spreadFactor: 6,
      codingRate: 5,
      region: DEFAULT_REGION,
      frecuencySlot: 1,
      overrideFrequency: 869.525,
    },
  },
  'ShortProMax': {
    label: 'BW 250kHz, SF5, CR5, 869.525MHz',
    overrideChannelName: 'ShortProMax',
    loraConfig: {
      usePreset: false,
      bandwidth: 250,
      spreadFactor: 5,
      codingRate: 5,
      region: DEFAULT_REGION,
      frecuencySlot: 1,
      overrideFrequency: 869.525,
    },
  },

};

// Radio configurations
export const RADIO_CONFIGS: RadioConfigs = {
  'E22-900M30S': 20,
  'E22P-868M30S': 8,
};

// Regional channel configurations
export const REGION_CONFIGS: RegionConfigs = {
  'Álava': { channel: 'Alava' },
  'Albacete': { channel: 'Albacete' },
  'Alicante': { channel: 'Alicante' },
  'Almería': { channel: 'Almeria' },
  'Ávila': { channel: 'Avila' },
  'Badajoz': { channel: 'Badajoz' },
  'Baleares': { channel: 'Baleares' },
  'Barcelona': { channel: 'Barcelona' },
  'Burgos': { channel: 'Burgos' },
  'Cáceres': { channel: 'Caceres' },
  'Cádiz': { channel: 'Cadiz' },
  'Castellón': { channel: 'Castellon' },
  'Ciudad Real': { channel: 'CiudadReal' },
  'Córdoba': { channel: 'Cordoba' },
  'A Coruña': { channel: 'ACoruña' },
  'Cuenca': { channel: 'Cuenca' },
  'Girona': { channel: 'Girona' },
  'Granada': { channel: 'Granada' },
  'Guadalajara': { channel: 'Guadalajara' },
  'Gipuzkoa': { channel: 'Gipuzkoa' },
  'Huelva': { channel: 'Huelva' },
  'Huesca': { channel: 'Huesca' },
  'Jaén': { channel: 'Jaen' },
  'Islas Canarias': { channel: 'Canarias' },
  'León': { channel: 'Leon' },
  'Lleida': { channel: 'Lleida' },
  'La Rioja': { channel: 'LaRioja' },
  'Lugo': { channel: 'Lugo' },
  'Madrid': { channel: 'Madrid' },
  'Málaga': { channel: 'Malaga' },
  'Murcia': { channel: 'Murcia' },
  'Navarra': { channel: 'Navarra' },
  'Ourense': { channel: 'Ourense' },
  'Asturias': { channel: 'Asturias' },
  'Palencia': { channel: 'Palencia' },
  'Pontevedra': { channel: 'Pontevedra' },
  'Salamanca': { channel: 'Salamanca' },
  'Cantabria': { channel: 'Cantabria' },
  'Segovia': { channel: 'Segovia' },
  'Sevilla': { channel: 'Sevilla' },
  'Soria': { channel: 'Soria' },
  'Tarragona': { channel: 'Tarragona' },
  'Teruel': { channel: 'Teruel' },
  'Toledo': { channel: 'Toledo' },
  'Valencia': { channel: 'Valencia' },
  'Valladolid': { channel: 'Valladolid' },
  'Bizkaia': { channel: 'Bizkaia' },
  'Zamora': { channel: 'Zamora' },
  'Zaragoza': { channel: 'Zaragoza' },
  'Ceuta': { channel: 'Ceuta' },
  'Melilla': { channel: 'Melilla' },
};
