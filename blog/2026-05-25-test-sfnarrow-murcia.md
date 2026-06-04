---
slug: sfnarrow-levante-sureste
title: 📡 Levante y Sureste, ¡es vuestro momento! Únete a SFNarrow
authors: []
tags: [Almería, Murcia, Alicante, Valencia, Levante, Configuración, Narrow]
description: >
  La malla de la Zona Centro lleva meses probando SFNarrow con resultados muy positivos.
  Los enlaces ya pasan por Toledo, Ciudad Real y Albacete. Si estás en Almería, Murcia,
  Alicante o Valencia, el hilo ya llega hasta vosotros. Este es el momento de sumarse.
---

La malla "zona centro" de Meshtastic España está probando una nueva configuración llamada **SFNarrow**
con resultados muy prometedores. Los enlaces ya funcionan a lo largo de la cadena
**Toledo → Ciudad Real → Albacete**, y el siguiente paso natural es llegar a Levante y
el Sureste. Si tienes un nodo en **Almería, Murcia, Alicante o Valencia**, este artículo es para ti. 🙌

<!-- truncate -->

---

## 🙋 Para todo el mundo: ¿qué está pasando y por qué debería importarme?

### La red Meshtastic tiene un problema conocido: la banda es libre y se comparte con muchos sistemas

Meshtastic usa radio LoRa, una tecnología que permite que los mensajes "salten" de nodo en nodo sin internet. El problema es que se utiliza una banda libre, que se comparte con otros dispositivos en la misma frecuencia. Esto da inevitablemente a interferencias y choques entre los mensajes.

La configuración que usa la mayoría de la malla española ahora mismo, **MediumFast**, usa un "carril" ancho de radio. Eso está bien porque puede sostener más tráfico, pero cuando hay "obstáculos" (aunque sean estrechos) se para todo.

### SFNarrow es como dividir esa autopista en carriles

En lugar de que todos usen el mismo carril ancho, SFNarrow divide la banda en
**4 carriles estrechos independientes**. Cada nodo usa solo uno de ellos. El resultado:

- 📶 **Llegas más lejos**: un canal estrecho tiene menos probabilidad de que "le toque" un obstáculo. Es decir, menos ruido y la señal llega mejor.
- 🔇 **Menos interferencias**: alarmas, sensores IoT y otros dispositivos de radio ya no te molestan tanto. Podemos ir mas rápido en el mismo carril.
- 🚗 **Caben más coches**: al dividir la banda en 4 slots independientes, sistemas distintos pueden usar slots distintos sin pisarse entre ellos, multiplicando la capacidad total disponible en la banda.

### ¿Y qué tiene que ver Almería, Murcia, Alicante y Valencia con todo esto?

La Zona Centro lleva meses probando SFNarrow con muy buenas sensaciones. Lo importante es que **la cadena ya existe y ya llega hasta vosotros**: la ruta
**Madrid → Toledo → Ciudad Real → Albacete → Murcia → Alicante → Cartagena** está
funcionando en SFNarrow con muy buenos resultados. No estamos hablando de un
experimento en el aire, sino de una malla real que ya cubre vuestro territorio.
Ahora hace falta sumar más nodos para consolidarla y extenderla.

Vuestras zonas tienen además unas condiciones ideales para SFNarrow: menos densidad de
nodos que en las grandes ciudades, terreno abierto o con sierras intermedias donde el
alcance largo marca la diferencia, y mallas todavía en construcción donde cada nuevo
enlace directo evita tener que dar 2 o 3 saltos innecesarios.

### ¿Qué tengo que hacer?

