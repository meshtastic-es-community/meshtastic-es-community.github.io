---
sidebar_position: 4
---

# Buenas prácticas

En este artículo te damos algunos consejos para que entre todos mantengamos la red funcionando a pleno rendimiento. Como es una tecnología descentralizada, es responsabilidad de todos hacer bien las cosas.

Hay unos aspectos clave en cuanto a la red que es importante destacar, para que entiendas estas buenas prácticas:

- Un nodo **NO** puede enviar y recibir mensajes a la vez. Si está oyendo, no está hablando, y viceversa.
- Un nodo sólo puede recibir **UN** mensaje a la vez. Como la vida misma, si varios hablan a la vez, no te enteras de nada.
- Si un nodo detecta a otro nodo emitiendo, este **NO** emitirá mensajes (para evitar colisiones). Esperará a que la red esté libre.

## Cantidad de saltos máxima

Para evitar saturar la malla, es importante **no sobrepasar** el número de saltos máximo recomendado.
Este ajuste viene en **3 saltos** por defecto, que es más que suficiente según la [documentación oficial](https://meshtastic.org/docs/configuration/tips/#hop-count). Dejarlo en **3** es ideal.
:::note
Con 3 o 4 hops se llega bien a todas las partes de la malla.
:::

Si **realmente** necesitas subirlos, este ajuste se encuentra en `Configuración -> Radio -> LoRa -> Hop limit`

### Los saltos MÁXIMOS que recomendamos son:

- 4 - Para nodos bien conectados (CLIENT en exterior)
- 5 - **Solamente** si estamos en los extremos de la malla o para un nodo CLIENT_MUTE en interior.

:::info
Los mensajes se moverán de forma mucho más ágil si entre todos usamos solamente los hops mínimos necesarios. Cuantos más hops, los mensajes dan más vueltas, con caminos redundantes y saturando la malla innecesariamente.
:::
:::warning
Muchos usuarios creen erróneamente que poner 7 hops (el más alto) es mejor, pero es totalmente contraproducente para todos. Vienen configurados 3 de fábrica por algo.
:::

## Utilizar el rol adecuado

Antes de decidir qué rol tendrá tu nodo, es importante que entiendas los mismos. Nada como la [documentación oficial](https://meshtastic.org/docs/configuration/radio/device/#roles) y esta [entrada del blog](https://meshtastic.org/blog/choosing-the-right-device-role/) para ello. En líneas generales, esta es nuestra recomendación:

**CLIENT_MUTE** para la mayoría de nodos. Permite enviar y recibir mensajes, sin reenviar los mensajes de otros (y sin saturar la malla). Ideal para nodos personales, en movimiento, que están en interiores, o que no tienen buena conexión con otros nodos.

**CLIENT** para nodos exteriores, con buena ubicación (tipo una azotea o una terraza despejada) que ayudan a una parte de la malla, reenviando los mensajes de otros. Tiene conexión directa con varios nodos.

**ROUTER** para nodos ubicados en zonas muy estratégicas. Este rol requiere planificación y coordinación con otros miembros de la malla. No lo utilices a lo loco.

Con esos roles es más que suficiente. Obviamente puedes usar otros, pero no los recomendamos si no lo tienes claro, ya que puede ser contraproducente para todos (tanto para ti como para el resto de la malla).

:::tip
Esto es una red colaborativa. No hace falta que todos aportemos. De verdad, no te sientas mal por tener únicamente nodos CLIENT_MUTE y no "ayudar" a expandir la malla. Ya estás ayundando al no generar más tráfico reenviando mensajes de otros. Redes como Madrid o Cataluña ya están muy bien cubiertas y probablemente ya puedas comunicarte con otros nodos sin problemas.
:::

:::note
Los roles no son definitivos, se pueden cambiar en cualquier momento. Quizás un día tu nodo CLIENT_MUTE se convierte en CLIENT porque te lo llevas a una azotea o empiezas a tener buenas conexiones.
:::

<details>
<summary>Ejemplos de roles incorrectos</summary>

Un nodo REPEATER viene a ser lo mismo que un ROUTER, pero no aparece en la lista de nodos. Va oculto por la vida. Esto es una malla colaborativa, no es necesario estar en la sombra.

Asignar a un nodo CLIENT cuando no tiene buenas conexiones con otros nodos. Lo único que consigues es entorpecer a los pocos nodos que te oigan. Por ejemplo un nodo CLIENT bien ubicado en una azotea, con visión y conexión directa a un ROUTER, pero que no sirve a otros nodos. Este nodo, reenviando los mensajes que reciba del ROUTER, hace que ese ROUTER no escuche otros mensajes y no pueda enviar mensajes.

Un ROUTER en el tejado de casa (o en ubicaciones aún peores).

</details>

## Intervalos de broadcast automáticos

De fábrica, Meshtastic envía frecuentemente mucha información sobre tu nodo. Esto incluye su identificación, la posición, los niveles de batería...

En la mayoría de casos, no es necesario actualizar tan frecuentemente esta información porque no cambia o no es importante. **En las mallas grandes, es más del 90% del tráfico total.** Por este motivo, proponemos aumentar los intervalos en los que se transmiten estos datos, para no enviarlos tan a menudo.
:::note
Los intervalos propuestos son **MÍNIMOS**, puedes aumentarlos todavía más para mejorar el rendimiento en tu zona.
:::

### Métricas del dispositivo

Son los datos de "salud" del nodo. Por ejemplo: nivel de batería, voltaje, % de utilización del canal...

Se puede reducir temporalmente si sabes lo que estás haciendo, para evaluar el funcionamiento de un nodo nuevo por ejemplo. ¡No te olvides de volver a subirlo!

El valor recomendado es `43200` segundos, es decir 12h.

Configurable en `Configuracion -> Telemetry -> Device metrics update interval -> 43200`

### Identificación del nodo

Se envía en más detalle los datos identificativos del nodo: nombre, claves, ID... Se puede solicitar manualmente al nodo siempre que se quiera.

Aunque todos los mensajes llevan tu identificador, estos mensajes complementan la información del "perfil" de tu nodo. Estos datos son fijos y no cambian nunca, a no ser que los cambies tú. Sirve para que te identifiquen correctamente **la primera vez.**

El valor recomendado es `86400` segundos, es decir 24h.

Configurable en `Configuracion -> Device -> NodeInfo broadcast interval -> 86400`

### Posición

En nodos fijos no cambia nunca por lo que no tiene sentido enviarla a menudo. Además, se puede solicitar manualmente al nodo siempre que se quiera.

En nodos móviles o con GPS, puede interesar enviarla más frecuente pero sin abusar de ello porque provoca la mayoría de la congestión en la malla. Es recomendable deshabilitar el ajuste `Smart Position`.

**Para nodos fijos:** el valor recomendado es `86400` segundos, es decir 24h.

**Para nodos móviles:** no es aconsejable bajar de `1800` segundos, es decir 30 minutos.

Configurable en `Configuracion -> Position -> Position broadcast interval -> 86400`

También recomendamos desactivar casi todos los `Position flags` para dejar los mínimos necesarios y así reducir la cantidad de datos que emitimos. El imprescindible es `DOP`. El resto son información adicional que no es necesaria como tal.

Configurable en `Configuracion -> Position -> Position flags`

### Métricas del entorno

Meshtastic permite enviar información de sensores conectados a los nodos. De temperatura, presión, humedad...

Es información "chula" pero poco importante para la malla. La mayoría de nodos ni siquiera tienen estos sensores.

Recomendamos desactivarlo o poner un valor muy alto.

Configurable en `Configuracion -> Telemetry -> Environment metrics`
