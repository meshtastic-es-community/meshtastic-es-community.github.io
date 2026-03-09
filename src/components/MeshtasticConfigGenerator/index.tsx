import React, { useState, useMemo, useEffect } from 'react';
import QRCode from 'react-qr-code';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import type { ChannelSettings, LoRaConfig, Presets } from './types';
import { encodeChannelSet, base64UrlEncode, getPresetName } from './protobuf';
import { DEFAULT_HOP_LIMIT, DEFAULT_PSK, PRESETS, RADIO_CONFIGS, REGION_CONFIGS } from './config';


// Helper to convert Uint8Array to base64 string for display
function pskToBase64(psk: Uint8Array | undefined): string {
  if (!psk || psk.length === 0) return '';
  // Check if it's the default key (single byte with value 1)
  if (psk.length === 1 && psk[0] === 1) return 'AQ==';
  let binary = '';
  for (let i = 0; i < psk.length; i++) {
    binary += String.fromCharCode(psk[i]);
  }
  return btoa(binary);
}

function generateConfigUrl(
  presetName: keyof typeof PRESETS,
  includeIberia: boolean,
  regionalChannel: string | null,
  selectedRadio: string | null
): { url: string; loraConfig: LoRaConfig; channels: { name: string; psk: string }[] } {
  const preset = PRESETS[presetName];
  if (!preset) throw new Error(`Invalid preset name: ${presetName}`);

  // Build channels
  const channels: ChannelSettings[] = [];
  const channelInfo: { name: string; psk: string }[] = [];

  // Add primary channel
  const channelName = preset.overrideChannelName || presetName;
  channels.push({
    psk: DEFAULT_PSK,
    name: channelName,
    uplinkEnabled: true,
    downlinkEnabled: true,
  });
  channelInfo.push({ name: channelName, psk: pskToBase64(DEFAULT_PSK) });

  // Add Iberia channel if requested
  if (includeIberia) {
    channels.push({
      psk: DEFAULT_PSK,
      name: 'Iberia',
      uplinkEnabled: true,
      downlinkEnabled: true,
    });
    channelInfo.push({ name: 'Iberia', psk: pskToBase64(DEFAULT_PSK) });
  }

  // Add regional channel if selected
  if (regionalChannel) {
    const regionEntry = Object.entries(REGION_CONFIGS).find(([_, config]) => config.channel === regionalChannel);
    if (regionEntry) {
      const [, region] = regionEntry;
      channels.push({
        psk: region.key ?? DEFAULT_PSK,
        name: region.channel,
        uplinkEnabled: true,
        downlinkEnabled: true,
      });
      channelInfo.push({ name: region.channel, psk: pskToBase64(region.key ?? DEFAULT_PSK) });
    }
  }

  const loraConfig: LoRaConfig = {
    ...preset.loraConfig,
    hopLimit: DEFAULT_HOP_LIMIT,
    ...(selectedRadio && { txPower: RADIO_CONFIGS[selectedRadio] }),
  };

  const encoded = encodeChannelSet({ settings: channels, loraConfig });
  const base64 = base64UrlEncode(encoded);

  return {
    url: `https://meshtastic.org/e/#${base64}`,
    loraConfig,
    channels: channelInfo,
  };
}

