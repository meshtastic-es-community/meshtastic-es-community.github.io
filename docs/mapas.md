---
sidebar_position: 6
---

# Mapa de Nodos

# 🗺️ Mapas Meshtastic España

Aquí encontrarás enlaces útiles para visualizar la red y herramientas de la comunidad:

---

## 🌐 Mapa principal

🔗 https://mapa.meshtastic.es

Visualiza todos los nodos activos, su ubicación aproximada y su alcance. Ideal para comprobar la cobertura de la red Meshtastic en tiempo real.

---

## 🧠 Meshview

🔗 https://meshview.meshtastic.es

Visualización técnica y avanzada de las conexiones de malla entre nodos. Muy útil para analizar el rendimiento y el enrutamiento de paquetes.

---

## 📡 Malla (nodos activos y telemetría)

🔗 https://malla.meshtastic.es

Panel con información detallada sobre los nodos conectados: ubicación, batería, temperatura, velocidad del viento, y mucho más.

Desarrollado por [Alejandro Martínez](https://github.com/zenitraM) para la comunidad Meshtastic España.

---

## 📊 Status

🔗 [status.meshtastic.es](https://status.meshtastic.es/status/servicios/)

Estado en tiempo real de los servicios comunitarios (mapa, meshview, malla, backend, etc.)

---

## 🛠️ ¿Tienes un nodo y quieres que aparezca?

Estos son los pasos a seguir:

1. **Configura la posición**. En caso de nodos estáticos, puedes configurar una posición fija. No te olvides de echarle un vistazo a las [buenas prácticas de intervalos de posición](buenas-practicas.md#posición).
2. **Comparte la ubicación**. En la configuración del canal principal (LongFast, MediumSlow...) activa la posición y configura la precisión al gusto.
3. **Permite enviar datos a MQTT**. En la configuración de LoRa, activa _Ok to MQTT_ para poder enviar datos al servidor.
4. Dependiendo de qué nodo tengas:
    - En caso de nodos con Internet y conectados al servidor MQTT, **habilita _map reporting_** en la configuración de MQTT, al final del todo.
    - Si no, no te preocupes. Cuando otro nodo (con Internet y conectado a MQTT) escuche tu posición, la enviará al servidor.

Tal vez tengas que esperar unas horas hasta que el nodo envíe su posición. Paciencia 🧘

---

## 🇪🇸 Comunidad Meshtastic España

Gracias por formar parte de la red. ¡Juntos mejoramos la cobertura y la resiliencia de las comunicaciones libres!
