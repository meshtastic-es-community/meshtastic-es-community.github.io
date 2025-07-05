---
sidebar_position: 3
---

# Buenas prácticas

En este artículo te damos algunos consejos para que entre todos mantengamos la red funcionando a pleno rendimiento. Como es una tecnología descentralizada, es responsabilidad de todos hacer bien las cosas.

## Cantidad de saltos máxima

Para evitar saturar la malla, es importante **no sobrepasar** el número de saltos máximo recomendado.
Este ajuste viene en **3 saltos** por defecto, que es más que suficiente según la [documentación oficial](https://meshtastic.org/docs/configuration/tips/#hop-count). Dejarlo en **3** es ideal.
:::note
Con 3 o 4 hops se llega bien a todas las partes de la malla.
:::

Si **realmente** necesitas subirlos, este ajuste se encuentra en ```Configuración -> Radio -> LoRa -> Hop limit```

### Los saltos MÁXIMOS que recomendamos son:
- 4 - Para nodos bien conectados (CLIENT en exterior)
- 5 - **Solamente** si estamos en los extremos de la malla o para un nodo CLIENT_MUTE en interior.

:::info
Los mensajes se moverán de forma mucho más ágil si entre todos usamos solamente los hops mínimos necesarios. Cuantos más hops, los mensajes dan más vueltas, con caminos redundantes y saturando la malla innecesariamente.
:::
:::warning
Muchos usuarios creen erróneamente que poner 7 hops (el más alto) es mejor, pero es totalmente contraproducente para todos. Vienen configurados 3 de fábrica por algo.
:::

## Intervalos de broadcast automáticos

De fábrica, Meshtastic envía frecuentemente mucha información sobre tu nodo. Esto incluye su identificación, la posición, los niveles de batería...

En la mayoría de casos, no es necesario actualizar tan frecuentemente esta información porque no cambia o no es importante. **En las mallas grandes, es más del 90% del tráfico total.** Por este motivo, proponemos aumentar los intervalos en los que se transmiten estos datos, para no enviarlos tan a menudo.
:::note
Los intervalos propuestos son **MÍNIMOS**, puedes aumentarlos todavía más para mejorar el rendimiento en tu zona.
:::

### Métricas del dispositivo

Son los datos de "salud" del nodo. Por ejemplo: nivel de batería, voltaje, % de utilización del canal... Es la información más interesante de esta lista y además va cambiando con el tiempo, por lo que interesa ver sus actualizaciones.

El valor recomendado es ```3600``` segundos, es decir 1h.

Configurable en ```Configuracion -> Telemetry -> Device metrics update interval -> 3600 (1h)```

### Identificación del nodo
Se envían en más detalle los datos identificativos del nodo: nombre, claves, ID...

Aunque todos los mensajes llevan tu identificador, estos mensajes complementan la información del "perfil" de tu nodo. Estos datos son fijos y no cambian nunca, a no ser que los cambies tú. Sirve para que te descubran e identifiquen correctamente **por primera vez.**

El valor recomendado es ```10800``` segundos, es decir 3h.

Configurable en ```Configuracion -> Device -> NodeInfo broadcast interval -> 10800 (3h)```

### Posición
La información de ubicación del nodo. En nodos fijos no cambia nunca por lo que no tiene sentido enviarla a menudo, además es la información menos urgente.

En nodos móviles o con GPS, puede interesar enviarla mas frecuente pero sin abusar de ello porque provoca la mayoría de la congestión en la malla. Es recomendable deshabilitar el ajuste ```Smart Position```.

**Para nodos fijos:** el valor recomendado es ```10800``` segundos, es decir 3h.

**Para nodos móviles:** no es aconsejable bajar de ```1800``` segundos, es decir 30 minutos.

Configurable en ```Configuracion -> Position -> Position broadcast interval -> 10800 (3h)```

### Métricas del entorno
Meshtastic permite enviar información de sensores conectados a los nodos. De temperatura, presión, humedad...

Es información "chula" pero poco importante para la malla. La mayoría de nodos ni siquiera tienen estos sensores.

Recomendamos desactivarlo o poner un valor muy alto.

Configurable en ```Configuracion -> Telemetry -> Environment metrics```