export default function MeshtasticConfigGenerator(): React.ReactElement {
  // Read URL parameters on mount
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;
    
    const params = new URLSearchParams(window.location.search);
    
    // Parse preset
    const preset = params.get('preset');
    if (preset && preset in PRESETS) {
      setSelectedPreset(preset as keyof typeof PRESETS);
    }
    
    // Parse Iberia
    const iberia = params.get('iberia');
    if (iberia !== null) {
      setIncludeIberia(iberia === 'true');
    }
    
    // Parse regional
    const regional = params.get('regional');
    if (regional !== null) {
      setIncludeRegional(regional === 'true');
    }
    
    // Parse region
    const region = params.get('region');
    if (region) {
      setSelectedRegion(region);
    }
    
    // Parse radio
    const radio = params.get('radio');
    if (radio) {
      setSelectedRadio(radio);
    }
  }, []);

  const [selectedPreset, setSelectedPreset] = useState<keyof typeof PRESETS>(Object.keys(PRESETS)[0] as keyof typeof PRESETS);
  const [includeIberia, setIncludeIberia] = useState(false);
  const [includeRegional, setIncludeRegional] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>(Object.values(REGION_CONFIGS)[0].channel);
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  // Generate shareable URL with current state
  const shareableUrl = useMemo(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return '#'; // Fallback for SSR
    }
    
    const params = new URLSearchParams();
    params.set('preset', selectedPreset);
    params.set('iberia', includeIberia.toString());
    params.set('regional', includeRegional.toString());
    if (includeRegional) {
      params.set('region', selectedRegion);
    }
    if (selectedRadio) {
      params.set('radio', selectedRadio);
    }
    
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}?${params.toString()}`;
  }, [selectedPreset, includeIberia, includeRegional, selectedRegion, selectedRadio]);

  // Update URL in real-time without page reload
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;
    
    const params = new URLSearchParams();
    params.set('preset', selectedPreset);
    params.set('iberia', includeIberia.toString());
    params.set('regional', includeRegional.toString());
    if (includeRegional) {
      params.set('region', selectedRegion);
    }
    if (selectedRadio) {
      params.set('radio', selectedRadio);
    }
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [selectedPreset, includeIberia, includeRegional, selectedRegion, selectedRadio]);

  const { url: configUrl, loraConfig, channels } = useMemo(() => {
    return generateConfigUrl(
      selectedPreset,
      includeIberia,
      includeRegional ? selectedRegion : null,
      selectedRadio
    );
  }, [selectedPreset, includeIberia, includeRegional, selectedRegion, selectedRadio]);

  return (
    <div className="meshtastic-config-generator">
      <div className="config-options" style={{ marginBottom: '20px' }}>
        <fieldset style={{ 
          border: '1px solid var(--ifm-color-emphasis-300)', 
          borderRadius: '4px', 
          padding: '15px', 
          marginBottom: '15px',
          backgroundColor: 'var(--ifm-background-color)'
        }}>
          <legend style={{ 
            fontWeight: 'bold', 
            marginBottom: '10px',
            padding: '0 8px',
            fontSize: '16px'
          }}>
            Perfil de configuración
          </legend>
          <select
            value={selectedPreset}
            onChange={(e) => setSelectedPreset(e.target.value as keyof typeof PRESETS)}
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid var(--ifm-color-emphasis-300)',
              backgroundColor: 'var(--ifm-background-color)s',
              color: 'var(--ifm-font-color-base)',
              minWidth: '200px',
            }}
          >
            {Object.entries(PRESETS).map(([key, preset]) => (
              <option key={key} value={key}>
                {preset.label ? `${key} (${preset.label})` : preset.overrideChannelName || key}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset style={{ 
          border: '1px solid var(--ifm-color-emphasis-300)', 
          borderRadius: '4px', 
          padding: '15px', 
          marginBottom: '15px',
          backgroundColor: 'var(--ifm-background-color)'
        }}>
          <legend style={{ 
            fontWeight: 'bold', 
            marginBottom: '10px',
            padding: '0 8px',
            fontSize: '16px'
          }}>
            Radio (Potencia de TX)
          </legend>
          <div style={{ 
            fontSize: '14px', 
            color: 'var(--ifm-color-emphasis-800)', 
            marginBottom: '15px',
            padding: '10px',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            borderRadius: '4px',
            borderLeft: '4px solid var(--ifm-color-warning)'
          }}>
            <p style={{ margin: '0', lineHeight: '1.4' }}>
              <strong>Nota:</strong> La EIRP máxima permitida en EU_868 es de <strong>27dBm</strong>. 
              Algunos modulos de radio incluyen amplificadores de potencia (PAs), por lo que es importante 
              seleccionar el valor apropiado en nodos DIY para no exceder los límites legales.
              <br />
              <br />
              Si tu modulo de radio no está en la lista simplemente seleciona <strong>Predeterminado</strong> y
              revisa la configuración final si tu nodo requiere de algún ajuste de potencia.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '8px' }}>
              <input
                type="radio"
                name="radio"
                value=""
                checked={selectedRadio === null}
                onChange={() => setSelectedRadio(null)}
              />
              <span>Predeterminado</span>
            </label>
            {Object.entries(RADIO_CONFIGS).map(([name, power]) => (
              <label key={name} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '8px' }}>
                <input
                  type="radio"
                  name="radio"
                  value={name}
                  checked={selectedRadio === name}
                  onChange={() => setSelectedRadio(name)}
                />
                <span>{name} ({power} dBm)</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset style={{ 
          border: '1px solid var(--ifm-color-emphasis-300)', 
          borderRadius: '4px', 
          padding: '15px', 
          marginBottom: '15px',
          backgroundColor: 'var(--ifm-background-color)'
        }}>
          <legend style={{ 
            fontWeight: 'bold', 
            marginBottom: '10px',
            padding: '0 8px',
            fontSize: '16px'
          }}>
            Canales Adicionales
          </legend>
          
          <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '8px' }}>
              <input
                type="checkbox"
                checked={includeIberia}
                onChange={(e) => setIncludeIberia(e.target.checked)}
              />
              <span>Iberia</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '8px' }}>
              <input
                type="checkbox"
                checked={includeRegional}
                onChange={(e) => setIncludeRegional(e.target.checked)}
              />
              <span>Canal regional</span>
            </label>
            
            {includeRegional && (
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                style={{
                  padding: '8px 12px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '1px solid var(--ifm-color-emphasis-300)',
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-font-color-base)',
                  minWidth: '200px',
                }}
              >
                {Object.entries(REGION_CONFIGS).map(([name, config]) => (
                  <option key={config.channel} value={config.channel}>
                    {name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </fieldset>
      </div>

      <div className="config-output" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div className="qr-container" style={{ flex: '0 0 auto' }}>
          <QRCode
            value={configUrl}
            size={250}
            className="qr-code shadow--lw"
          />
          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <button
              onClick={() => {
                if (ExecutionEnvironment.canUseDOM && navigator.clipboard) {
                  navigator.clipboard.writeText(shareableUrl);
                  // Simple feedback - could be enhanced with toast
                  const btn = event.target as HTMLButtonElement;
                  const originalText = btn.textContent;
                  btn.textContent = '¡Copiado!';
                  btn.style.backgroundColor = 'var(--ifm-color-success)';
                  setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                  }, 2000);
                }
              }}
              style={{
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '4px',
                border: '1px solid var(--ifm-color-emphasis-300)',
                backgroundColor: 'var(--ifm-background-color)',
                color: 'var(--ifm-font-color-base)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ifm-color-emphasis-100)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ifm-background-color)';
              }}
            >
              Compartir configuración
            </button>
          </div>
        </div>

        <div className="url-container" style={{ flex: '1 1 300px' }}>
          <h4>Enlace de configuración:</h4>
          <a
            href={configUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '12px',
              backgroundColor: 'var(--ifm-code-background)',
              borderRadius: '4px',
              wordBreak: 'break-all',
              fontFamily: 'var(--ifm-font-family-monospace)',
              fontSize: '14px',
              marginBottom: '20px',
              color: 'var(--ifm-color-primary)',
              textDecoration: 'none',
              border: '1px solid var(--ifm-color-emphasis-300)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--ifm-color-emphasis-100)';
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--ifm-code-background)';
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            {configUrl}
          </a>

          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 250px', minWidth: '200px' }}>
              <h4>Canales:</h4>
              <ul style={{ marginBottom: '15px', fontSize: '14px' }}>
                {channels.map((channel, idx) => (
                  <li key={channel.name}>
                    <strong>{channel.name}</strong>
                    {idx === 0 && ` (PSK: ${channel.psk}) - Principal`}
                    {idx > 0 && ` (PSK: ${channel.psk})`}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ flex: '1 1 250px', minWidth: '200px' }}>
              <h4>Configuración LoRa:</h4>
              <ul style={{ fontSize: '14px' }}>
                <li>Región: EU_868</li>
                <li>Preset: {loraConfig.usePreset ? getPresetName(loraConfig.modemPreset) : 'Personalizado'}</li>
                {!loraConfig.usePreset && (
                  <>
                    <li>Ancho de banda: {loraConfig.bandwidth} kHz</li>
                    <li>Spread Factor: {loraConfig.spreadFactor}</li>
                    <li>Coding Rate: {loraConfig.codingRate}</li>
                    {loraConfig.overrideFrequency && <li>Frecuencia: {loraConfig.overrideFrequency} MHz</li>}
                  </>
                )}
                <li>Hop Limit: {loraConfig.hopLimit}</li>
                {loraConfig.txPower !== undefined && <li>Potencia TX: {loraConfig.txPower} dBm</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
