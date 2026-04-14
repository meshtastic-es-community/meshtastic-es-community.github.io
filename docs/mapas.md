---
sidebar_label: "Mapas de Nodos"
sidebar_position: 8
---

# 🗺️ Mapas Meshtastic España

Aquí encontrarás enlaces útiles para visualizar la red y herramientas de la comunidad:

---

## 🌐 Mapa principal {#mapa-principal}

🔗 Mapa completo disponible [aqui](https://mapa.meshtastic.es).

<iframe
  src="https://mapa.meshtastic.es"
  width="100%"
  height="500"
  style={{border: 'none', borderRadius: '8px'}}
  loading="lazy"
  title="Mapa interactivo de nodos Meshtastic España"
/>

---

## 🧠 Meshview {#meshview}

🔗 https://meshview.meshtastic.es

Visualización técnica y avanzada de las conexiones de malla entre nodos. Muy útil para analizar el rendimiento y el enrutamiento de paquetes.

---

## 📡 Malla (nodos activos y telemetría) {#malla}

🔗 https://malla.meshtastic.es

Panel con información detallada sobre los nodos conectados: ubicación, batería, temperatura, velocidad del viento, y mucho más.

Desarrollado por [Alejandro Martínez](https://github.com/zenitraM) para la comunidad Meshtastic España.

---

## 📊 Status {#status}

🔗 [status.meshtastic.es](https://status.meshtastic.es/status/servicios/)

Estado en tiempo real de los servicios comunitarios (mapa, meshview, malla, backend, etc.)

---

## 🚀 Distribución de Presets por Provincia {#mapa-presets}

Aquí puedes ver la cobertura de los distintos [presets](https://meshtastic.org/docs/configuration/radio/lora/#use-preset) a lo largo de las provincias españolas.

import MapaEspana from '@site/src/components/MapaRegiones/MapaEspana';

<MapaEspana />

<p>
**Nota:** La información de este mapa se basa en el preset más común en cada provincia según su uso actual, es recomendable revisar qué preset tienen los nodos alrededor de tu zona, para ello puedes usar el [mapa de Meshview](https://meshview.meshtastic.es/map).
</p>

---

## 🛠️ ¿Tienes un nodo y quieres que aparezca? {#como-aparecer-en-mapas}

Estos son los pasos a seguir:

1. **Configura la posición**. En caso de nodos estáticos, puedes configurar una posición fija. No te olvides de echarle un vistazo a las [buenas prácticas de intervalos de posición](buenas-practicas.md#posición).
2. **Comparte la ubicación**. En la configuración del canal principal (MediumFast, LongFast...) activa la posición y configura la precisión al gusto.
3. **Permite enviar datos a MQTT**. En la configuración de LoRa, activa _Ok to MQTT_ para poder enviar datos al servidor.
4. Dependiendo de qué nodo tengas:
    - En caso de nodos con Internet y conectados al servidor MQTT, **habilita _map reporting_** en la configuración de MQTT, al final del todo.
    - Si no, no te preocupes. Cuando otro nodo (con Internet y conectado a MQTT) escuche tu posición, la enviará al servidor.

No es necesario estar conectado a Internet, y de hecho no lo recomendamos. Para que tu nodo aparezca en el mapa, basta con que otro nodo conectado escuche tu señal por RF y suba tu posición automáticamente. Sin embargo, si quieres conectarte tú mismo y enviar los datos de otros nodos, esta es la configuración que debes usar:

 **Datos de conexión MQTT:**
   

| **Parámetro** | **Valor** |
|---------------------|---------------------------------------------------------|
| Address             | mqtt.meshtastic.es                                      |
| Username            | meshdev                                                 |
| Password            | large4cats                                              |
| Encryption          | ✅                                                      |
| JSON output         | ❌                                                      |
| TLS                 | ❌                                                      |
| Root topic          | msh/EU_868                                              |
| Proxy to client     | ✅ Si tu nodo usa Bluetooth<br />❌ Si tu nodo usa WiFi |
| Map reporting       | ✅                                                      |
| Precise location    | A elección                                              |


Tal vez tengas que esperar unas horas hasta que el nodo envíe su posición. Paciencia 🧘

---

## 🇪🇸 Comunidad Meshtastic España {#comunidad-meshtastic-españa}

Gracias por formar parte de la red. ¡Juntos mejoramos la cobertura y la resiliencia de las comunicaciones libres!
