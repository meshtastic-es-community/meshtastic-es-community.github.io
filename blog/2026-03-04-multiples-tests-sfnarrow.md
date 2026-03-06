---
slug: mas-tests-sfnarrow
title: "🧑‍🔬 Múltiples tests SFNarrow en la Zona Centro"
description: "Estamos probando nuevas configuraciones de frecuencia (SFNarrow) en la malla Meshtastic de la Zona Centro para mejorar el alcance y reducir interferencias. ¡Únete al test!"
authors: [ ]
tags: [ Madrid, Zona Centro, Configuración, Narrow ]
---

:::info

Para no repetir todo el motivo de por qué hacemos estos tests, puedes leer
la [entrada anterior del blog](2026-01-19-test-sfnarrow-zona-centro.md).

:::

### ℹ️ Información general{#info-general}

Queremos probar diferentes configuraciones de frecuencia (SFNarrow) en la malla Meshtastic de la Zona Centro para
mejorar el alcance y reducir interferencias. Para ello, hemos planificado varios tests con diferentes configuraciones
que puedes ver a continuación.

### 🙋‍♂️ Cómo participar{#participar}

Si quieres participar en los tests, simplemente debes configurar tu dispositivo con la configuración correspondiente a
cada periodo. Puedes hacerlo a través de la aplicación móvil o el cliente que tengas conectado.

En todos los casos, hay que **cambiar el nombre del canal principal** a `SFNarrow`, manteniendo la clave `AQ==`.
Habilita también tanto _uplink_ como _downlink_ para que podamos recopilar datos.

### 📅 Fechas y configuración{#fechas-configuracion}

Para facilitar que la gente pueda unirse a los tests, hemos organizado los inicios de cada test en sábado. Cada
configuración durará dos semanas, con el fin de poder recopilar datos suficientes a lo largo de varios días y
condiciones.

| Inicio     | Fin        | Configuración LoRa                                                                                 |
|------------|------------|----------------------------------------------------------------------------------------------------|
| 14/03/2026 | 27/03/2026 | _Bandwidth_: `125` <br/> _Spread Factor_: `7` <br/> _Coding Rate_: `5` <br/> _Frecuency Slot_: `1` |
| 28/03/2026 | 10/04/2026 | _Bandwidth_: `125` <br/> _Spread Factor_: `7` <br/> _Coding Rate_: `5` <br/> _Frecuency Slot_: `2` |
| 11/04/2026 | 24/04/2026 | _Bandwidth_: `62` <br/> _Spread Factor_: `7` <br/> _Coding Rate_: `5` <br/> _Frecuency Slot_: `1`  |
| 25/04/2026 | 08/05/2026 | _Bandwidth_: `62` <br/> _Spread Factor_: `6` <br/> _Coding Rate_: `5` <br/> _Frecuency Slot_: `4`  |
| 09/05/2026 |            | Volvemos al _preset MediumFast_                                                                    |

### 📊 Recopilación de datos{#recopilacion-datos}

<!-- Definir qué datos recoger, cómo hacerlo y cómo ponerlos en común. -->

---

¡Gracias por colaborar en hacer la malla más robusta! 📡❤️
