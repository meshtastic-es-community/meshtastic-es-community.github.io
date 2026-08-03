---
slug: malla-2.4G-preparacion
title: 📡 ¡Salto a los 2.4GHz! Antenas, cacharreo DIY y la conquista de Madrid
authors: []
tags: [2.4GHz, Antenas, Hardware, DIY, Configuración, Mesh]
description: >
  La malla en 2.4GHz arranca motores. Mientras los nodos se preparan para iluminar
  Madrid y otras zonas, repasamos las mejores opciones de antenas comerciales,
  el resurgir de las "cantennas" caseras y los retos de aduanas. ¡Prepara tu VNA!
---

# ¡La Red Malla en 2.4 GHz es Real y Funciona! 🚀
## Por qué deberías desplegar tu nodo en 2.4G hoy mismo

Las redes mesh o malla en bandas ISM han revolucionado la comunicación libre, descentralizada y sin dependencia de la infraestructura móvil tradicional. Durante mucho tiempo, las frecuencias de sub-GHz (como 868 MHz en Europa o 915 MHz en América) han sido las reinas indiscutibles para enlaces a larga distancia. Sin embargo, **la banda de 2.4 GHz para redes LoRa Mesh ha llegado para cambiar las reglas del juego**.

Tras pruebas de campo y tests de rendimiento con hardware de última generación, los resultados son rotundamente claros: **la malla en 2.4 GHz no solo es viable, sino que ofrece ventajas únicas de velocidad, compacidad y capacidad que complementan perfectamente el ecosistema mesh.**

Si estabas pensando en montar un nuevo nodo o ampliar la cobertura en tu ciudad, aquí te contamos todo lo que hemos descubierto en los tests y por qué deberías dar el salto a los 2.4 GHz.

---

## ⚡ ¿Por qué la frecuencia de 2.4 GHz? Las Ventajas Clave

### 1. Ancho de banda y velocidad de transmisión superiores
A diferencia de las bandas sub-GHz tradicionales donde la tasa de bits es muy limitada, en 2.4 GHz disponemos de un ancho de banda significativamente mayor. Para haceros una idea, el preset SFNarrow da una velocidad aproximada de 2.5Kb/s, mientras que en 2.4G, el preset inicial tendrá una velocidad de 8Kb/s. Esto se traduce en:
* **Mensajes instantáneos:** Latencia casi imperceptible en la entrega de pings y paquetes de texto.
* **Menor tiempo en el aire (Airtime):** Al transmitir más rápido, el canal sufre muchísima menos saturación, reduciendo las colisiones incluso con decenas de nodos activos.
* **Sin duty cycle restrictivo:** La banda de 2.4 GHz se caracteriza por no tener las restricciones de ciclo de trabajo del 1% presentes en 868 MHz, permitiendo un tráfico de datos más fluido.


### 2. Antenas compactas
La longitud de onda en 2.4 GHz es de aproximadamente **12.5 cm** (frente a los ~35 cm de 868 MHz). Esto permite utilizar antenas omnidireccionales y direccionales de alto rendimiento con dimensiones muy reducidas:
* **Nodos portátiles minimalistas:** Algunos chips LoRa incluso integran la antena en su PCB, de manera que se pueden hacer nodos muy compactos.
* **Antenas de fibra de vidrio fijas:** Modelos omnidireccionales de alta ganancia (como las CDEBYTE TX2400-BLG-30) con un tamaño compacto ideales para instalar en balcones o tejados sin generar impacto visual.


### 3. Coincidencia de espectro global
La banda ISM de 2.4 GHz es la misma en todo el mundo. No hay confusión entre configuraciones regionales (EU868, US915, AU915, etc.): tu nodo de 2.4 GHz funcionará con las mismas antenas en cualquier país.

---

## 📊 Resultados de los Tests de Campo

En nuestras pruebas recientes hemos sometido a test intensivos varios nodos equipados con transceptores **SX1280 / SX1281 (+27 dBm)** combinados con microcontroladores de ultra bajo consumo (**nRF52840**) y **ESP32-S3**, conectados a distintas antenas e instalados a diferentes alturas.

### 1. Alcance en Línea de Vista (LOS)
En pruebas con visión directa entre puntos elevados y nodos móviles:
* **Distancias sostenidas de 60+ kilómetros** sin pérdida de paquetes.
* Calidad del enlace (RSSI y SNR) sorprendentemente estable gracias al procesado de señal LoRa CSS en 2.4G.

