---
id: guia-masn
title: MASN - un nodo solar Meshtastic que cualquiera puede montar
slug: /guias-diy/guia-masn
description: Guía completa para montar un nodo solar Meshtastic con la placa MASN, paso a paso y con todos los materiales.
tags: [meshtastic, solar, sensores, diy, bricolabs]
---

# MASN: un nodo solar Meshtastic que cualquiera puede montar ⚡️🔧

Quien se acerca a Meshtastic suele encontrarse con lo mismo: **tutoriales llenos de cables**, **soldaduras minúsculas** y **placas pensadas para gente con experiencia**. Eso frena a cualquiera que quiera empezar, especialmente si el objetivo es tener un **nodo solar estable en exteriores**.

En A Coruña, varios entusiastas empezamos a reunirnos en [**Bricolabs**](https://www.bricolabs.cc) para montar nodos con diseños económicos como **fakeTek** y los vídeos de [**EA3GRN**](https://www.youtube.com/@ea3grn). Aunque fue divertido, quedó claro que el montaje clásico era **demasiado complejo para principiantes**.

Así nació **MASN** (_Meshtastic Autonomous Solar Node_): una **PCB diseñada para que cualquiera pueda montar un nodo solar autónomo en menos de una hora**, sin microscopios ni líos de cables.
La idea no es solo que funcione, sino que **aprendas durante el proceso**. Montarlo tú mismo te conecta con el ecosistema Meshtastic y te permite **aprovecharlo al máximo**.

---

## 🧩 Qué resuelve MASN

MASN está pensado para simplificar un proceso que, en su versión clásica, resulta enredado y poco práctico. Los montajes con protoboard acumulan cables, conexiones poco fiables y una estética que invita al error. La PCB MASN resuelve esto integrando todo en un único diseño compacto, con conectores bien ubicados, soporte físico y compatibilidad directa con módulos comunes. Además, acepta módulos estándar que encajan directamente e incorpora un cargador solar MPPT y telemetría como funciones integradas.

---

## Mejor que lo veas y puedas comparar

| Antes                                                        | Después                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/guias-diy/masn/masn-protoboard-1024x621.webp)       | ![](/img/guias-diy/masn/masn-finished-1024x621.webp)    |
| Prototipo en protoboard con muchos cables y módulos sueltos. | Montaje con la PCB MASN, con todo integrado y ordenado. |

---

## Versiones disponibles

Existen dos versiones de la PCB MASN, cada una diseñada para un módulo de radio LoRa diferente. Esto te permite elegir según disponibilidad o preferencia:

|                            MASN Core1262                             |                            MASN HT-RA62                            |
| :------------------------------------------------------------------: | :----------------------------------------------------------------: |
| ![MASN versión Core1262](/img/guias-diy/masn/MASN-PCB-Core1262.webp) | ![MASN versión HT-RA62](/img/guias-diy/masn/MASN-PCB-HT-RA62.webp) |
|           Compatible con el módulo **Waveshare Core1262**            |            Compatible con el módulo **Heltec HT-RA62**             |

Ambas versiones comparten el mismo diseño base y funcionalidad, solo cambia el footprint del módulo LoRa.

---

## Lista de materiales

Para consultar la lista completa de componentes, caja, accesorios y enlaces de compra actualizados, visita el artículo original:

