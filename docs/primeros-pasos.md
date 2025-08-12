---
sidebar_position: 2
---

# Primeros pasos

Para comenzar con Meshtastic, necesitarás al menos un dispositivo compatible con LoRa. Aquí tienes algunas opciones populares para principiantes, con precios aproximados (pueden variar según el proveedor, aunque lo más típico es comprar en AliExpress):

| Dispositivo                      | Descripción                                                                                                  | Precio aproximado |
|----------------------------------|--------------------------------------------------------------------------------------------------------------|-------------------|
| Heltec V3                        | Económico y fácil de usar, ideal para conectarlo con tu teléfono.                                            | 20-30 euros       |
| LILYGO T-Beam                    | Incluye GPS, recomendado para quienes buscan compartir su ubicación.                                         | 30-40 euros       |
| LILYGO T-Echo                    | Compacto, con GPS integrado y bajo consumo, considerado «plug-and-play».                                     | 50-60 euros       |
| RAK WisBlock                     | Muy bajo consumo, ideal para nodos solares o larga duración de batería.                                      | 60-80 euros       |
| T-Deck                           | Dispositivo independiente con pantalla y teclado, útil para comunicaciones sin usar el teléfono.             | 70-90 euros       |
| SenseCAP T1000-E                 | Compacto, bajo consumo, con GPS, resistencia al agua (IP65) y batería de 700 mAh. Ideal para excursionistas. | 40-50 euros       |
| Opciones DIY (como la «FakeTec») | Puedes construir tu propio dispositivo con un chip de bajo consumo, ideal para nodos solares.                | 15-20 euros       |

**Recomendación**: Si eres principiante, el Heltec V3, el T-Echo o el SenseCAP T1000-E son excelentes por su facilidad de uso. Compra al menos dos dispositivos para probar la comunicación, ya que Meshtastic requiere múltiples nodos.

**Dónde comprar**: Puedes adquirir dispositivos en sitios como AliExpress o Amazon.

:::warning
Asegúrate de que el dispositivo que compras sea compatible con la frecuencia LoRa de tu región (868 MHz en Europa). Consulta las frecuencias regionales en la documentación oficial.
:::

## Accesorios

- **Antena adecuada**: Verifica que la antena sea compatible con la frecuencia de tu dispositivo (por ejemplo, 868 MHz para Europa). Algunos dispositivos, como el T-Beam, pueden incluir una antena de 433 MHz que no es óptima para 868 MHz.
- **Batería**: Muchos dispositivos requieren baterías recargables (como celdas 18650 para el T-Beam). Suelen costar 5-10 euros.
- **Carcasa**: Puedes usar carcasas impresas en 3D para proteger los dispositivos. Hay diseños gratuitos en línea o puedes comprarlas en sitios como Etsy o eBay.

## Software

- **Navegador**: Necesitarás Google Chrome, Edge o basado en Chromium para usar el flasher de Meshtastic, ya que no es compatible con Firefox.
- **Aplicación móvil**: Descarga la app de Meshtastic para iOS o Android para configurar y gestionar tus dispositivos desde tu teléfono.
- **Controladores**: Dependiendo del dispositivo, podrías necesitar controladores del puerto serie (como para ESP32 o nRF52/RP2040). Consulta las instrucciones en la documentación oficial.

:::tip
Si estás un poco perdido con tanta información o acabas de llegar te recomendamos este video de EA3GRN:
<iframe width="800" height="315" src="https://www.youtube.com/embed/qi3clr-u6-4?si=ptsZYemF3QCxuFoa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
:::

## Flashear el firmware de Meshtastic

:::danger
**¡Importante! ¡Conecta la antena lo primero!**: Conecta **siempre** la antena al dispositivo **antes de encenderlo** para evitar dañar el módulo LoRa.
:::

El primer paso para usar tu dispositivo es instalar el firmware de Meshtastic. Sigue estos pasos:

1. **Accede al flasher web**: Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/) usando Chrome o Edge.
2. **Selecciona tu dispositivo y elige la versión de firmware**: Recomendamos la última versión «Stable».
3. **Flashea el firmware**:
   - Conecta el dispositivo a tu computadora mediante USB.
   - Sigue las instrucciones del flasher. En algunos casos, el firmware se escribe directamente por puerto serie; en otros, descargarás un archivo UF2 que deberás arrastrar al dispositivo (aparecerá como un dispositivo de almacenamiento USB).
