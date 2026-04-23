---
slug: mas-tests-sfnarrow
title: "🧑‍🔬 Múltiples tests SFNarrow en la Zona Centro"
description: "Estamos probando nuevas configuraciones de frecuencia (SFNarrow) en la malla Meshtastic de la Zona Centro para mejorar el alcance y reducir interferencias. ¡Únete al test!"
authors: [ ]
tags: [ Madrid, Zona Centro, Configuración, Narrow ]
---

Para no repetir todo el motivo de por qué hacemos estos tests, puedes leer
la [entrada anterior del blog](2026-01-19-test-sfnarrow-zona-centro.md).

### ℹ️ Información general{#info-general}

Queremos probar diferentes configuraciones de frecuencia (SFNarrow) en la malla Meshtastic de la Zona Centro para
mejorar el alcance y reducir interferencias. Para ello, hemos planificado varios tests con diferentes configuraciones
que puedes ver a continuación.

<!-- truncate -->

:::warning

En caso de incidente a gran escala (véase caída de las comunicaciones, fallo de la red eléctrica, etc.) durante el
periodo de cualquier prueba, se volverá al _preset_ **MediumFast** de manera inmediata, para garantizar el uso de la red
por parte de todos los usuarios.

:::

### 🙋‍♂️ Cómo participar{#participar}

Si quieres participar en los tests, simplemente debes configurar tu dispositivo con la configuración correspondiente a
cada periodo. Puedes hacerlo a través de la aplicación móvil o el cliente que tengas conectado.

En todos los casos, hay que **cambiar el nombre del canal principal** a `SFNarrow`, manteniendo la clave `AQ==`.
Habilita también tanto _uplink_ como _downlink_ para que podamos recopilar datos.

### 📅 Fechas y configuración{#fechas-configuracion}

Para facilitar que la gente pueda unirse a los tests, hemos organizado los inicios de cada test en sábado. Cada
configuración durará dos semanas, con el fin de poder recopilar datos suficientes a lo largo de varios días y
condiciones.

#### Prueba 1 - del 14/03/2026 al 27/03/2026

- _Bandwidth_: `62`
- _Spread Factor_: `7`
- _Coding Rate_: `5`
- _Frequency slot_: `4`
- _Frequency override_: `869.618`
- [Enlace al QR de configuración](/docs/generador-configuracion?preset=SFNarrow+-+Prueba+1)

#### Prueba 2 - del 28/03/2026 al 10/04/2026

- _Bandwidth_: `62`
- _Spread Factor_: `7`
- _Coding Rate_: `5`
- _Frequency slot_: `1`
- _Frequency override_: `869.4313`
- [Enlace al QR de configuración](/docs/generador-configuracion?preset=SFNarrow+-+Prueba+2)

#### Prueba 3 - ~~del 11/04/2026~~ del 09/04/2026 al 24/04/2026
> Adelantamos la prueba

- _Bandwidth_: `125`
- _Spread Factor_: `7`
- _Coding Rate_: `8`
- _Frequency slot_: `2`
- _Frequency override_: `869.5875`
- [Enlace al QR de configuración](/docs/generador-configuracion?preset=SFNarrow+-+Prueba+3)

#### Prueba 4 - del 17/04/2026 al 24/04/2026

- _Preset_: **ShortSlow**
- [Enlace al QR de configuración](/docs/generador-configuracion?preset=ShortSlow)

#### Prueba 5 - del 25/04/2026 al 01/05/2026

- _Preset_: **ShortFast**
- [Enlace al QR de configuración](/docs/generador-configuracion?preset=ShortFast)

#### Prueba 6 - del 01/05/2026 al 15/05/2026 (Repeticion de la Prueba 1)

- _Bandwidth_: `62`
- _Spread Factor_: `7`
- _Coding Rate_: `5`
- _Frequency slot_: `4`
- _Frequency override_: `869.618`
- [Enlace al QR de configuración](/docs/generador-configuracion?preset=SFNarrow+-+Prueba+1)

#### Prueba 7 - del 16/05/2026 al 22/05/2026

- _Bandwidth_: `62`
- _Spread Factor_: `6`
- _Coding Rate_: `5`
- _Frequency slot_: `4`
- _Frequency override_: `869.618`
- [Enlace al QR de configuración](/docs/generador-configuracion?preset=SFNarrow+-+Prueba+5)

#### Volvemos - del 23/05/2026 en adelante

- Volvemos temporalmente al _preset_ **MediumFast**.
- Valoramos los datos obtenidos para tomar una decisión.
- [Enlace al QR de configuración](/docs/generador-configuracion?preset=MediumFast)

:::info

¡Ojo! Los firmwares oficiales actuales (tanto la beta "estable" 2.7.15 como la última alpha 2.7.22) no tienen soporte para el Spreading Factor 6. Además, los chips LoRa antiguos, como el SX1276, no son compatibles con SF6, por lo que nodos antiguos como el Heltec V2 no podrán participar en esa prueba específica.

Para participar en los tests SFNarrow, es necesario utilizar compilaciones personalizadas con el soporte desbloqueado:

- **[Firmware v2.7.15-custom (Recomendado para la mayoría de nodos de dificil acceso)](https://github.com/meshtastic-es-community/sfnarrow-firmware/actions/runs/23066767401#artifacts)**

- **[Firmware v2.7.22-custom (Recomendado para Heltec V4 y similares)](https://github.com/meshtastic-es-community/sfnarrow-firmware/actions/runs/24403927815#artifacts)**

Esperamos que estos cambios se incluyan de forma oficial en la siguiente version del firmware. El Pull Request ya mergeado **[PR](https://github.com/meshtastic/firmware/pull/10160)**.

:::

### 📊 Recopilación de datos{#recopilacion-datos}

Nos gustaría recopilar datos de alcance, calidad de la señal y cualquier incidencia que puedas observar durante los
tests. Puedes compartir esta información a través de nuestro canal de Telegram. Esto nos ayudará a analizar los
resultados y tomar decisiones informadas sobre la mejor configuración para la malla en la Zona Centro.

Entre los datos que queremos recopilar están:

- Valores medios de SNR y RSSI con enlaces directos.
- Nuevos enlaces directos que antes no tuvieras (o enlaces directos perdidos).
- ChUtil y AirUtil para evaluar la eficiencia de la red.
- Cualquier incidencia o comportamiento extraño que observes durante el test.
    - Por ejemplo, un usuario reporta que algunos mensajes (sobre todo los largos de 200 caracteres) no siempre llegan
      tanto como un _traceroute_.

---

¡Gracias por colaborar en hacer la malla más robusta! 📡❤️
