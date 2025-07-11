---
slug: mediumslow-madrid
title: 👉 Madrid se pasa de LongFast a MediumSlow
authors: []
tags: [Madrid, Configuración, MediumSlow]
---

### ¿Cuándo?

:::info
**Cambio a MediumSlow:**
⏰ Domingo 6 - Lunes 7, a partir de las 00:00 (medianoche)

**Test en MediumSlow, una semana**:
📅 Lunes 7 - Domingo 13

**¿Vuelta a LongFast?: 🤔**
⏰ Lunes 14 a las 00:00
(Si funciona mejor, nos quedamos)
:::

### ¿Por qué?

- LongFast no da más de sí, queremos probar si con MediumSlow la red de Madrid se satura menos.

<!-- truncate -->

A tener en cuenta:

- Como la transición comienza el domingo, es probable que durante ese día la red no este 100% operativa.
- Se asume que el Lunes 7 a partir de las 00:00 todos los nodos habrán cambiado a MediumSlow.
- Se espera una pérdida de unos 3 o 4 dBm en la intensidad de señal (RSSI).
- Los nodos en distintos presets no se escuchan entre sí, pero compartimos el mismo canal (slot).

Documentación e info sobre cómo cambiar el preset:

- Ve a Configuración de Radio: Busca el menú de "Radio Configuration" (a menudo bajo un icono de tres puntos verticales o un engranaje).
- Ajustes LoRa: Dentro de la configuración de radio, encontrarás una sección para "LoRa" o "Modem Preset".
- Selecciona el Nuevo Preset: Aquí verás una lista de presets disponibles (como "LONG_FAST", "MEDIUM_SLOW", etc.). Elige "MEDIUM_SLOW".
- Guarda los Cambios: Asegúrate de guardar la configuración. El dispositivo Meshtastic se reiniciará con el nuevo preset.

https://meshtastic.org/docs/configuration/radio/lora/

Más info:
https://meshtastic.org/blog/why-your-mesh-should-switch-from-longfast/
