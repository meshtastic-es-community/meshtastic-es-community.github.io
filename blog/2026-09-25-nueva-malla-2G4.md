---
slug: malla-2.4G-preparacion
title: 🧪 ¡Probamos los 2.4 GHz! Primeras pruebas y conclusiones en esta nueva forma de usar Meshtastic
authors: []
tags: [2.4 GHz, Antenas, Hardware, DIY, Configuración, Mesh]
description: >
  La malla en 2.4 GHz arranca motores. Repasamos las mejores opciones de antenas comerciales,
  el resurgir de las "cantennas" caseras y el hardware compatible.
---

# ¡La Red Malla en 2.4 GHz es Real y Funciona! 🚀
## Por qué deberías desplegar tu nodo en 2.4 Ghz hoy mismo

Tras varias pruebas de campo y tests de rendimiento con hardware el hardware disponible, los resultados son rotundamente claros: **la malla en 2.4 GHz no solo es viable, sino que ofrece ventajas únicas de velocidad, tamaño y capacidad que complementan perfectamente el ecosistema mesh.**

Si estabas pensando en probar tecnologías alternativas, aquí te contamos todo lo que hemos descubierto en los tests y por qué es interesante probar los 2.4 GHz.

---

## ⚡ ¿Por qué la frecuencia de 2.4 GHz? Las Ventajas Clave

### 1. Ancho de banda y velocidad de transmisión superiores
A diferencia de las bandas sub-GHz tradicionales donde la tasa de bits es muy limitada, en 2.4 GHz disponemos de un ancho de banda significativamente mayor. El preset SFNarrow da una velocidad aproximada de 2.5Kb/s, mientras que en 2.4 Ghz, el preset inicial tendrá una velocidad de 6Kb/s. Esto se traduce en:
* **Mensajes más rápidos:** Latencia mas baja en la entrega de pings y paquetes de texto.
* **Menor tiempo en el aire (Airtime):** Al transmitir más rápido, el canal sufre muchísima menos saturación, reduciendo las colisiones incluso con decenas de nodos activos.
* **Sin duty cycle restrictivo:** La banda de 2.4 GHz se caracteriza por no tener las restricciones de ciclo de trabajo del 10% presentes en 869 MHz, permitiendo un tráfico de datos más fluido.


### 2. Antenas compactas
La longitud de onda en 2.4 GHz es de aproximadamente **12.5 cm** (frente a los ~35 cm de 868 MHz). Esto permite utilizar antenas omnidireccionales y direccionales de alto rendimiento con dimensiones muy reducidas:
* **Nodos portátiles minimalistas:** Algunos chips LoRa incluso integran la antena en su PCB, de manera que se pueden hacer nodos muy compactos.
* **Antenas de fibra de vidrio fijas:** Modelos omnidireccionales de alta ganancia (como las CDEBYTE TX2400-BLG-30) con un tamaño compacto ideales para instalar en balcones o tejados sin generar impacto visual.


### 3. Coincidencia de espectro global
La banda ISM de 2.4 GHz es la misma en todo el mundo. No hay confusión entre configuraciones regionales (EU868, US915, AU915, etc.): tu nodo de 2.4 GHz funcionará con las mismas antenas en cualquier país.

---

## 📊 Resultados de los Tests de Campo

En nuestras pruebas recientes hemos sometido a test intensivos varios nodos equipados con transceptores **SX1280 / SX1281** combinados con microcontroladores de bajo consumo (**nRF52840**) y **ESP32-S3**, conectados a distintas antenas e instalados a diferentes alturas.

### 1. Alcance en Línea de Vista (LOS)
En pruebas con visión directa entre puntos elevados y nodos móviles:
* **Distancias alcanzadas de 60+ kilómetros**.
* Calidad del enlace (RSSI y SNR) sorprendentemente estable gracias al procesado de señal LoRa en 2.4 Ghz.

### 2. Comportamiento en entornos desfavorables (NLOS)
Se han hecho pruebas en parques periurbanos, llenos de árboles y obstáculos y se han obtenido distancias de 780m (a falta de probar más), contrastándolo con 868 Mhz y teniendo las siguientes conclusiones:
* El RSSI era de aproximadamente 8-9dB menos que en 868 Mhz.
* El SNR variaba, dependiendo de la localización y de la posición, ya sea por interferencias de otros dispositivos o incluso por la propagación multicamino.
* Esta frecuencia es mucho mas dependiente del alcance visual (LOS) pero incluso sin ese enlace directo ofrece buen resultado en ciertas circunstancias.