Solo cambiar la configuración de tu nodo siguiendo el [enlace de configuración automática](#cómo-unirse)
que hay más abajo. Es un proceso de 2 minutos si tienes la app instalada.

:::info Una cosa importante
Los nodos en SFNarrow **no se escuchan** con los que siguen en MediumFast. Durante la
prueba, tu nodo solo hablará con los que también estén en SFNarrow. Si en tu zona
sois pocos y nadie más cambia, estarás solo. Por eso **cuanta más gente se sume a la
vez, más útil es la prueba**.
:::

---

## 🔧 Para los técnicos: qué hay detrás de SFNarrow

### El problema con MediumFast a escala

Para entender por qué estamos aquí hay que ver la evolución. La malla española empezó
con **LongFast**, el preset por defecto de Meshtastic. LongFast prioriza el alcance
con un SF alto, pero en mallas grandes genera una congestión severa: los paquetes
tardan más en transmitirse, ocupan más airtime y la red se satura con facilidad. El
salto a **MediumFast** fue la solución a ese problema — menor SF, más velocidad, menos
ocupación del canal — y funcionó bien durante una temporada.

Ahora la búsqueda de SFNarrow no viene de que MediumFast esté roto, sino de querer
encontrar **la configuración óptima definitiva** para mallas medianas y grandes: más
alcance, menos ruido, más capacidad, sin sacrificar la tasa de datos. Es el siguiente
paso natural en esa evolución.

MediumFast usa un ancho de banda de [**250 kHz** con SF9](https://meshtastic.org/docs/overview/radio-settings/#presets). Eso da una buena tasa de
datos y alcance razonable, pero tiene dos limitaciones importantes cuando la red crece:

- El canal ancho capta más ruido de fondo, incluyendo señales de dispositivos IoT de
  banda estrecha (alarmas, contadores, sensores) que colisionan con nuestros paquetes.
- Al usar todo el espectro disponible, solo hay 8 canales ortogonales (SF5–SF12)
  disponibles simultáneamente.

### La propuesta de SFNarrow

SFNarrow divide la banda EU_868 en **4 subcanales de 62,5 kHz** cada uno:

| Slot   | Frecuencia central |
| ------ | ------------------ |
| Slot 1 | 869.4313 MHz       |
| Slot 2 | 869.4938 MHz       |
| Slot 3 | 869.5563 MHz       |
| Slot 4 | 869.6188 MHz       |

La prueba activa usa el **Slot 4 (869.618 MHz)** con SF7 y CR5.

Las ventajas técnicas concretas:

- **+6 dB teóricos de mejora en SNR** al reducir el BW de 250 kHz a 62,5 kHz. En
  pruebas reales se ha superado esa cifra, consiguiendo enlaces directos donde
  MediumFast y LongFast solo daban saltos.
- **32 canales ortogonales** en lugar de 8: cuatro subcanales × 8 SF por subcanal.
- **Reducción de colisiones IoT**: los dispositivos de banda estrecha ya no caen
  dentro del mismo slot que nuestros paquetes.
- **Menos saltos, menos airtime**: un enlace directo que antes requería 3 repetidores
  reduce drásticamente el ChUtil de la red.

### Resultados de la Zona Centro

En las pruebas de enero–mayo 2026:

- Nodos "sordos" en altura o sin filtro SAW mejoraron drásticamente su recepción.
- **Venturada 2, Toledo 1, Ciudad Real 1 y Rigel Aux** rindieron notablemente mejor.
- La cadena **Madrid → Toledo → Ciudad Real → Albacete → Murcia → Alicante → Cartagena**
  ya está activa en SFNarrow con muy buenos resultados.
- El alcance real con SF7/62 está **superando las expectativas teóricas**: se consiguen
  enlaces directos que en teoría no deberían funcionar mejor que LongFast, pero lo hacen
  gracias a la reducción de BW que compensa con creces la pérdida de SF.
- El enlace **Murcia–Cartagena ya es estable** incluso con pocos nodos activos, con
  margen de mejora cuando se sumen más.
- Hay consenso creciente en la comunidad de que MediumFast ya no aporta ventajas reales
  frente a SFNarrow en las condiciones actuales de la malla.

### Por qué el Slot 4 y no otro

La elección de **869.618 MHz (Slot 4)** no es arbitraria. MeshCore España utiliza el
preset portugués, que opera también en **869.618 MHz** con BW 62.5 kHz y SF7. Eso
significa que Meshtastic SFNarrow y MeshCore comparten frecuencia en esta banda.

La razón por la que aun así se eligió el Slot 4
es que es **la mejor opción disponible dentro de las restricciones actuales**: el preset
oficial que está desarrollando Meshtastic para banda estrecha (`NARROW_868`) usará 3
slots con guardbands en una distribución de frecuencias diferente, que tampoco resuelve
el problema y además no será compatible con la división actual de 4 slots.

Esto es importante porque al utilizar la misma frecuencia y bandwidth tenemos varias ventajas:

- **Evitar colisiones**: Al estar las dos redes en SF7 el Channel Activity Detection de LoRa evita las colisiones, por lo que ambas mallas pueden usar ajustes parecidos sin colisionar. Evitando las colisiones que se producen al usar LongFast o MediumFast que genera colisiones con este preset de MeshCore Portugal.
- **Usando SF6 (en la siguiente prueba)**: Todavia mejor puesto que, al ser **ortogonales**, los dos pueden emitir al mismo tiempo sin molestarse al uno al otro. No solo evitas colisiones si no que tambien evitas compartir canal. A cambio tendriamos mas bitrate aunque menos alcance.

**Esta arquitectura de hecho tiene una década de experiencia con LoRaWAN, donde para la misma frecuencia se emite simultaneamente en todos los Spreading Factors.**

En resumen: no hay un slot perfecto ahora mismo, y el Slot 4 con SF7/CR5 es el que
mejores resultados está dando en campo. Evitamos el ruido lateral de usar una frecuencia lateral en la misma banda y las colisiones completas de LF/MF con Narrow.
Es decir hacemos un uso mucho mas eficiente y respetuoso de la banda que estamos usando.

### Consideraciones y limitaciones actuales

- **Separación de canales sin banda de guarda**: la división actual en 4 slots usando
  la región EU_868 no incluye guardbands, lo que en casos particulares puede generar
  cruces de paquetes entre slots adyacentes con señal suficientemente fuerte.
- **SF5/SF6 no en firmware estable**: en 62,5 kHz sería ideal usar SF5 o SF6, pero no
  están en el firmware oficial. La Prueba 7 (desde el 6 de junio) probará SF6 con la
  alfa 2.7.23 o la build custom. SF6 promete más bitrate y más alcance que MediumFast
  simultáneamente, lo que sería un salto muy significativo.
- **NARROW_868 en el horizonte**: Meshtastic está desarrollando una región oficial
  `NARROW_868` con 3 canales y bandas de guarda. La división actual de 4 slots **no
  será compatible** con esa futura región, por lo que la configuración definitiva aún
  está por determinar. Por esto se mantiene MediumFast como malla principal y SFNarrow
  como experimento paralelo.
- **SX1276 incompatible con SF6**: chips como el del Heltec V2 no soportan SF6. Para
  la Prueba 6 actual (SF7) no hay problema.

### Configuración técnica completa {#cómo-unirse}

Parámetros de la **Prueba 6**

| Parámetro          | Valor         |
| ------------------ | ------------- |
| Bandwidth          | `62`          |
| Spreading Factor   | `7`           |
| Coding Rate        | `5`           |
| Frequency slot     | `4`           |
| Frequency override | `869.618` MHz |
| Nombre canal 0     | `SFNarrow`    |
| PSK canal 0        | `AQ==`        |

**Opción A — Enlace de configuración automática (recomendado):**

[🔗 Generador de configuración SFNarrow - Prueba 1](https://meshtastic.es/docs/generador-configuracion?preset=SFNarrow+-+Prueba+1)

**Opción B — Configuración manual:**

Ve a `Radio Configuration` → `LoRa`:

- **Region:** European Union 868 MHz
- **Usar preset:** desactívalo
- **Bandwidth:** 62
- **Spreading Factor:** 7
- **Coding Rate:** 5
- **Frequency Slot:** 4 (o **Frequency Override:** 869.618)

Canal 0:

- **Nombre:** `SFNarrow`
- **PSK:** `AQ==`

:::tip Habilita uplink y OK to MQTT
Activa ambas opciones en el canal y en ajustes Lora para que tus enlaces sean visibles en
[meshview.meshtastic.es](https://meshview.meshtastic.es) y podamos recopilar datos
de vuestra zona.
:::

:::warning Nodo remoto
Cambia **primero** la configuración LoRa del nodo remoto y **después** la de tu
nodo local. Al revés perderás la conexión antes de poder actualizarlo. Consulta la
[guía de actualización remota](/blog/test-sfnarrow-zona-centro#️-cómo-actualizar-un-nodo-remoto).
:::

### Datos que queremos recopilar

Comparte tus observaciones en el [grupo de Telegram](https://t.me/meshtastic_esp):

- SNR y RSSI medios en enlaces directos
- Nuevos enlaces directos que antes no tenías (o enlaces perdidos)
- ChUtil y AirUtil antes y después del cambio
- Comportamientos anómalos (mensajes largos de 200 caracteres que no llegan, etc.)

### Calendario de pruebas

| Prueba                 | Fechas                          | Config                      |
| ---------------------- | ------------------------------- | --------------------------- |
| **Prueba 6** ✅ activa | Desde 02/05                     | BW 62, SF7, CR5, Slot 4     |
| **Prueba 7**           | Futuro, requiere pasar a 2.7.23 | BW 62, **SF6**, CR5, Slot 4 |

---

Si tienes cualquier duda sobre cómo configurar tu nodo, pásate por el
[grupo de Telegram](https://t.me/meshtastic_esp) y pregunta sin miedo.

¡Gracias por hacer la malla más robusta! 📡❤️
