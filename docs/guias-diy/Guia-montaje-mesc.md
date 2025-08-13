---
title: Guia montaje PCB MESC Ver. 3.1
description: Guía paso a paso para montar una pcb con todo incluido para un nodo solar
slug: guia-montaje-pcb-mesc-3.1
sidebar_position: 2
---

# MONTAJE PCB MESC Ver. 3.1

Guía con comentarios para montar un Nodo Solar con una PCB Faketec Ver 3.1.  
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
  Hay una versión que tiene la misma referencia pero no es compatible.  
  Fijarse si los extremos de las resistencias R100 van a sus respectivos conectores Chx.  
  Antes de montarla, tendremos que soldar un puente en la identificación SDA.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/20.jpg").default} alt="Imagen INA3221" width="300" />
</div>

- 1 BME280 3.3V (Sensor de temperatura, humedad y presión atmosférica)

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/22.jpg").default} alt="Imagen BME280" width="300" />
</div>

- 1 o 2 diodos tipo Schottky  
  Son de bajo consumo, menos de 0,5V. Según los paneles solares que vayas a utilizar.  
  En mi caso he usado el encapsulado SMD-100.  
  Para saber la polaridad del diodo, vienen marcados con unas rayas en uno de los extremos.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/24.jpg").default} alt="Imagen Diodo Schottky" width="300" />
</div>

- 1 KSD9700 250V 5A 50℃ estado normal cerrado  
  Interruptor térmico que abre el circuito si la temperatura alcanza los 50℃, aislando y protegiendo la batería.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/0.jpg").default} alt="Imagen KSD9700 50C" width="300" />
</div>

- 1 KSD9700 250V 5A 45℃ estado normal abierto  
  Para activar un ventilador de 5V en caso de que la temperatura llegue a los 45℃. Es opcional.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/1.jpg").default} alt="Imagen KSD9700 45C" width="300" />
</div>

- 1 Ventilador de 5V  
  Tamaño según se necesite. El de la foto es 40mm x 40mm x 10mm.  
  Los que usa la Raspberry Pi son más pequeños, pero no dan mucho caudal de aire.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/2.jpg").default} alt="Imagen Ventilador" width="300" />
</div>

- Conectores PIN hembra y macho DUPONT de 2,54mm  
  También de tipo pin macho a 90°. En algunas conexiones pueden ser opcionales, y se pueden soldar directamente los cables a la PCB.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/3.jpg").default} alt="Imagen Conectores DUPONT" width="300" />
</div>
---

## 📐 Características de la PCB MESC Ver. 3.1

La PCB MESC ver. 3.1 (Meshtastic Equipo Solar Completo) está diseñada para ahorrarnos el trabajo de cablear nuestro Nodo Solar, que normalmente lo usaremos como Nodo de mejora de cobertura y según el perfil adecuado de ROUTER o CLIENTE "G" para no saturar la RED MESH.  
La "G" en nuestro caso es porque la NRF52840 no tiene WiFi, y en cambio un microcontrolador ESP32 sí que dispone de WiFi, y se podría configurar como Cliente GW, pero consume mucho más.

Sus dimensiones son 78mm x 70mm, tiene 5 agujeros de métrica 4 para fijarla en una caja y 4 agujeros de métrica 2 para fijar la Faketec.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/4.jpg").default} alt="Imagen PCB MESC" width="300" />
</div>

---

## 🔧 Proceso de montaje

### 1. Soldadura del diodo D1

Lo primero sería soldar el diodo en D1 en el caso de usar un solo panel solar.  
La polaridad según dibujo. No pude incluir el símbolo por desconocimiento con la nueva versión 9 de KiCad que utilizo para hacer los diseños.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/5.jpg").default} alt="Imagen Soldadura Diodo D1" width="300" />
</div>

### 2. Montaje de conectores y pines

Truco para soldar los pines y no quemarse los dedos:  
Utilizo la regleta de conectores hembra para insertar los pines a soldar, aprovechando los espacios y así consigo que los pines queden rectos.

Luego añadimos los pines para la INA3221, que solo he incluido los 4 pines del I2C (igual que la BME280) para ahorrar trabajo y costes.  
El GND2 también es opcional, con el GND1 ya le estamos dando conexión al negativo.  
Y seguimos con los 6 pines que van por separado en los canales.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/8.jpg").default} alt="Imagen Montaje Pines" width="300" />
</div>

### 3. Montaje de módulos

#### MPPT

La MPPT le soldamos un conector de 4 pines en 90°, insertando los pines por la parte de los componentes.  
No soldar la MPPT a la PCB hasta que tengamos todos los pines montados.  
Usamos este conector que tiene la MPPT para unir el circuito de las placas solar y el de la batería, sin utilizar los conectores blancos de la MPPT CN3791.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/9.jpg").default} alt="Imagen Montaje MPPT" width="300" />
</div>

#### BME280

Hacemos lo mismo con el conector de 4 pines a 90°, y lo soldamos por la cara de los componentes.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/12.jpg").default} alt="Imagen Montaje BME280" width="300" />
</div>

#### INA3221

Una vez que hemos soldado los pines, hemos añadido la Faketec, la MPPT y el sensor BME280, podemos soldar la INA3221.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/6.jpg").default} alt="Imagen Montaje INA3221" width="300" />
</div>
---

## 🌡️ Sensor térmico KSD9700

Quizás se necesite alargar el cableado de los KSD9700.  
Recomiendo que el de 50 ℃ esté pegado a la batería con cinta térmica.  
Protege y aísla la batería del resto de los componentes.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/0.jpg").default} alt="Imagen Sensor KSD9700 sobre batería" width="300" />
</div>

---

## 🧪 Prueba de funcionamiento

Una vez tengamos terminado el trabajo de soldadura y conectados los componentes necesarios como batería e interruptor, colocamos una antena a la Faketec antes de nada y hacemos la prueba de funcionamiento.

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/17.jpg").default} alt="Imagen Prueba Funcionamiento" width="300" />
</div>

---

## ⚠️ Recomendaciones adicionales

Para no provocar cortocircuitos, a la batería le he puesto un conector hembra.  

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/7.jpg").default} alt="Imagen Prueba Funcionamiento" width="300" />
</div>

En la medida de lo posible, montar conectores hembra donde tengamos voltaje, como en la placa solar.

En mi caso, como voy haciendo pruebas con los componentes, he soldado un conector hembra de 4 pines para el canal I2C de la Faketec y 4 pines macho en la PCB MESC.  

<div style={{ textAlign: "center" }}>
  <img src={require("../../static/img/guias-diy/mesc/11.jpg").default} alt="Imagen Prueba Funcionamiento" width="300" />
</div>

Puedes soldar directamente la Faketec a la PCB usando un conector macho y ahorrarte los separadores de nylon de métrica 2.

---

## 🔮 Futuras versiones

Con esta MESC Ver. 3.1 solo cableamos la batería, la placa solar y el interruptor de encendido.

En la versión 4, que no hará falta la PCB Faketec, tendrá:

- Un Attiny 13 o 85 para funcionar como un "watchdog" y realizar un RESET si es necesario  
- Algún MOSFET para controlar remotamente algún dispositivo externo  
- Un diseño de PCB lo más reducido posible

---

## 📢 Comunidad

Guía elaborada por Miguel Ángel.

Comentarios y aportaciones con buenas ideas me podéis encontrar en los canales de Telegram:

- [Meshtastic en español](https://t.me/meshtastic_esp)  
- [Meshtastic Cataluña](https://t.me/MeshtasticGirona)

- Adaptación a web: [emylio](https://telegram.me/sremylio)