Además, se han hecho pruebas en entorno urbano, entre un nodo en un balcón y otro a pie de calle y se han obtenido alcances fiables de 300m, aunque el alcance dependerá también de la distribución de los edificios y obstáculos que hubieran presentes. Los SNR y RSSI pueden variar al mover ligeramente el nodo debido a que en esta banda, los efectos de la propagación multicamino (multipath), son algo pronunciados, pudiendo crear interferencias constructivas o destructivas

---

## 🛠️ Guía Rápida de Hardware Recomendado

:::warning

El límite legal de potencia en la banda de 2,4 GHz es de 10 mW EIRP (o 10 dBm). Es imprescindible asegurarse de cumplir en todo momento con la normativa, ya que todos los nodos, en combinación con la antena, son capaces de superar este límite si están mal configurados.

:::

Si quieres montar tu propio nodo de 2.4 GHz, este es el hardware probado que te recomendamos:

| Componente | Opción Recomendada | Notas y Ventajas |
| :--- | :--- | :--- |
| **Módulo LoRa 2.4 Ghz** | **SX1281 / LR1121** | Chips que soportan 2.4 Ghz (e incluso 868 Mhz y 2.4 Ghz). |
| **Microcontrolador** | **nRF52840** (o ESP32-S3) | Consumo ultra bajo, conectividad Bluetooth nativa para la app. |
| **Antena Fija (Tejado/Balcón)** | **CDEBYTE TX2400-BLG-30** (Fibra de vidrio) | Alta ganancia omnidireccional, resistente a la intemperie. |
| **Antena Portátil** | Antena de 5dBi que incluye Ebyte | Antena tipo router. Evitas la tasa de 3€ al pedirlo junto a la radio. |
| **Alimentación** | Batería 18650 / LiFePO4 + Panel Solar | Se monta igual que un nodo solar de 868 Mhz salvo cambiando la radio. |

> ⚠️ **Consejo de cacharreo:** Si compras antenas genéricas de 2.4 GHz en AliExpress o tiendas sin marca, asegúrate de comprobar el conector (SMA vs RP-SMA) y, a ser posible, valídala con un VNA adecuado (NanoVNA V2 / V2 Plus4 o superior) antes de transmitir.


---
## 📡 Antenas Medidas y Probadas en VNA
Estas antenas han sido ya medidas por la comunidad, ya que no todos los nanoVNA llegan hasta 2.4 GHz:

