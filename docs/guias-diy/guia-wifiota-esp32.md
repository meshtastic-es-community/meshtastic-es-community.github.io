---
title: OTA WiFi en nodos ESP32
description: Guía para habilitar y usar OTA vía WiFi en nodos ESP32
slug: guia-wifiota-esp32
tags: [ESP32, WiFi, OTA]
---

# Guía para habilitar WiFi OTA en nodos ESP32

Esta guía explica cómo preparar tu nodo ESP32 (incluyendo variantes como S3, C3, etc.) para poder actualizarlo mediante WiFi.

Solo necesitas conocimientos básicos sobre herramientas como PlatformIO, esptool, etc.

Está basada en [esta guía en inglés](https://blog.antsu.net/guide-how-to-enable-wi-fi-ota-updates-on-esp32-based-meshtastic-boards/), tras haber probado el método en mis propios nodos.

Lo primero que debes entender es que los nodos ESP32 se flashean inicialmente con un [firmware OTA BLE](https://github.com/meshtastic/firmware-ota).
Al finalizar esta guía, habrás reemplazado ese firmware por uno WiFi OTA, ya que un nodo configurado para usar WiFi no puede utilizar OTA BLE.

Este firmware BLE OTA suele encontrarse en los archivos `.zip` de las versiones de firmware de Meshtastic, con nombres como `bleota.bin`, `bleota-s3.bin` o `bleota-c3.bin`.
Siempre podrás volver a él descargando el binario correspondiente y siguiendo la sección [**Flasheando el firmware WiFi OTA**](#2-flasheando-el-firmware-wifi-ota) de esta misma guía.

:::warning
Haz un backup de la configuración del nodo antes de empezar. Esto evitará perder tus ajustes y claves si algo sale mal.
:::

## 1. Compilando el firmware WiFi OTA

El firmware WiFi OTA se encuentra en el repositorio [meshtastic/firmware-ota-wifi](https://github.com/meshtastic/firmware-ota-wifi).

Para compilarlo, recomiendo usar Docker para mantener tu sistema limpio, aunque puedes omitir el punto 2 si prefieres hacerlo localmente.

```sh
# 1. Clonamos el repositorio de firmware-ota-wifi
git clone https://github.com/meshtastic/firmware-ota-wifi.git

# 2. Lanzamos un contenedor de docker para compilar el firmware (opcional, puedes hacerlo en tu sistema)
docker run --rm -it -v ./firmware-ota-wifi/:/firmware-ota-wifi python:3.13 bash

# 3. Instalamos PlatformIO
curl -fsSL -o get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py && python3 get-platformio.py

# 4. Activamos el entorno virtual de PlatformIO
source $HOME/.platformio/penv/bin/activate

# 5. Accedemos a la carpeta del firmware
cd firmware-ota-wifi

# 6. Compilamos el firmware
pio run -e TARGET # Reemplaza TARGET por el tipo de hardware de tu nodo: esp32, esp32s3, esp32c3, etc.
```

Al finalizar deberías ver un mensaje **SUCCESS** en verde. El binario compilado se encontrará en `firmware-ota-wifi/.pio/build/TARGET/firmware.bin`.

:::info
**¿No quieres compilar?** Si confías en mí, puedes descargar mi compilación para `esp32`, `esp32s3` y `esp32c3` desde [**este enlace**](https://t.me/meshtastic_esp/20616/166275) en el grupo de Telegram.
:::

## 2. Flasheando el firmware WiFi OTA

### Averiguando el offset de la partición OTA

El offset de la partición `ota_1` depende del tamaño de la memoria flash del nodo.
A continuación se explica cómo obtener el valor correcto.

Primero, localiza tu hardware en la carpeta [`variants`](https://github.com/meshtastic/firmware/tree/develop/variants) del firmware de Meshtastic y abre su archivo `platformio.ini`.

Ejemplos:
- Heltec V4: [variants/esp32s3/heltec_v4/platformio.ini](https://github.com/meshtastic/firmware/blob/develop/variants/esp32s3/heltec_v4/platformio.ini)
- RAK3312: [variants/esp32s3/rak3312/platformio.ini](https://github.com/meshtastic/firmware/blob/develop/variants/esp32s3/rak3312/platformio.ini)

En dicho fichero busca la línea `board_build.partitions`. Si no aparece, significa que utiliza el valor por defecto `partition-table.csv`.

Luego abre el archivo de particiones (`.csv`) y localiza el valor de la columna `offset` correspondiente a la partición `ota_1`.
Si el nombre del archivo empieza por `default`, búscalo en el repositorio de [`arduino-esp32`](https://github.com/espressif/arduino-esp32/tree/master/tools/partitions); en caso contrario, estará en el [repositorio de Meshtastic](https://github.com/meshtastic/firmware/tree/develop).

Si prefieres no buscarlo, aquí tienes los valores más comunes:

| Fichero                   | Offset `ota_1` |
|---------------------------|----------------|
| `partition-table.csv`     | `0x260000`     |
| `partition-table-8MB.csv` | `0x5D0000`     |
| `default_8MB.csv`         | `0x340000`     |
| `default_16MB.csv`        | `0x650000`     |

### Flasheando el firmware

Para flashear el firmware WiFi OTA, descarga [`esptool`](https://github.com/espressif/esptool/releases) y ejecuta el siguiente comando, sustituyendo `OFFSET` y `path/al/firmware.bin` por los valores correctos:

```sh
esptool -b 115200 write-flash OFFSET path/al/firmware.bin
# Ejemplo: nodo esp32s3 con partición default_8MB.csv
esptool -b 115200 write-flash 0x340000 firmware-ota-wifi/.pio/build/esp32s3/firmware.bin
# Ejemplo: nodo esp32s3 con partición partition-table.csv usando mi compilación
esptool -b 115200 write-flash 0x260000 wifiota-s3.bin
```

Una vez flasheado, tu nodo estará listo para recibir actualizaciones OTA vía WiFi.
No será necesario repetir estos pasos a menos que utilices el flasher web de Meshtastic con la opción **Full Erase and Install**.

## 3. Flasheando una actualización del nodo vía WiFi OTA

### Requisitos

- Tener instalado el [CLI de `meshtastic`](https://meshtastic.org/docs/software/python/cli/installation/) o `uvx`.
- Descargar el script `espota.py` desde el repositorio de [`arduino-esp32`](https://github.com/espressif/arduino-esp32/blob/master/tools/espota.py):

  ```sh
  curl -LO https://raw.githubusercontent.com/espressif/arduino-esp32/refs/heads/master/tools/espota.py && chmod +x espota.py
  ```

### Actualizando el nodo vía WiFi OTA

Descarga una versión del firmware de Meshtastic desde el [repositorio oficial](https://github.com/meshtastic/firmware/releases) y busca el archivo `firmware-<hardware>-<versión>-update.bin`.

:::warning
Es **imprescindible** usar el archivo que termina en `-update.bin`.
Si es una compilación propia, usa `firmware.bin`, **nunca** `firmware.factory.bin`.
:::

Ahora ya puedes ejecutar los siguientes comandos:

```sh
meshtastic --host <ip-de-tu-nodo> --reboot-ota  # Si usas uvx, añádelo al inicio
# Espera unos 10 segundos (puede tardar algo más en reconectarse a la WiFi)
espota.py -r -i <ip-de-tu-nodo> -f firmware-<hardware>-<versión>-update.bin
```

El script mostrará una barra de progreso en la terminal. Si todo va bien, el nodo se reiniciará automáticamente y quedará actualizado.
