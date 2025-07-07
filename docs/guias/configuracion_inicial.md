---
id: configuracion-inicial
title: Configuración Inicial
sidebar_label: Configuración Inicial
sidebar_position: 1
---

import Link from "@docusaurus/Link"

<!-- Falta añadir enlaces a otros post con los drivers y mas detalles de ambos tipos de dispositivos -->

# Configuracíon inicial

## Identificar el Hardware

:::note

Esta guía asume que ya has comprado los dispositivos que vas a utilizar con Meshtastic. Si no es así, puedes consultar la lista de [hardware compatible] para ver tus opciones.

:::

(Contenido...)

### Instalar los Controladores Seriales

:::caution

Los dispositivos nRF52/RP2040 normalmente no requieren controladores seriales. Utilizan el cargador UF2, que hace que el dispositivo aparezca como una unidad USB. _NO_ descargues los controladores USB a menos que se necesiten para instalar soporte UF2.

:::

Si necesitas instalar controladores seriales en tu ordenador, elige una de las siguientes opciones e instálala antes de continuar.

<div className="indexCtasBody">
  <div className="split-container">
    <div className="split-item">
      <a
        className="button button--outline button--lg cta--button"
        href="http://www.wch-ic.com/downloads/CH341SER_EXE.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instalar controladores ESP32
      </a>
    </div>
  </div>
</div>

### Flashear el Firmware

Después de completar los pasos anteriores, ya puedes flashear el firmware de Meshtastic en tu dispositivo. Para continuar, selecciona el tipo de dispositivo correspondiente.

<div className="indexCtasBody">
  <div className="split-container">
    <div className="split-item">
      <Link
        className="button button--outline button--lg cta--button"
        to="/docs/guias/flashear_firmware"
      >
        Flashear Firmware ESP32 
      </Link>
    </div>

    <div className="split-item">
      <Link
        className="button button--outline button--lg cta--button"
        to="/docs/guias/flashear_firmware"
      >
        Flashear Firmware NRF52
      </Link>
    </div>
  </div>
</div>

### Conectar y Configurar el Dispositivo

Después de flashear el firmware de Meshtastic en tu dispositivo, puedes continuar con la configuración inicial.

<div className="indexCtasBody">
  <Link
    className="button button--outline button--lg cta--button"
    to=""
  >
    Conectar y Configurar Dispositivo
  </Link>
</div>
