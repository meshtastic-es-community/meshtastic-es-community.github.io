---
title: Cómo alimentar un dispositivo usando cable UTP / Ethernet
description: Guía práctica para alimentar dispositivos USB a larga distancia utilizando cable Ethernet.
slug: alimentar-heltec-usb-utp
tags: [Heltec, USB, UTP, Ethernet, Alimentación, IoT, Domótica]
sidebar_position: 4
---

En esta guía aprenderás una forma sencilla y útil para alimentar placas **Heltec Wireless Stick Lite V3**, o cualquier otro dispositivo que funcione a través de USB, utilizando un cable **UTP/Ethernet**.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/utp/utp-adapter.jpg").default} alt="Imagen PCB Faketec" width="300" />
</div>

Este método es práctico cuando necesitas llevar alimentación a distancias mayores que las de un cable USB típico, ya que el cable Ethernet es más económico, robusto y puede superar fácilmente los 10 metros.

---

## 🛠 Materiales necesarios

- Placa **Heltec WSL V3** (o cualquier dispositivo alimentado por USB, como ESP32, Raspberry Pi Zero, etc.)
- Cable **USB macho a RJ45 (Ethernet)**
- Cable **UTP** (par trenzado, Cat5e o superior, longitud necesaria)
- Cable **USB-C a USB-A macho** (para conectar la alimentación)
- Fuente USB de **5V** (cargador de móvil, powerbank, PC, etc.)

**Materiales usados en el ejemplo:**
- Splitter o hub USB — Amazon
- Adaptador USB a Ethernet — Amazon
- USB-C a USB-A macho — Amazon

---

## 🔌 Esquema de conexión

El principio es muy sencillo:

1. El adaptador **USB macho a RJ45** convierte el conector USB a un conector Ethernet.
2. El cable UTP transporta los **5V** y **GND** por dos de sus pares trenzados.
3. En el otro extremo, el adaptador **RJ45 a USB hembra** reconvierte la señal a USB.
4. Conectas tu cable USB-C a la Heltec, ¡y listo!

> ⚠️ **Importante:** El cable UTP transporta **solo alimentación** (no datos USB).  
> Este método **no sirve** para comunicación USB, únicamente para alimentar.

---

## 📋 Paso a paso

1. **Prepara los cables**  
   Conecta el adaptador USB macho a RJ45 a la fuente de alimentación USB de 5V o al PC.

2. **Conecta el cable UTP**  
   Enchufa el cable Ethernet al adaptador RJ45.  
   Puede tener la longitud que necesites, hasta unos **10-15 metros** sin problema.

3. **Adapta de nuevo a USB**  
   En el extremo donde está la Heltec, coloca el adaptador RJ45 a USB hembra.

4. **Conecta tu Heltec**  
   Usa un cable USB-C a USB-A macho para alimentar la Heltec desde el adaptador USB hembra.

---

## ✅ Ventajas de este método

- Permite llegar a distancias mayores que las de un cable USB estándar.
- Reutiliza cables UTP económicos y fáciles de conseguir.
- Compatible con cualquier dispositivo que funcione a 5V por USB.
- Robusto y sencillo de implementar.

---

## 🎥 Vídeo explicativo

Puedes ver el vídeo completo en YouTube:  

<iframe width="560" height="315" src="https://www.youtube.com/embed/05C2DbNv62I?si=rfEPISuFVjdLn8CH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 📌 Notas finales

Este método es ideal para proyectos de **domótica**, **IoT**, estaciones remotas o cualquier caso donde necesites alimentar un dispositivo USB en un lugar alejado.

Si tienes dudas, puedes dejarlas en los comentarios del artículo original o contactar con el autor.

---

**Fuente:** [Artículo original en Los inventos de almogu](https://almogu.com/como-alimentar-una-heltec-wireless-stick-lite-v3-y-otros-dispositivos-usb-usando-cable-utp-ethernet/)

- Redactado por @LosInventosdeAlmogu en telegram.

- Adaptación a web: [emylio](https://telegram.me/sremylio)