👉 **[Ver lista de materiales](https://danielpcostas.dev/es/masn-nodo-solar-meshtastic-que-cualquiera-puede-montar/)**

---

## Pedir PCBs MASN

Puedes pedir las placas MASN directamente en [**jlcpcb.com**](https://jlcpcb.com).
Solo necesitas subir los archivos Gerber (disponibles en la lista de materiales), elegir color, cantidad y listo.

Las dimensiones finales publicadas del diseño MASN son **63,4 mm × 96,9 mm** y los agujeros de fijación de **56,7 mm × 90 mm**.

Vídeo explicativo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/zwVpX5ZbvOE?si=QI93EbNkJGauH1FS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Advertencias importantes

- Nunca enciendas el nodo sin antena conectada.
- No alimentes por USB y solar/batería a la vez.
- Evita que el conector de antena toque el pin RF.
- El cargador MPPT seleccionado no incluye diodo de bloqueo, lo que puede provocar una fuga nocturna de aproximadamente 2 mA (~24 mAh/día).
- En Europa, al usar una antena de ganancia alta, hay que respetar la normativa ETSI EN 300-220 respecto a la potencia (EIRP).

---

## Instalación del firmware

Antes de soldar nada, conviene asegurarse de que el microcontrolador funciona correctamente. Este paso es rápido y evita problemas más adelante.

### Comprobar o actualizar el bootloader

1. Conecta la placa por USB.
2. Haz dos toques rápidos entre los pines **RESET** y **GND** (usa pinzas metálicas).
3. El ordenador montará una unidad USB llamada `NICENANO`.
4. Abre el archivo `INFO_UF2.TXT` y verifica la versión.
5. Si es inferior a 0.8, copia dentro el archivo `update-nice_nano_bootloader-0.9.2_nosd.uf2`.
6. La placa se reiniciará sola.
7. Si no trae bootloader, sigue [esta guía](https://github.com/gargomoma/fakeTec_pcb?tab=readme-ov-file#my-promicro-is-dead-what-can-i-do).

Asegúrate de que la versión del bootloader es 0.8 o superior antes de instalar el firmware.

### Instalar el firmware Meshtastic

1. Entra en modo DFU (ver pasos arriba).
2. Abre [**flasher.meshtastic.org**](https://flasher.meshtastic.org).
3. Selecciona el dispositivo **NRF52 Pro-micro DIY**.
4. Escoge la versión estable (o beta si deseas probar novedades).
5. Descarga el archivo `.uf2` y arrástralo a la unidad DFU.
6. El microcontrolador se reiniciará automáticamente con el firmware de Meshtastic listo para usar.

También puedes habilitar la función de administración remota (Remote Admin) para gestionar parámetros desde otro nodo en la malla.

---

## Construcción paso a paso

El montaje físico es sencillo si sigues un orden. La clave: **preparar los módulos**, **poblar la PCB** y **conectar antena y alimentación**.

### Preparar los módulos

- Suelda los pines a cada módulo: sensor BMP280, cargador MPPT, INA3221, microcontrolador y LoRa.
- En el INA3221, suelda el puente en SDA como en la referencia.

### Poblar la PCB

- Coloca los módulos. Puedes usar zócalos hembra o soldarlos directamente.
- Añade botones, interruptores y conectores en sus posiciones.

### Preparar el panel solar

- Retira la electrónica de fábrica (LEDs, reguladores) si es necesario.
- Suelda cables en los terminales, identificando positivo y negativo.
- Usa colores distintos si puedes.

### Conectar antena y alimentación

:::danger
⚠️ **Nunca enciendas el nodo sin antena conectada.**
Puedes dañar el módulo LoRa.
:::

1. Conecta la antena antes de dar energía.
2. Conecta la batería.
3. Conecta el panel solar (preferiblemente tapado).
4. Para reducir la transferencia de calor a la batería, considera aislarla del panel o la pared interior expuesta al sol.

---

## Configuración Meshtastic

Una vez montado, toca configurar el firmware Meshtastic:

1. Conéctate por Bluetooth (PIN: `123456`).
2. Ajusta la región: `EU 868`.
3. Cambia el PIN por seguridad.
4. Asigna un nombre corto al nodo (ej. `CHR3`).
5. Activa la telemetría: `Power` y `Environment`.
6. Desde el menú de administración puedes añadir claves o permisos para habilitar la administración remota vía malla.

---

## Aviso de atribución

> Este artículo ha sido extraído y adaptado desde [danielpcostas.dev](https://danielpcostas.dev/es/masn-nodo-solar-meshtastic-que-cualquiera-puede-montar/), originalmente creado por [@danielpcostas](https://t.me/danielpcostas).
> Adaptación web realizada por [@sremylio](https://t.me/sremylio) para la comunidad Meshtastic España.

> Para tener información más detallada consulta el [artículo original.](https://danielpcostas.dev/es/masn-nodo-solar-meshtastic-que-cualquiera-puede-montar/)
