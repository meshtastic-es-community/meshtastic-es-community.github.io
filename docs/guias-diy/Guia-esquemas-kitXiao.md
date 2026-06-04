---
id: nodo-solar-meshtastic
slug: /hardware/nodo-solar
title: Nodo solar Meshtastic (WIO SX1262 y Faketec v4)
sidebar_label: Esquema para nodo solar | Kit Xiao / Faketec
description: Esquema y guía de montaje para un nodo solar Meshtastic con control de carga y telemetría de batería y sensor ambiental.
tags: [meshtastic, solar, hardware, wio-sx1262, faketec]
sidebar_position: 3
---

> 📐 Esquemas creados por **Calamar (@Calamar84)** para la comunidad Meshtastic España.
> 🗓️ **Actualizado:** 19-06-2025

Esta guía recopila los esquemas de conexión para montar un **nodo solar Meshtastic** con:

- 🔧 **Versión A:** Kit XIAO nRF52 con radio **WIO SX1262**
- 🧪 **Versión B:** PCB DIY **Faketec v4**

Ambas versiones incorporan:

- ⚡ Control de carga solar
- 🔋 Medición de carga y consumo de batería
- 🌡️ Sensor ambiental (temperatura, humedad y presión) con BME280

---

## 🧰 1) Materiales

### 🔗 Comunes a ambas versiones

- Panel solar 5V (entrada a módulo de carga)
- Batería Li-Ion/LiPo 3.7V (conexión a B+/B− del cargador)
- Módulo MPPT CN3791 (3.7V–6V)
- Medidor de corriente/voltaje INA3221
- Sensor BME280 (3.3V, I2C)
- Antena 868 MHz (LoRa)
- Cableado, estaño y herramientas de soldadura

### 🧩 Específicos por variante

- **Versión A (WIO SX1262):** placa/controladora WIO con radio SX1262
- **Versión B (Faketec v4):** placa Faketec v4

---

## 🧠 2) Variante A — WIO SX1262

### 🔍 Puntos clave

- Conector de antena 868 MHz (LoRa) y 2.4 GHz (Wi-Fi)
- Integración I2C para INA3221 y BME280

### 📷 Esquema de cableado

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/esquemas-solar/wioxiao.jpg").default} alt="Esquema WIO SX1262" width="800" />
</div>

---

## 🧪 3) Variante B — Faketec v4

### 🔍 Puntos clave

- Integración del INA3221 por I2C
- BME280 alimentado a 3.3V por I2C

### 📷 Esquema de cableado

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/esquemas-solar/faketec.jpg").default} alt="Esquema Faketec v4" width="800" />
</div>

:::tip

> 🎥 **Referencia:** vídeo demostrativo realizado por **EA3GRN** sobre Faketec v4:

<iframe width="560" height="315" src="https://www.youtube.com/embed/RLiguB2v5ec?si=Qw2ge-9EGTvTejue" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
:::
---

## 🛠️ 4) Montaje paso a paso

1. Planifica el cableado: define qué canales del INA3221 medirán solar → cargador y batería → carga
2. Suelda el INA3221: incluye los pads traseros (2 puntos) si tu módulo lo requiere
3. Instala el CN3791 y conecta panel y batería (respeta polaridades B+ / B−)
4. Tira el bus I2C (SDA/SCL, 3V3, GND) a INA3221 y BME280
5. Conecta antenas 868 MHz y 2.4 GHz
6. Prueba en banco: verifica tensiones, lectura del BME280 y del INA3221
7. Encapsulado: coloca todo en caja estanca, gestiona pasamuros para antenas y panel

---

## ⚙️ 5) Configuración de firmware

- Activa telemetría del sensor ambiental (BME280) y de batería si tu build lo soporta
- Añade lecturas periódicas del INA3221 y publícalas por la malla
- Ajusta intervalos de beacon y potencia para equilibrar autonomía y cobertura

---

## 🧯 6) Solución de problemas

| Problema             | Posible causa / solución                                            |
| -------------------- | ------------------------------------------------------------------- |
| No carga la batería  | Revisa polaridad B+ / B− y conexión del panel en IN+ del CN3791     |
| No se leen sensores  | Confirma 3V3 y GND; prueba continuidad; verifica SDA/SCL comunes    |
| Medidas incoherentes | Revisa el intercalado del INA3221 en las líneas que pretendes medir |
| Sin RF               | Comprueba antenas bien conectadas y que estés en la banda 868 MHz   |

---

## 🤝 7) Créditos y comunidad

- Diseño y esquemas: **Calamar (@Calamar84)** – Meshtastic España
- Adaptación a web: [emylio](https://telegram.me/sremylio)
- Comunidad: [Telegram Meshtastic España](https://t.me/meshtastic_esp)

---
