---
slug: preguntas-frecuentes
sidebar_position: 5
---

# Preguntas frecuentes

<!-- El icono no existe, así que he cogido el de la llave y le he puesto un rectángulo, rotado unos 45º, a modo de tachado. -->
export const KeyOffIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" width="1em" height="1em" class="iconify">
<path fill="currentColor" d="M7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m5.6-4c-.8-2.3-3-4-5.6-4c-3.3 0-6 2.7-6 6s2.7 6 6 6c2.6 0 4.8-1.7 5.6-4H16v4h4v-4h3v-4z"/>
<rect x="22" y="-5" transform="matrix(.707 -.707 .707 .707 -9.941 24)" fill="currentColor" width="3" height="24"/>
</svg>
);

## Problemas comunes {#problemas-comunes}

### Mi nodo no aparece en los mapas de la web {#nodo-no-aparece-en-mapas}

Échale un vistazo a [cómo hacer que el nodo aparezca en los mapas](mapas.md#como-aparecer-en-mapas).
Si aun así no aparece, pregunta en [Telegram](https://t.me/meshtastic_es) para que podamos ayudarte.

### He activado el WiFi en mi nodo y ahora no puedo conectar por Bluetooth :mdi-wifi: :mdi-bluetooth: {#wifi-o-bluetooth}

La mayoría de los nodos Meshtastic tienen una única antena para el WiFi y el Bluetooth. Por lo tanto, si uno está
activado, el otro no podrá funcionar. En este caso, el WiFi tiene prioridad.

Para volver a conectar por Bluetooth, conéctate al nodo a través del WiFi mediante su IP local,
entra en :mdi-settings: _Radio configuration_ › :mdi-wifi: _Network_ y desactiva el _WiFi enabled_. Cuando se reinicie
el nodo, podrás volver a conectarte por Bluetooth.

### Me sale un aviso de claves comprometidas y hay que regenerarlas {#claves-comprometidas}

También conocido como _Compromised keys detected, select OK to regenerate_. Este mensaje indica que las claves
pertenecen a un grupo de claves privadas conocidas que también pueden existir en otros nodos, debido a cómo se generaron
en algunos _firmwares_ (baja entropía). Tienes más información en la
[_release_ 2.6.11](https://github.com/meshtastic/firmware/releases/tag/v2.6.11.60ec05e).

Para solucionarlo, debes generar una nueva clave privada. Tienes varias formas de hacerlo:
- Entrando en :mdi-settings: _Radio configuration_ › :mdi-shield-half-full: _Security_ y pulsando en
:mdi-warning-outline: _Regenerate Private Key_.
- Flasheando de nuevo el firmware, marcando la opción de _Full Erase and Install_.

:::warning

Cuando regeneres las claves, **perderás el acceso remoto** (mediante _Remote administration_) ya que la clave pública
cambia. Haz una copia de tus claves, por si tuvieras que volver a utilizarlas.

:::

### ¿Por qué aparece un candado amarillo en un canal? <span style={{color:"yellow"}} class="shadow">:mdi-unlocked-variant-outline:</span> {#candado-amarillo-canal}

El candado amarillo indica que el canal tiene una clave de baja entropía. Es normal en los canales públicos (LongFast,
MediumSlow, Iberia, canales de provincia...), ya que la clave por defecto tiene pocos bytes.

En canales privados, cambia la clave del canal por una de mayor entropía (32 bytes).

### ¿Por qué aparece un triángulo rojo en un canal? <span style={{color:"red"}} class="shadow">:mdi-warning:</span> {#warning-rojo-canal}

El triángulo rojo indica que estás compartiendo tu ubicación precisa en un canal cuya clave es de baja entropía. Esto se
puede traducir en un problema de privacidad ya que estás compartiendo tu ubicación exacta con cualquiera en ese canal.

Entra en la configuración del canal, desactiva la ubicación precisa y configura un cierto margen de error.

### ¿Qué significa la llave roja tachada en un nodo? <span style={{color:"red"}} class="shadow"><KeyOffIcon /></span> {#llave-roja-nodo}

La llave roja nos indica que la clave pública recibida del nodo no coincide con la que teníamos registrada anteriormente.
Los nodos tienen una clave pública y privada que se utiliza para cifrar la comunicación directa entre nodos (más info en
la [documentación oficial](https://meshtastic.org/docs/overview/encryption/).

Para registrar la nueva clave pública, borra el nodo y deja que se vuelva a descubrir. También puedes pedir al dueño del
nodo que te comparta la URL o el QR de ese nodo.
