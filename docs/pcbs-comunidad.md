---
sidebar_position: 9
---
import React from 'react';

# PCBs de la Comunidad Meshtastic

Esta página recopila diseños de placas PCB creadas por miembros de la comunidad Meshtastic. Cada entrada incluye una imagen, descripción, características y enlace al repositorio.

---

## 🔧 Diseños disponibles

### 🛠️ FakeTec PCB {#FakeTec}

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '40px' }}>
  <img src="https://raw.githubusercontent.com/gargomoma/fakeTec_pcb/refs/heads/main/pics/front_fakeTec.png" alt="FakeTec PCB" width="150" />
  <div>

**Descripción**: Dispositivo nRF52 de bajo coste con formato Heltec v2/v3 compatible con Meshtastic

**Características**: Placa ProMicro de bajo coste, LoRa HT-RA62 o RA-01SH, pantalla OLED opcional, detección de batería

**Autor**: @gargomoma

🔗 [Ver en GitHub](https://github.com/gargomoma/fakeTec_pcb)

</div>
</div>

---

### ☀️ MASN Solar Node {#masn}

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '40px' }}>
  <img src="/img/guias-diy/masn/bom-masn-pcb.webp" alt="MASN PCB" width="150" />
  <div>

**Descripción**: Nodo solar autónomo fácil de montar, pensado para principiantes

**Características**: NiceNano NRF52840, LoRa Core1262, cargador solar MPPT CN3791, sensor INA3221, BME280

**Autor**: @danielpcostas

🔗 [Ver artículo](https://danielpcostas.dev/es/masn-nodo-solar-meshtastic-que-cualquiera-puede-montar/)

  </div>
</div>

---

### 🌊 WashTastic {#WashTastic}

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '40px' }}>
  <img src="https://raw.githubusercontent.com/valzzu/meshtastic-pcbs/main/WashTastic/pics/Assembled.jpg" alt="WashTastic PCB" width="150" />
  <div>

**Descripción**: Nodo solar con bajo consumo y diseño compacto, disponible en versiones ensambladas. Enfocado a usuarios avanzados.

**Características**: NRF52840 integrado, cargador solar CN3791, INA3221, opción GPS, versión de 4 capas

**Autor**: @valzzu

🔗 [Ver en GitHub](https://github.com/valzzu/meshtastic-pcbs/tree/main/WashTastic)

</div>
</div>

---

### ✂️ Planchatek {#planchatek}

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '40px' }}>
  <img src="https://raw.githubusercontent.com/incre77/planchatek/refs/heads/main/image.png" alt="Planchatek PCB" width="150" />
  <div>

**Descripción**: Una placa base para imprimir de forma casera en una sola cara y conseguir una base para construir tu pcb.

**Características**: LoRa Ra01sh o ht-ra62 + nice nano v2 promicro nrf52840 + medidor batt% + cn3791 + xb8789d0 + attiny.

**Autor**: @incre77

🔗 [Ver en GitHub](https://github.com/incre77/planchatek/)

  </div>
</div>

---

### 🌀 xiaoWa_pcb - 小瓦 {#xiaoWa}


<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '40px' }}>
  <img src="https://raw.githubusercontent.com/gargomoma/xiaoWa_pcb/refs/heads/main/pics/PCB_XiaoWa_2025-11-04_top.png" alt="XiaoWa PCB" width="100" />
  <div>

**Descripción**: Esta PCB está diseñada para ocupar el menor espacio posible, ideal para nodos portátiles y ocultos. (Puede instalarse dentro de tubos de PVC de 32 mm).

**Características**: Compatible con radios E22, E22P y E80. Supervisor de voltaje TLV840, Mosfet para GPS...

**Autor**: @gargomoma

🔗 [Ver en GitHub](https://github.com/gargomoma/xiaoWa_pcb)

</div>
</div>

---

### 🔌 Pico2_W5500_E22 {#pico2-w5500-e22}

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '40px' }}>
  <img src="https://raw.githubusercontent.com/cvaldess/Pico2_W5500_E22/refs/heads/main/2D_Pico2_W5500_E22.png" alt="Pico2_W5500_E22 PCB" width="150" />
  <div>

**Descripción**: Placa carrier que integra un Raspberry Pi Pico 2, módulo Ethernet W5500 y módulo LoRa Ebyte E22 en un diseño compacto para aplicaciones Meshtastic con conectividad por cable Ethernet y aliemtacion PoE.

**Características**: Raspberry Pi Pico 2 (RP2350), W5500 Ethernet vía SPI, Ebyte E22 900M30S LoRa, header BMP280 (I2C), expansión I2C, UART y soporte PoE PD.