| Nombre | Enlace | Tipo | Ganancia | Precio Aprox. |
| :--- | :--- | :--- | :--- | :--- |
| **CDEBYTE TX2400-BLG-30** | [Ver en AliExpress](https://es.aliexpress.com/item/1005010476741641.html) | Omnidireccional (Fibra) | 8.0 dBi | ~11 - 13 € |
| **EBYTE TX2400-JK-11 (Stock ebyte)** | [Ver en AliExpress](https://es.aliexpress.com/item/1005010288386483.html) | Omnidireccional (Tipo Router WiFi)| 5.0 dBi | ~1 - 3 € |
| **Antena Flexible Gizont** | [Ver en AliExpress](https://es.aliexpress.com/item/1005004598468979.html) | Omnidireccional (Flexible) | 2.0 - 3.0 dBi | ~8 - 9 € |
| **Antena Yagi PCB** | [Ver en AliExpress](https://es.aliexpress.com/item/1005011977259250.html) | Direccional | 12 dBi | ~5 € |

*Enlaces no afiliados. Estas antenas son una sugerencia ya que hay miles de antenas para esta banda*

---

## 🎯 Casos de Uso: ¿Para qué sirven realmente los 2.4 Ghz?

El salto de velocidad y el tamaño reducido de antenas no son solo curiosidades técnicas: abren la puerta a usos muy concretos que complementan (no sustituyen) a la malla en 868 MHz.

### 🔗 Enlaces punto a punto
Gracias al mayor ancho de banda (~6 Kb/s frente a los ~2.5 Kb/s de SFNarrow) y a antenas direccionales compactas como la Yagi de 12 dBi, el 2.4G es una opción excelente para enlazar dos puntos concretos con más caudal que un enlace equivalente en 868 Mhz, por ejemplo, para llevar conectividad a una zona sin cobertura o unir dos "islas" de malla.

### 🌉 Puentes entre mallas (bridge 868 Mhz ↔ 2.4 Ghz)
Como se indica más abajo, los nodos de  868 Mhz y 2.4 Ghz **no se escuchan entre sí**. Un nodo bridge (o dos nodos conectados vía MQTT/serial) puede recoger el tráfico de la malla local en 868 Mhz y republicarlo en la malla 2.4 Ghz, y viceversa, permitiendo que ambas redes convivan y se complementen sin fragmentar la comunidad.

### 🦴 Backhaul de la red principal
En lugar de migrar todos los nodos de usuario a 2.4 Ghz, tiene más sentido reservarlo como "columna vertebral" de alta velocidad entre nodos fijos y repetidores estratégicos (tejados, cerros, puntos altos), mientras los nodos de usuario siguen operando en 868 Mhz. Esto reduce el airtime y la saturación en la malla principal.

### 🏠 Malla local de corto alcance
En interiores, eventos o entornos con muchos nodos concentrados, el mayor ancho de banda permite cursar más tráfico simultáneo sin saturar el canal, algo especialmente útil en despliegues temporales (ferias, actividades, emergencias puntuales).

### 🔀 Reticulum y otros protocolos
El mismo hardware (SX1280/SX1281 + nRF52840) no está atado a Meshtastic: es perfectamente reutilizable para experimentar con **Reticulum** u otros protocolos mesh, abriendo la puerta a quien quiera ir más allá del ecosistema Meshtastic con el mismo módulo de radio.

:::info Pendiente de validar
Aún queda por comprobar el comportamiento de esta banda con mal tiempo (lluvia, niebla, humedad), especialmente en enlaces NLOS. Si haces pruebas en estas condiciones, comparte los resultados con la comunidad.
:::

---

## 🔌 Comparativa de velocidades (2.4 GHz vs 433/868 MHz)
Pese a que los presets se llamen igual, en 2.4 GHz cambian considerablemente los anchos de banda, teniendo un rango de entre 203 y 812KHz (Además de 1625 únicamente para los módulos que usen el SX1281 (Ej: Ebyte E28)):

| Preset | Velocidad 2.4 GHz | Ancho de banda 2.4 GHz | Velocidad 868/433 | Ancho de banda 868/433 | SF / CR |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Short Turbo** | 71.09 kbps | 1625.0 kHz¹ | 21.88 kbps | 500 kHz² | SF 7 / CR 4/5 |
| **Short Fast** | 35.55 kbps | 812.5 kHz | 10.94 kbps | 250 kHz | SF 7 / CR 4/5 |
| **Short Slow** | 20.31 kbps | 812.5 kHz | 6.25 kbps | 250 kHz | SF 8 / CR 4/5 |
| **Medium Fast** | 11.43 kbps | 812.5 kHz | 3.52 kbps | 250 kHz | SF 9 / CR 4/5 |
| **Medium Slow** | 6.35 kbps | 812.5 kHz | 1.95 kbps | 250 kHz | SF 10 / CR 4/5 |
| **Long Turbo** | 4.36 kbps | 1625.0 kHz¹ | 1.34 kbps | 500 kHz² | SF 11 / CR 4/8 |
| **Long Fast** | 3.49 kbps | 812.5 kHz | 1.07 kbps | 250 kHz | SF 11 / CR 4/5 |
| **Long Moderate** | 1.09 kbps | 406.25 kHz | 0.34 kbps | 125 kHz | SF 11 / CR 4/8 |
| **Long Slow** | 0.60 kbps | 406.25 kHz | 0.18 kbps | 125 kHz | SF 12 / CR 4/8 |

¹ Solo disponible para chips basados en SX1281  
² No disponible en la región UE

Pese a estos presets, se puede lograr todavía más velocidad en 2.4 GHz en modo LoRa con un preset custom (Por ejemplo, BW 1625 SF5 CR 4/5), e incluso se puede lograr hasta 2 Mbps con otras modulaciones (FSK, FLRC) siendo muy interesante para Reticulum o enlaces punto a punto.

## 📐 Repositorio de PCBs y Diseños Hardware 2.4 Ghz

Para que sea más fácil arrancar, ya que se van a utilizar otros transceptores distintos a los de 868 Mhz, se ha hecho un repositorio en GitHub donde se recopilan las distintas PCBs compatibles con 2.4 Ghz. De momento, el chip más utilizado es el Ebyte E28-2G4.

👉 **[Accede al Repositorio de PCBs 2.4 GHz en GitHub](https://github.com/sqtactical/2.4GHz_PCBs)** 

---
## 📦 Módulos Compatibles

Además del chip en sí, existen módulos ya integrados que facilitan el montaje sin tener que soldar el SX1280/SX1281/LR1121 directamente:

| Módulo | Chip | Notas |
| :--- | :--- | :--- |
| **Ebyte E28-2G4M12S/SX** (y variantes 2G4M20S/27S/SX) | SX1280 / SX1281 | El más utilizado actualmente por la comunidad, soporta BW 1625 kHz en la variante SX1281. Buen soporte y stock disponible. |
| **Ebyte E80-900M2213S** | LR1121 | Módulo **dual-band** (Sub-GHz 868 MHz + 2.4 GHz en el mismo chip). Potencia máxima de chip: 22 dBm en sub-GHz / 13 dBm en 2.4 GHz (recuerda que el límite legal en 2.4 GHz es **10 mW / 10 dBm EIRP**), interfaz SPI, tamaño 26×16 mm. Interesante para quien quiera un único módulo capaz de moverse entre 868 y 2.4 GHz. |


Estos chips **NO** los recomendamos por los siguientes motivos: 
| Módulo | Chip | Motivo |
| :--- | :--- | :--- |
| **Vollgo VG2392S240X0M3**  |  SX1281 | La potencia mínima es de 13dbm, necesitando con ello de un filtro o atenuador para caer dentro de los límites legales |

### 🖥️ Placa "todo en uno"
Para quien prefiera no montar nada desde cero, la **LilyGO T3-S3 (versión SX1280 2.4G)** integra ESP32-S3, radio SX1280 (con PA en la versión "with PA", hasta +20 dBm de chip, de nuevo, por encima del límite legal de **10 mW / 10 dBm EIRP** en 2.4 GHz), conector RP SMA, pantalla OLED 0.96", USB-C y gestión de batería en una sola placa lista para flashear.

### 🧪 En pruebas
También se están evaluando otros módulos, aunque todavía sin resultados concluyentes ni soporte confirmado:
* **NiceRF LORA1281-TCXO** — chip LoRa 128X con TCXO de 0.5 ppm, hasta 12.5 dBm de chip, sensibilidad -132 dBm.

En todos los casos, la potencia de chip es solo la capacidad máxima del hardware: **el límite legal a la salida de la antena en 2.4 GHz es 10 mW / 10 dBm EIRP**, así que hay que configurar la potencia (y tener en cuenta la ganancia de la antena) para no superarlo.

Si tienes alguno de estos módulos y te animas a probarlo, comparte tus resultados con la comunidad para ir ampliando esta lista.

---
## ⚙️ Configuración y Ajustes Iniciales

Para garantizar la máxima interoperabilidad entre nodos y evitar fragmentar la malla en 2.4 GHz, recomendamos aplicar los siguientes parámetros base en tu dispositivo antes de salir a hacer pruebas:

| Parámetro | Valor Recomendado | Explicación |
| :--- | :--- | :--- |
| **Región (Region)** | `2.4 GHz`  | Selecciona la banda global de 2.4 GHz en el firmware. |
| **Preset** | `MediumSlow` | Ofrece un excelente compromiso entre velocidad (~6 Kbps) y alcance. |
| **Frecuency Override** | `2480` | Frecuencia elegida para alejarnos del WiFi. |
| **Saltos Máximos (Hop Limit)** | `3` | Evita saturación innecesaria en la malla manteniendo buena cobertura. |
| **Nombre del canal principal** | `Medium24` | Nombre elegido para evitar confusión con el MediumSlow de 868. Con clave `AQ==` |
| **Ok to MQTT** | `Activado` | Recuerda activarlo para que podamos recopilar estadísticas. |
| **Root Topic MQTT** | `msh/LORA_24` | Si quieres aportar al mapa deberás configurar tu nodo con este tópic. |

## 🤝 ¡Únete a la Malla 2.4 Ghz y Haz Crecer la Red!

### Pasos para animarte hoy:
1. **Consigue tu hardware:** Los componentes son económicos y fáciles de adquirir.
2. **Ubica tu nodo:** Si puedes colocarlo en una ventana alta, balcón o tejado, darás cobertura a todo tu vecindario.
3. **Pasa la voz:** Comparte tus pruebas de cobertura con el grupo local de makers o entusiastas de Meshtastic / redes mesh.

¡La banda de 2.4 GHz en malla está despegando y es el momento perfecto para formar parte de ella! Si tienes dudas sobre la configuración o los componentes, ¡pregunta a la comunidad y pongamos más nodos en el aire! 📡⚡

---

:::warning Nota importante
Esta frecuencia no es compatible con 868 Mhz y nodos de 2.4 Ghz y nodos de 868 Mhz no se escucharán entre ellos, quedando la posibilidad de realizar un bridge para lograr esa comunicación.
:::

:::info Otra nota
Actualmente, para que funcione el SX1280 es necesario compilar firmware personalizado con estos valores en el `variant.h`:

```c
#ifdef USE_SX1280
#define SX128X_CS    LORA_CS      // P1.13 — mismo CS que SX126x
#define SX128X_DIO1  (0 + 10)    // P0.10 — mismo que SX126x DIO1
#define SX128X_BUSY  (0 + 29)    // P0.29 — mismo que SX126x BUSY
#define SX128X_RESET LORA_RESET  // P0.09 — mismo que SX126x RESET
#define SX128X_RXEN  (0 + 17)    // P0.17 — mismo que SX126x RXEN
#define SX128X_TXEN  (32 + 6)    // P1.06 - pin para activar el PA
#define SX128X_MAX_POWER 3
```
:::
