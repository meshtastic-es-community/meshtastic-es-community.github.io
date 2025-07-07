---
sidebar_position: 3
---

# Flashear firmware

Dependiendo de que dispositivo tengas tendrás que seguir los pasos para ESP32 o para NRF52:

## ESP32
:::info
Antes de empezar debes tener los drivers instalados para tu dispositivo: [Enlace](/docs/guias/configuracion-inicial)

:::

# Flashear dispositivo

- Conecta tu dispositivo
- Visita [flasher.meshtastic.org](https://flasher.meshtastic.org) _*requiere navegador Chrome o Edge*_
- Selecciona tu tipo de dispositivo:


 ![Imagen del proceso de flasheo](/flasher1.png)



 - Selecciona la última versión estable:



 ![Imagen del proceso de flasheo](/flasher2.png)


- Pulsa en el botón de Flash y sigue las instrucciones. Si tu dispositivo es un ESP32-S3, puede que necesites apagarlo, luego mantener pulsado el botón BOOT / USR mientras conectas el cable USB.
También puedes probar el método de reinicio a 1200bps para poner el dispositivo en modo adecuado.
- Si es la primera vez que instalas debes pulsar el botón de borrado completo.
- Pulsa el botón de instalar y verás un cuadro donde saldrá el proceso.
- Ya tienes tu dispositivo flasheado y puedas pasar a la [[configuración inicial]](https://meshtastic-es-community.github.io/docs/guias/configuracion-inicial#conectar-y-configurar-el-dispositivo)

:::danger 
Recuerda que no debes encender tu dispositivo sin una antena conectada
:::


## NRF52
:::info
Para estos dispositivos no hace falta instalar drivers. (En caso de Windows)
:::




- Ya tienes tu dispositivo flasheado y puedas pasar a la [[configuración inicial]](https://meshtastic-es-community.github.io/docs/guias/configuracion-inicial#conectar-y-configurar-el-dispositivo)
