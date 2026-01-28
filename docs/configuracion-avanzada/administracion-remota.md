---
title: Administración Remota
slug: administracion-remota
description: Cambia la configuración de otros nodos sin estar cerca, por RF.
---

# Administración Remota

La administración remota se utiliza para poder cambiar parámetros y configuración de un nodo sin tener que estar
conectado a él (por Bluetooth, WiFi o serial). Esto se consigue enviando comandos de administración desde otro nodo a
través de RF, similar a un mensaje privado. Te permite administrar nodos que podrían no tener un fácil acceso, por
ejemplo nodos autónomos en la montaña.

:::info

Esta guía es para nodos con versión de _firmware_ 2.5 o superior. En versiones anteriores, consulta
la [documentación oficial](https://meshtastic.org/docs/configuration/remote-admin/).

:::

Puedes ampliar información sobre administración remota en
la [documentación oficial](https://meshtastic.org/docs/configuration/remote-admin/).

## Configurar tu nodo para administrar a otros nodos :mdi-gear: {#configuracion}

Como hemos dicho anteriormente, necesitas al menos dos nodos: el tuyo personal, el que llevas encima, y otro que quieres
administrar.

En tu nodo personal :mdi-user-outline::

- Pulsa el botón :mdi-gear: _Radio configuration_.
- Entra en :mdi-administrator: _Security_.
- Copia tu clave pública o _public key_.

En el nodo remoto :mdi-mountain-outline::

- Pulsa el botón :mdi-gear: _Radio configuration_.
- Entra en :mdi-administrator: _Security_.
- Pega / Escribe la clave pública del nodo personal en una de las tres claves _Admin key_.
- Guarda los cambios.

:::tip

Un nodo puede tener como mucho 3 claves de administración remota, es decir, 3 nodos que puedan administrarle. Esto es
así a nivel de _firmware_, no se puede cambiar.

:::

## Enviar comandos de configuración de forma remota :mdi-remote: {#enviar-comandos}

El primer paso es que ambos nodos se conozcan y hayan intercambiado un _NodeInfo_ con sus respectivas claves públicas.
Si no se conocen, porque es un nodo nuevo o has borrado la base de datos de nodos, espera a que intercambien dicha
información. También puedes "forzarlo":

- Ve a la :mdi-user-multiple-outline: lista de nodos.
- Pulsa el nombre corto del otro nodo para ver los detalles, por ejemplo &nbsp;<span class="badge badge--primary">
  XYZ0</span>
- En la sección de _Actions_, pulsa el botón :mdi-user: Exchange user info.

Una vez que se conozcan, ya puedes enviar comandos de administración mediante RF.

- Ve a la :mdi-user-multiple-outline: lista de nodos.
- Pulsa el nombre corto del otro nodo para ver los detalles, por ejemplo &nbsp;<span class="badge badge--primary">
  ABCD</span>
- Baja hasta el final, sección _Administration_.
- Si tienes el botón de _Remote Administration_ deshabilitado, prueba a pulsar sobre :mdi-memory: Request Metadata
  <sup>1</sup>.
- Pulsa el botón :mdi-gear: Remote Administration.

Y ya estarás dentro de la configuración del nodo remoto, para cambiar lo que quieras.

:::warning

Hay ciertos cambios que pueden implicar un reinicio del nodo, y por lo tanto no siempre se devuelve un mensaje de
confirmación. A veces tampoco se aplican los cambios. Se aconseja volver a entrar a la misma configuración para ver si
tiene el nuevo valor.

:::

:::danger

Ciertas acciones pueden hacerte perder el acceso remoto al nodo, de forma temporal o permanente. Ten cuidado con lo que
cambias. Algunos ejemplos son:

- Cambiar el _preset_. Deberás cambiar también el _preset_ en tu nodo personal para volver a comunicarte con el nodo
  remoto.
- Eliminar la clave pública del nodo personal en la lista de _Admin keys_. Obviamente.
- Apagar el nodo remoto.
- Borrar la base de datos de nodos. Deberás esperar a que los nodos vuelvan a conocerse.

:::

---

1. Sinceramente no sé qué hace esto, pero hasta que no recibe los metadatos, a mí no se me habilita el botón 🤷