### 2. Comportamiento en entornos desfavorables (NLOS)
Se han hecho pruebas en parques periurbanos, llenos de árboles y obstáculos y se han obtenido distancias de 780m (a falta de probar más), contrastándolo con 868 y teniendo las siguientes conclusiones:
* El RSSI era de aproximadamente 8-9dB menos que en 868.
* El SNR variaba, dependiendo de la localización y de la posición, ya sea por interferencias de otros dispositivos o incluso por la propagación multicamino.

---

## 🛠️ Guía Rápida de Hardware Recomendado

Si quieres armar tu propio nodo de 2.4 GHz, este es el hardware probado que te recomendamos:

| Componente | Opción Recomendada | Notas y Ventajas |
| :--- | :--- | :--- |
| **Módulo LoRa 2.4G** | **SX1281 / LR1121** | Chips que soportan 2.4G (e incluso 868 y 2.4G). |
| **Microcontrolador** | **nRF52840** (o ESP32-S3) | Consumo ultra bajo, conectividad Bluetooth nativa para la app. |
| **Antena Fija (Tejado/Balcón)** | **CDEBYTE TX2400-BLG-30** (Fibra de vidrio) | Alta ganancia omnidireccional, resistente a la intemperie. |
| **Antena Portátil** | Antena de 5dBi que incluye Ebyte | Antena tipo router. Evitas la tasa de 3€ al pedirlo junto a la radio. |
| **Alimentación** | Batería 18650 / LiFePO4 + Panel Solar | Se monta igual que un nodo solar de 868 salvo cambiando la radio. |

> ⚠️ **Consejo de cacharreo:** Si compras antenas genéricas de 2.4 GHz en AliExpress o tiendas sin marca, asegúrate de comprobar el conector (SMA vs RP-SMA) y, a ser posible, valídala con un VNA adecuado (NanoVNA V2 / V2 Plus4 o superior) antes de transmitir.

---


## 📐 Repositorio de PCBs y Diseños Hardware 2.4G

Para que sea más facil arrancar, ya que se van a utilizar otros transceptores distintos a los de 868, se ha hecho un repositorio en GitHub donde se recopilan las distintas PCBs compatibles con 2.4G. De momento, el chip más utilizado es el Ebyte E28-2G4.

👉 **[Accede al Repositorio de PCBs 2.4 GHz en GitHub](https://github.com/sqtactical/2.4GHz_PCBs)** 

---
## ⚙️ Configuración y Ajustes Iniciales

Para garantizar la máxima interoperabilidad entre nodos y evitar fragmentar la malla en 2.4 GHz, recomendamos aplicar los siguientes parámetros base en tu dispositivo antes de salir a hacer pruebas:

| Parámetro | Valor Recomendado | Explicación |
| :--- | :--- | :--- |
| **Región (Region)** | `2.4GHz`  | Selecciona la banda global de 2.4 GHz en el firmware. |
| **Preset** | `MediumSlow` | Ofrece un excelente compromiso entre velocidad (~8 Kbps) y alcance. |
| **Frecuency Override** | `2480` | Frecuencia elegida para alejarnos del WiFi. |
| **Saltos Máximos (Hop Limit)** | `3` | Evita saturación innecesaria en la malla manteniendo buena cobertura. |
| **Nombre del canal 0** | `Medium24` | Nombre elegido para evitar confusión con los MediumFast y MediumSlow de 868. |
| **Ok to MQTT** | `Activado` | Recuerda activarlo para que podamos recopilar estadísticas. |

## 🤝 ¡Únete a la Malla 2.4G y Haz Crecer la Red!

Una red malla solo es tan fuerte como la comunidad que la sostiene. Cada nuevo nodo en 2.4 GHz agrega redundancia, amplía la cobertura y demuestra el enorme potencial de esta frecuencia para comunicaciones libres y resilientes.

### Pasos para animarte hoy:
1. **Consigue tu hardware:** Los componentes son económicos y fáciles de adquirir.
2. **Ubica tu nodo:** Si puedes colocarlo en una ventana alta, balcón o tejado, darás cobertura a todo tu vecindario.
3. **Pasa la voz:** Comparte tus pruebas de cobertura con el grupo local de makers o entusiastas de Meshtastic / redes mesh.

¡La banda de 2.4 GHz en malla está despegando y es el momento perfecto para formar parte de ella! Si tienes dudas sobre la configuración o los componentes, ¡pregunta a la comunidad y pongamos más nodos en el aire! 📡⚡
