---
title: Guia montaje PCB MESC Ver. 3.1
description: Guía paso a paso para montar una pcb con todo incluido para un nodo solar
slug: guia-montaje-pcb-mesc-3.1
sidebar_position: 2
---

# MONTAJE PCB MESC Ver. 3.1 
(Rev. 2)

Guía con comentarios para montar un Nodo Solar con una **PCB Faketec V3.**
Recomiendo leer primero el documento antes de iniciar el montaje, para comprender lo que es necesario y lo que es opcional.


---

## 📦 Material necesario

- 1 PCB Faketec (la versión 3 sería suficiente)

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/18.jpg").default} alt="Imagen PCB Faketec" width="300" />
</div>

- 1 MPPT CN3791 6V (Controlador de carga de la batería y alimentación del Nodo)

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/19.jpg").default} alt="Imagen MPPT CN3791" width="300" />
</div>

- 1 INA3221 de 3 canales independientes  
  ⚠️ Hay una versión con la [**misma referencia que no es compatible**](/docs/guias-diy/guia-montaje-pcb-mesc-3.1#-versi%C3%B3n-erronea-de-la-ina3221). La correcta tiene los extremos de las resistencias **R100** yendo a sus conectores **Chx**.  
  Antes de montarla, soldar **un puente en la identificación SDA**.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/20.jpg").default} alt="Imagen INA3221" width="300" />
</div>

- 1 BME280 3.3V (Sensor de temperatura, humedad y presión atmosférica)

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/22.jpg").default} alt="Imagen BME280" width="300" />
</div>

- 1 o 2 diodos tipo Schottky  
  De bajo consumo (≈0,5 V). Según paneles solares. En el ejemplo se usa **encapsulado SMD-100**.  
  La polaridad viene marcada con una raya en un extremo.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/24.jpg").default} alt="Imagen Diodo Schottky" width="300" />
</div>

- 1 KSD9700 250V 5A **50 ℃** estado **normal cerrado**  
  Interruptor térmico que abre el circuito si la temperatura alcanza los 50 ℃ para proteger la batería.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/0.jpg").default} alt="Imagen KSD9700 50C" width="300" />
</div>

- 1 KSD9700 250V 5A **45 ℃** estado **normal abierto**  
  Para activar un ventilador de 5 V si la temperatura llega a 45 ℃. (Opcional)

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/1.jpg").default} alt="Imagen KSD9700 45C" width="300" />
</div>

- 1 Ventilador de 5 V  
  Tamaño según se necesite. Ejemplo: **40×40×10 mm**. Los de Raspberry Pi son más pequeños y mueven menos aire.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/2.jpg").default} alt="Imagen Ventilador" width="300" />
</div>

- Conectores PIN hembra y macho **DUPONT 2,54 mm** (rectos y a 90°).  
  En algunas conexiones pueden ser opcionales y soldar cable directo a la PCB.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/3.jpg").default} alt="Imagen Conectores DUPONT" width="300" />
</div>

---

## 📐 Características de la PCB MESC Ver. 3.1

La PCB **MESC 3.1** (Meshtastic Equipo Solar Completo) reduce el cableado del Nodo Solar, pensado como **nodo de cobertura** con perfil **ROUTER** o **CLIENTE “G”** para no saturar la red mesh.  
La “G” es por **NRF52840** (sin WiFi). Un ESP32 podría ir como **Cliente GW**, pero consume más.

Dimensiones: **78 mm × 70 mm**.  
Dispone de **5** agujeros de métrica 4 (fijación a caja) y **4** de métrica 2 (para fijar la Faketec).

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/4.jpg").default} alt="Imagen PCB MESC" width="300" />
</div>

---

## 🔧 Proceso de montaje

### 1) Soldadura del diodo D1

Si usas **un solo panel solar**, suelda el diodo en **D1** respetando polaridad (según serigrafía).

<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
  <img src={require("../../static/img/guias-diy/mesc/5.jpg").default} alt="Sensor KSD9700 sobre batería" style={{ width: "100%", maxWidth: "300px", height: "auto" }} />
  <img src={require("../../static/img/guias-diy/mesc/23.jpg").default} alt="Imagen adicional 16" style={{ width: "100%", maxWidth: "300px", height: "auto" }} />
</div>



### 2) Montaje de conectores y pines

**Truco** para no quemarte y que queden rectos:  
usa una regleta **hembra** como guía para sujetar los pines mientras sueldas.

Añade los pines para la **INA3221**: solo los **4 pines I2C** (igual que en el BME280) para ahorrar trabajo y coste.  
**GND2** es opcional: con **GND1** ya hay retorno común.  
Después coloca los **6 pines** de los tres canales independientes.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/8.jpg").default} alt="Imagen Montaje Pines" width="300" />
</div>

**Pines y conectores en la MESC y su función:**

- **BATERÍA**: entrada desde la batería (**rojo** + / **negro** −).  
- **KSD9700**: conector para el **50 ℃ NC** (protección).  
- **SWITCH ON/OFF**: interruptor mecánico para cortar alimentación (recomendable **desconectar manualmente** la placa solar por seguridad).  
- **I2C_AUX1** e **I2C_AUX2**: periféricos I2C (OLED, sensores). Orden de pines (de arriba a abajo): **GND, VCC, SCL, SDA**.  
- **CONN BAT FAKETEC**: alimentación de la PCB Faketec (recomendado **conector hembra a 90°**).  
- **PANEL SOLAR 1 y 2**: entradas de placas solares (el **2** es opcional). Respetar polaridad. Recomendado cable **rojo/negro** y **conector jack hembra estanco** en la caja.  
- **VENTILADOR 5 V** (opcional): si se usa el KSD9700 **45 ℃ NO**.

### 3) Montaje de módulos

#### MPPT CN3791

Soldar un **conector de 4 pines a 90°**, insertado por la cara de componentes.  
No fijarla definitivamente hasta tener **todos los pines** montados.  
Se usa este conector para unir **paneles** y **batería**, evitando los conectores blancos de la CN3791.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/9.jpg").default} alt="Imagen Montaje MPPT" width="300" />
</div>

#### BME280

Mismo procedimiento: **conector 4 pines a 90°**, soldado por la cara de componentes.  
⚠️ **Ojo**: el orden de pines **I2C** del BME280 **no coincide** con el de la Faketec (alimentación invertida).  
Para evitar errores, usa el conector dedicado **I2C_BME280** de la MESC.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/12.jpg").default} alt="Imagen Montaje BME280" width="300" />
</div>

#### INA3221

Cuando ya estén colocadas la **Faketec**, la **MPPT** y el **BME280**, suelda la **INA3221**.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/6.jpg").default} alt="Imagen Montaje INA3221" width="300" />
</div>

---

## 🌡️ Sensor térmico KSD9700

Puede que necesites **alargar cables**.  
Recomiendo pegar el de **50 ℃** a la **batería** con **cinta térmica** para protegerla y aislarla del resto de componentes.

<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
  <img src={require("../../static/img/guias-diy/mesc/0.jpg").default} alt="Sensor KSD9700 sobre batería" style={{ width: "100%", maxWidth: "300px", height: "auto" }} />
  <img src={require("../../static/img/guias-diy/mesc/15.jpg").default} alt="Imagen adicional 15" style={{ width: "100%", maxWidth: "300px", height: "auto" }} />
  <img src={require("../../static/img/guias-diy/mesc/16.jpg").default} alt="Imagen adicional 16" style={{ width: "100%", maxWidth: "300px", height: "auto" }} />
</div>



---

## 🧪 Prueba de funcionamiento

Cuando termines soldaduras y conexiones **(batería e interruptor)**, **coloca la antena** en la Faketec **antes de encender** y realiza la prueba.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/17.jpg").default} alt="Imagen Prueba Funcionamiento" width="300" />
</div>

> Nota: si tu INA3221 era de la versión incorrecta, verás **puentes** en pistas (no recomendado). Lo ideal es elegir el **modelo correcto** y evitar retrabajos.

---

## ⚠️ Recomendaciones adicionales

Para evitar cortos, usa **conector hembra** en la batería y, en general, **hembras donde haya tensión** (ej. placa solar).

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/7.jpg").default} alt="Imagen Conector hembra batería" width="300" />
</div>

En mi caso de pruebas: conector **hembra 4 pines** para **I2C de la Faketec** y **macho 4 pines** en la **MESC**.  
También puedes **soldar la Faketec directamente** a la MESC con conector macho y ahorrar separadores de nylon **M2**.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/11.jpg").default} alt="Imagen I2C Faketec/MESC" width="300" />
</div>

### ❗ Versión erronea de la INA3221
 
Para los que se fijan en los detalles, la INA3221 de este ejemplo tiene unos
puentes sobre las pistas de circuito impreso. Es debido a que esta INA3221 es la
que no hay que usar. He tenido que cortar pistas y hacer puentes para que
funcione correctamente, y os aconsejo que evitéis este trabajo eligiendo bien el
modelo de INA3221.

**CORRECTA:**
<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/25.jpg").default} alt="Imagen I2C Faketec/MESC" width="300" />
</div>
**NO USAR:**
<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/26.jpg").default} alt="Imagen I2C Faketec/MESC" width="300" />
</div>
---

## 🧩 Esquema de conexiones 

Aquí tenéis el esquema de conexiones del montaje MESC Ver. 3.1. 

Este diagrama muestra cómo se interconectan todos los módulos: la PCB, el controlador MPPT, los sensores térmicos, la batería, el ventilador y los conectores auxiliares. Muy util para diagnosticar problemas.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/esquema.jpg").default} alt="Imagen I2C Faketec/MESC" width="1000" />
</div>

---

## 🔮 Futuras versiones

Con la **MESC Ver. 3.1** solo cableas **batería**, **placa solar** e **interruptor**.  
En la **Ver. 4** no hará falta la PCB Faketec e incluirá:

- **Attiny 13/85** como *watchdog* (RESET automático si es necesario).  
- **MOSFET** para control remoto de periféricos.  
- PCB con diseño **reducido al mínimo**.

---

## 📢 Comunidad

Comentarios y aportaciones con buenas ideas en los canales de Telegram:

- [Meshtastic en español](https://t.me/meshtastic_esp)  
- [Meshtastic Cataluña](https://t.me/MeshtasticGirona)

Autor original: **@macabello67**  
Adaptación a web: [emylio](https://telegram.me/sremylio)
