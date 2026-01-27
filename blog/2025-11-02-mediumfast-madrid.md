---
slug: mediumfast-madrid
title: "👉 Madrid se pasa de MediumSlow a MediumFast"
description: "El cambio a MediumFast en la red de Madrid comenzará el 1 de noviembre. Descubre por qué este cambio es crucial para mejorar la conectividad y capacidad de nuestra red mesh."
authors: []
tags: [Madrid, Zona Centro, Configuración, MediumFast]
---

### ¿Cuándo?

:::info
**Cambio a MediumFast:**
⏰ A partir del 1 de noviembre
:::

### ¿Por qué?

- Viendo lo bueno que fué el cambio de LongFast a MediumSlow cuando la red lo necesitaba, esta vez hemos identificado antes los síntomas y se ve muy bien que MediumSlow ya no da más de sí.

- Tras pruebas exitosas, **MediumFast** mantiene una conectividad excelente y con mucha más capacidad por lo que nos estamos cambiando a este preset desde ya.

- Nos será a todos de gran ayuda si difundes el cambio para hacerlo lo mas ágil posible.

<!-- truncate -->

A tener en cuenta:

- La transición durará unos días, no todos estamos siempre disponibles. Es probable que durante este tiempo la red no este 100% operativa.
- Se espera una pérdida de unos 3 o 4 dBm en la intensidad de señal (RSSI).
- Los nodos en distintos presets no se escuchan entre sí, pero compartimos el mismo canal (slot).
- Está disponible el canal Madrid que puentea todos los presets

Documentación e info sobre cómo cambiar el preset:

- Ve a Configuración de Radio: Busca el menú de "Radio Configuration" (a menudo bajo un icono de tres puntos verticales o un engranaje).
- Ajustes LoRa: Dentro de la configuración de radio, encontrarás una sección para "LoRa" o "Modem Preset".
- Selecciona el Nuevo Preset: Aquí verás una lista de presets disponibles (como "LONG_FAST", "MEDIUM_SLOW", etc.). Elige "MEDIUM_FAST".
- Guarda los Cambios: Asegúrate de guardar la configuración. El dispositivo Meshtastic se reiniciará con el nuevo preset.

https://meshtastic.org/docs/configuration/radio/lora/

Más info:
https://meshtastic.org/blog/why-your-mesh-should-switch-from-longfast/
