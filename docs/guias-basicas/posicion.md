---
sidebar_position: 5
description: Configurar la posición de un nodo.
---

# Posición del nodo

Igual de importante que el nombre del nodo es su posición. Aquí vamos a diferenciar entre nodos fijos y nodos móviles.

- Pulsa el botón :mdi-gear: _Radio configuration_.
- Entra en :mdi-map-marker: _Position_.

Configura la posición del nodo según su tipo y uso.

## Nodos fijos 🗼 {#nodos-fijos}

Si el nodo es fijo, por ejemplo un nodo en la azotea o en el campo, que no se va a mover, puedes configurar la posición de forma manual.

| Campo                         | Valor                                               |
|-------------------------------|-----------------------------------------------------|
| _Position broadcast interval_ | **43200** (12 horas)                                |
| _Smart position enabled_      | **NO** (no se mueve, no es necesario)               |
| _Use fixed position_          | **SI** (para introducir la posición manualmente)    |
| _Latitude_                    | Latitud del nodo, por ejemplo **40.4168** (Madrid)  |
| _Longitude_                   | Longitud del nodo, por ejemplo **-3.7038** (Madrid) |
| _Altitude_                    | Altitud del nodo, por ejemplo **667** (Madrid)      |

Ya que la posición no cambia, no es necesario que se envíe con frecuencia.
Pero hay que enviarlo de vez en cuando para que los nodos nuevos reciban esa información.

## Nodos móviles 📟 {#nodos-moviles}

### Uso del GPS del móvil 📱 {#uso-del-gps-del-movil}

En el listado de dispositivos para conectar con uno, hay una opción al final llamada _Provide phone location to mesh_.
Márcala. Esto comparte la ubicación del móvil con el nodo.
El resto de configuración es prácticamente igual que para [Nodos con GPS integrado](#nodos-con-gps-integrado) (justo aquí abajo).

### Nodos con GPS integrado 🛰️ {#nodos-con-gps-integrado}

| Campo                              | Valor                                                                |
|------------------------------------|----------------------------------------------------------------------|
| _Position broadcast interval_      | **1800** (30 minutos) o más                                          |
| _Smart position enabled_           | **SI** (para enviar la posición si nos movemos)                      |
| _Smart broadcast minimum distance_ | **500** (distancia mínima para enviar una nueva posición)            |
| _Smart broadcast minimum interval_ | Igual que _Position broadcast interval_ (1800 o más)                 |
| _GPS mode_                         | **ENABLED** si el nodo tiene GPS<br/>**NOT_PRESENT** si no tiene GPS |
| _GPS update interval_              | **120** (2 minutos) o más, al gusto                                  |