4. **Verifica**:
   - Una vez flasheado, el dispositivo se reiniciará y estará ejecutando Meshtastic. No te preocupes, flashear no elimina configuraciones personalizadas como el nombre o la región, a menos que elijas borrar todos los datos.

:::tip
Hay disponible una guía más extensa sobre cómo flashear tu dispositivo. Si te está costando la tienes disponible aquí: [Guia Flasheo de Firmware](guias-basicas/flashear-firmware.md)
:::

:::note
Si tienes problemas, revisa los controladores del puerto serie o consulta la documentación oficial de tu dispositivo específico.
:::

## Configurar tu dispositivo

Una vez que el firmware está instalado, configura tu dispositivo para unirlo a la red en malla:

1. **Conecta el dispositivo**:

   - **Por Bluetooth**: Usa la app de Meshtastic en tu teléfono o el cliente web en [client.meshtastic.org](https://client.meshtastic.org). Introduce el PIN que aparece en la pantalla OLED del dispositivo para emparejarlo. (Si no tiene pantalla, el PIN predeterminado es 123456).
   - **Por USB/Serial**: Conecta el dispositivo a tu ordenador y usa el cliente web.
   - **WiFi (en algunos dispositivos)**: Algunos nodos, como el T-Deck, permiten configuración por WiFi.

2. **Configura los ajustes básicos**:

   - **Región**: Selecciona tu región (por ejemplo, «Europa» para 868 MHz o «EE.UU.» para 915 MHz). Esto es obligatorio para cumplir con las regulaciones de frecuencia.
   - **Nombre del nodo**: Asigna un nombre único a tu dispositivo para identificarlo en la red (por ejemplo, «Nodo de Juan»).
   - **Canal**: Por defecto, los dispositivos usan un canal público. Puedes crear canales privados con cifrado para comunicarte solo con tu grupo. Comparte la clave de cifrado mediante un código QR o texto. El QR que usamos en España lo puedes encontrar en Telegram: [@meshtastic_esp](https://t.me/meshtastic_esp).
   - **Preset de LoRa**: El ajuste predeterminado «Long_Fast» es adecuado para la mayoría de los usuarios. Solo cámbialo si necesitas optimizar el alcance o la velocidad, pero ten en cuenta que solo podrás comunicarte con nodos que usen el mismo preset.

3. **Prueba la conexión**:
   - Enciende al menos dos dispositivos y verifica que se detecten mutuamente en la red. Envía un mensaje de prueba desde la app o el cliente web, como «¡Hola, estoy probando!».

## Consejos para principiantes

:::danger
**No enciendas NUNCA el dispositivo sin antena conectada**

Si la energía de la radio no tiene "por donde salir", rebotará y te quemará la radio dejando el módulo inservible.
:::

:::warning
**No cambies configuraciones sin entenderlas**

Si lo haces, **empeorarás el rendimiento de la red para todos.** Las principales opciones que **perjudican** a la malla, y que por tanto debes **EVITAR**:

- **Configurar más de 3-4 saltos (hops).** No son necesarios y provocan bucles en las rutas.
- **Usar el modo Router sin planificarlo antes con la comunidad.** Ante la duda utiliza CLIENT o CLIENT_MUTE.
- **Reducir los intervalos de telemetría.** Es la mayor fuente de tráfico innecesario que satura la malla.
- **Usar el modo RangeTest.** Molesta a los demás y satura enormemente la red.
  :::

:::tip
Revisa nuestra guía de [buenas prácticas](buenas-practicas.md) para asegurarte de que tienes una configuración que no va a perjudicar al resto de la red.
:::

1. **Prueba con dispositivos simples primero**:

   - **Empieza fácil**: Usa un Heltec V3 conectado a tu teléfono.
   - **Evita complicaciones**: No compres dispositivos avanzados como el T-Deck o los RAK hasta que entiendas lo básico.

2. **No te preocupes si no ves otros nodos al principio**:

   - **Saca tu nodo por la ventana**: (O acércalo al menos). Meshtastic funciona muy mal dentro de los edificios.
   - **Pregunta a la comunidad sobre tu antena**: La antena que utilices marca totalmente la diferencia y puede doblar tu alcance.
   - **Consejo**: Prueba de cerca con dos dispositivos para asegurarte de que todo funciona bien primero.

3. **Experimenta poco a poco**:

   - Una vez que configures tus dispositivos, prueba diferentes configuraciones, como ajustar la potencia de transmisión o probar nodos en exteriores para maximizar el alcance.
   - Pero hazlo con cuidado para no romper nada.

4. **Busca ayuda si algo no funciona**:

   - **Meshtastic tiene una comunidad muy útil**:
     - **Pregunta**: Hay un canal de Telegram en España ([@meshtastic_esp](https://t.me/meshtastic_esp)) donde puedes resolver tus dudas. También está el subreddit [r/meshtastic](https://www.reddit.com/r/meshtastic/).
     - **Revisa la documentación oficial**: [Meshtastic.org](https://meshtastic.org) tiene guías fáciles de entender.

5. **No es necesario usar MQTT para hablar**:

   - **MQTT es una herramienta para conectar nuestros nodos a internet.** No es necesario (ni recomendable) al principio hasta que entiendas bien cómo funciona Meshtastic y la RF.
   - **Lo utilizamos principalmente para observar la red**. Hay herramientas como el [Mapa](https://mapa.meshtastic.es) o [Meshview](https://meshview.meshtastic.es) que sirven para ver en tiempo real, a través de internet el estado de la red de Meshtastic en España.

6. **Advertencia para radioaficionados: No actives el modo HAM**:

   - **Si eres radioaficionado y tienes una licencia HAM**, podrías querer activar el «modo HAM» en Meshtastic para usar funciones avanzadas. Pero no lo hagas por estos motivos:
     - **Las comunicaciones HAM no pueden ir cifradas**: Por regulaciones de radioaficionados, los mensajes en modo HAM deben ser abiertos y sin cifrado. Esto significa que no podrás comunicarte con nodos que usen canales cifrados, que son los más comunes en Meshtastic.
     - **Puedes violar regulaciones**: Aunque tengas licencia, un uso incorrecto del modo HAM podría incumplir las leyes de tu país sobre frecuencias y potencia.
     - **No es necesario para aprender**: Puedes usar Meshtastic perfectamente en el modo normal sin activar esta función.
   - **Consejo**: Deja el modo HAM desactivado y usa los ajustes predeterminados hasta que tengas más experiencia y entiendas bien las implicaciones legales y técnicas.

7. **No ignores la versión de firmware que utilizas**:
   - **El firmware es el programa que hace funcionar tu dispositivo**. Es importante tener la última versión **estable**:
     - **No utilices la ultimísima versión**, pero tampoco lo dejes sin actualizar nunca. **Recomendamos usar la rama beta.**
     - **Podrías quedarte atrás**: Las actualizaciones arreglan problemas y añaden funciones.
     - **Si tienes algun problema extraño, podría ser culpa de tu versión.**
   - **Consejo**: Revisa si hay actualizaciones en [flasher.meshtastic.org](https://flasher.meshtastic.org).

## Recursos útiles

- Existen canales de YouTube donde aprender mucho sobre Meshtastic. Si estas empezando te recomendamos esto canales: [EA3GRN](https://www.youtube.com/watch?v=qi3clr-u6-4&list=PLLFrLgZ4YFd3nmCHLAl0wxiAJCvSjeWrb&index=8&ab_channel=ea3grn), [Radio Preppers](https://www.youtube.com/watch?v=UoSiZEQkYuA&list=PLRygyI8RBaCUPaxOMyp4G5u4NFpCoPxE2&ab_channel=RadioPrepperSpain) o [Caracolmaker](https://www.youtube.com/@caracolmaker/videos)


- Documentación oficial: [Meshtastic.org](https://meshtastic.org)
- Comunidad en Reddit: [r/meshtastic](https://www.reddit.com/r/meshtastic/)
- Comunidad Telegram España: [@meshtastic_esp](https://t.me/meshtastic_esp)

Con esta guía, deberías estar listo para configurar tu primer nodo Meshtastic y explorar las posibilidades de la comunicación sin Internet. ¡Empieza con un par de dispositivos, experimenta poco a poco y únete a la comunidad para seguir aprendiendo!
