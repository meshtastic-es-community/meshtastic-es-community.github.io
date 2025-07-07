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

Esta guía asume que ya has comprado los dispositivos que vas a utilizar con Meshtastic. Si no es así, puedes consultar la lista de [hardware compatible]
para ver tus opciones.
:::

Antes de empezar, es importante determinar qué tipo de hardware estás utilizando. Meshtastic funciona con dispositivos que tienen estos tipos de Microcontroladores (MCU):

### ESP32

El chip ESP32 es más antiguo y consume más energía que el chip nRF52, pero incluye WiFi y Bluetooth. Dispositivos ESP32 compatibles:

- LILYGO® TTGO T-Beam (se recomienda >V1.1)
- LILYGO® TTGO Lora (se recomienda >V2.1)
- Nano G1
- Station G1
- Heltec V3 y Wireless Stick Lite V3
- Módulo central RAK11200 para placas modulares RAK WisBlock

### nRF52

El chip nRF52 es mucho más eficiente energéticamente que el ESP32 y más fácil de actualizar, pero solo tiene Bluetooth. Dispositivos nRF52 compatibles:

- Módulo central RAK4631 para placas modulares RAK WisBlock
- LILYGO® TTGO T-Echo
- Sensecap T1000E
- Faketec DIY
- Heltec T114

### RP2040

El RP2040 es un chip ARM de doble núcleo desarrollado por Raspberry Pi. Dispositivos RP2040 compatibles:

- Raspberry Pi Pico + Módulo LoRa de Waveshare (Nota: **El Bluetooth del Pico W aún no es compatible con Meshtastic**)
- Módulo central RAK11310 para placas modulares RAK WisBlock

:::info

Si tu dispositivo no está en la lista anterior, consulta nuestros [dispositivos compatibles] para saber qué MCU tiene, o contáctanos por [Discord](https://discord.gg/ktMAKGBnBs) si tienes dudas.

:::

:::danger ¡ALTO! ¡Suelta el cable de alimentación!

Nunca enciendas la radio sin conectar una antena, ya que podrías dañar el chip de radio.

:::

Antes de conectar tu dispositivo Meshtastic al ordenador, realiza las siguientes comprobaciones básicas:

### Verificar el Cable de Datos

Algunos cables solo sirven para _cargar_. Asegúrate de que tu cable también sea capaz de _transferir datos_ antes de continuar. Para comprobarlo, conéctalo a otro dispositivo (como un móvil) e intenta copiar un archivo. Si puedes transferir el archivo, entonces el cable sirve también para datos y puedes continuar.

### Instalar los Controladores Seriales

:::caution

Los dispositivos nRF52/RP2040 normalmente no requieren controladores seriales. Utilizan el cargador UF2, que hace que el dispositivo aparezca como una unidad USB. _NO_ descargues los controladores USB a menos que se necesiten para instalar soporte UF2.

:::

Si necesitas instalar controladores seriales en tu ordenador, elige una de las siguientes opciones e instálala antes de continuar.

<div className="indexCtasBody">
  <div className="split-container">
    <div className="split-item">
      <Link
        className={'button button--outline button--lg cta--button'}
        to={'[http://www.wch-ic.com/downloads/CH341SER_EXE.html](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)'}
      >
        Instalar controladores ESP32
      </Link>
    </div>

  </div>
</div>

### Flashear el Firmware

Después de completar los pasos anteriores, ya puedes flashear el firmware de Meshtastic en tu dispositivo. Para continuar, selecciona el tipo de dispositivo correspondiente.

<div className="indexCtasBody">
  <div className="split-container">
    <div className="split-item">
      <Link
        className={"button button--outline button--lg cta--button"}
        to={"/docs/guias/flashear_firmware.md"}
      >
        Flashear Firmware ESP32 
      </Link>
    </div>

  <div className="split-item">
      <Link
        className={"button button--outline button--lg cta--button"}
        to={"/docs/guias/flashear_firmware.md"}
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
    className={"button button--outline button--lg cta--button"}
    to={""}
  >
    Conectar y Configurar Dispositivo
  </Link>
</div>