**Autor**: @cvaldess

🔗 [Ver en GitHub](https://github.com/cvaldess/Pico2_W5500_E22)

  </div>
</div>

---

### 📦 Albatastic Series

Familia de PCBs modulares para Meshtastic creadas por la comunidad Albaceteña, pensadas para distintos formatos y casos de uso: desde la versión compacta y apilable, pasando por la versión PRO con varias opciones, hasta la ultra-minimalista Micro y la variante AlbaPipe diseñada para tubos de 50 mm.

<details>
<summary><strong>Albatastic-Series</strong> (Compact, PRO, Micro, AlbaPipe)</summary>

<br />

### 🖥️ Albatastic PRO

<div style={{display:'flex', alignItems:'flex-start', gap:'20px', marginBottom:'40px'}}>
  <img 
    src="https://raw.githubusercontent.com/EmilioAL-Git/PCB-Albatastic-PRO/main/images/Albatastic%20PRO%201.2.png" 
    alt="Albatastic PRO" 
    style={{width:'150px'}}
  />
  <div>

**Descripción**: PCB modular para Meshtastic integrable en caja Famatel 3072. Filosofía *"Choose your fighter"*: monta solo lo que necesitas.

**Características**: Nrf52 XIAO o ProMicro, múltiples radios LoRa (E22, E22P, HT-RA62, RA-01, E80) con pistas anchas y condensadores de tantalio para estabilidad. Múltiples cargadores solares compatibles (CN3791, CN3065, SD05CRMA, SD30CRMA), batería dual 18650 integrada o externa, GPS para control horario, sensores ambientales BME280/BME680/AHT20/INA219, pantalla OLED opcional, salida serial UART, watchdog inteligente con ATTINY13A y recuperación automática vía relé y BMS incorporado.

**Autor**: @Sremylio

🔗 [Ver en GitHub](https://github.com/EmilioAL-Git/PCB-Albatastic-PRO)

  </div>
</div>

---

### 📟 Albatastic Compact

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '40px' }}>
  <img src="https://github.com/user-attachments/assets/32965fe6-f38c-4d1d-ba76-e3bafcaca86e" alt="Albatastic Compact" width="150" />
  <div>


**Descripción**: PCB compacta, sencilla y modular para NRF52840 y E22/E22P, RA62, E80 o E28 (según versión).

**Características**: Diseño modular y apilable, compacto y para diversas radios. Posibilidad de usar una placa con el mismo tamaño para alimentación y de conectarlas por serial. Disponible para Pro Micro en SMD.

**Autor**: EA5JSQ

🔗 [Ver en GitHub](https://github.com/sqtactical/Albatastic_Node)

  </div>
</div>

---

### 🔬 Albatastic Micro

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '40px' }}>
  <img src="https://github.com/user-attachments/assets/e0857c7a-690c-4f96-a0e6-cd1726f825af" alt="Albatastic Micro PCB" width="150" />
  <div>

**Descripción**: La PCB más ultra-compacta y minimalista para el E22P, con NRF52840.

**Características**: NRF52 Pro Micro, radio nativa E22/E22P con soporte ampliado para más radios, plano de tierra, resistencias para monitorización de batería, pads I2C para sensores y supervisor de voltaje integrado TLV840.

**Autor**: EA5JSQ

🔗 [Ver en GitHub](https://github.com/sqtactical/PCB-Albatastic-micro)

  </div>
</div>

---

### 🖥 AlbaPipe

<div style={{display:'flex', alignItems:'flex-start', gap:'20px', marginBottom:'40px'}}>
  <img 
    src="https://raw.githubusercontent.com/miguelleonmanzano/Albapipe-Meshtastic-Node/refs/heads/main/pcb%20front.png" 
    alt="AlbaPipe" 
    style={{width:'50px'}}
  />
  <div>

**Descripción**: PCB adaptada para poder introducir en un tubo de 50 mm de diámetro.

**Características**: Basada en Promicro y E22 o E22p, preparada (opcional) para GPS, telemetría ambiental y medición eléctrica, supervisor de tensión TLV840 y reseteo automático temporizado por Attiny, medición % batería, BMS. Posibilidad de conectar la antena directamente al E22 o a un conector SMA.

**Autor**: miguelleonmanzano

🔗 [Ver en GitHub](https://github.com/miguelleonmanzano/Albapipe-Meshtastic-Node)

  </div>
</div>

</details>

---

## 📬 ¿Quieres añadir tu diseño?

Envíanos el enlace a tu repositorio, una imagen del PCB y una breve descripción. ¡Lo añadiremos aquí para que otros puedan usarlo o mejorarlo!
