---
slug: test-sfnarrow-zona-centro
title: "🧪 Test SFNarrow en la Zona Centro: Divide y Vencerás"
description: "Estamos probando una nueva configuración de frecuencia (SFNarrow) en la malla Meshtastic de la Zona Centro para mejorar el alcance y reducir interferencias. ¡Únete al test!"
authors: []
tags: [Madrid, Zona Centro, Configuración, Narrow]
---

### ¿Cuándo?

:::info
**Periodo de pruebas SFNarrow:**

🚀 Inicio: **Hoy Lunes 19 de Enero**

🏁 Fin: **Viernes** (Vuelta a la normalidad... o no, según los resultados 😉)
:::

### ¿Por qué este cambio?

En nuestra búsqueda constante por mejorar la malla Meshtastic de la Zona Centro, estamos realizando una prueba experimental moviéndonos de la configuración habitual de **MediumFast** (que usa un ancho de banda de 250kHz ocupando todo el espectro) a una nueva estrategia de **división de frecuencia**.

La idea es dividir la banda en **4 subcanales (Slots)** de 62.5kHz cada uno. Para este test, utilizaremos el **Slot 3**.

<!-- truncate -->

#### Las ventajas de esta arquitectura:

1.  **Mayor Alcance:** Al utilizar un ancho de banda más estrecho (62.5kHz vs 250kHz), conseguimos un enlace más robusto y con mayor alcance que en MediumFast.
2.  **Menos Ruido (IoT):** Al reducir el ancho de banda, reducimos la probabilidad de colisiones con dispositivos de banda estrecha como alarmas y sensores IoT que colisionan con nuestra malla.
3.  **Multiplicamos la capacidad (x4):** Aquí viene la magia. En 250kHz tenemos 8 canales ortogonales (SF5 a SF12). Al dividir la banda en 4 slots independientes, pasamos a tener **32 canales ortogonales** que pueden emitir simultáneamente sin pisarse.
4.  **Reducir saltos intermedios:** Al posibilitar enlaces que en MediumFast no funcionarian se puede reducir el numero de saltos y repeticiones necesarias, reduciendo el uso del canal.

### Detalles Técnicos y Frecuencias

Para esta estrategia, dividimos el espectro en las siguientes frecuencias centrales (Meshtastic redondea a 4 decimales):

*   **Slot 1:** 869.4313 MHz
*   **Slot 2:** 869.4938 MHz
*   **Slot 3:** 869.5563 MHz 👈 **(El que usaremos en este Test)**
*   **Slot 4:** 869.6188 MHz

### Configuración del Test

La configuración específica para esta prueba en el **Slot 3** es:

- **Ancho de banda (BW):** 62.5kHz (En la app se puede poner como 62 directamente)
- **Frecuencia:** 869.5563 MHz 
- **Spreading Factor:** SF7
- **Coding Rate:** CR5 


### Diferencias esperadas

En principio al pasar de 250kHz de ancho de banda a 62.5kHz la mejora teórica sería de 6dB en los SNR, en pruebas iniciales hemos visto que mejora mas incluso, consiguiendo enlaces directos que MediumFast y LongFast no consiguen.

Aquí puedes ver una comparativa de un *traceroute* realizado con la configuración anterior vs la nueva configuración SFNarrow. El objetivo es observar cómo se comportan los enlaces y comparar entre una configuracion y otra.


<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
  
  {/* Magia negra de Gemini para hacerle un marco negro a los traces */}
  {/* Imagen 1: MediumFast */}
  <figure style={{ width: "320px", margin: 0 }}>
    <div style={{ 
        width: "320px", 
        height: "320px", 
        backgroundColor: "#1e1e1e", /* Color de fondo oscuro para que se funda con la captura */
        borderRadius: "8px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        border: "1px solid #444"
    }}>
      <img
        src={require("../static/img/blog/mediumfast-trace.jpg").default}
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
        alt="Traceroute en MediumFast"
      />
    </div>
    <figcaption style={{ textAlign: "center", marginTop: "8px", fontWeight: "bold", color: "#666" }}>
      MediumFast (250kHz)
    </figcaption>
  </figure>

  {/* Imagen 2: SFNarrow */}
  <figure style={{ width: "320px", margin: 0 }}>
    <div style={{ 
        width: "320px", 
        height: "320px", 
        backgroundColor: "#1e1e1e", /* Mismo fondo oscuro */
        borderRadius: "8px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        border: "1px solid #444"
    }}>
      <img
        src={require("../static/img/blog/sfnarrow-trace.jpg").default}
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
        alt="Traceroute en SFNarrow"
      />
    </div>
    <figcaption style={{ textAlign: "center", marginTop: "8px", fontWeight: "bold", color: "#666" }}>
      SFNarrow (62.5kHz)
    </figcaption>
  </figure>

</div>

---

### ¿Cómo unirse al test?

Para participar en la prueba, es necesario que actualices la configuración de tu nodo. Tienes dos formas de hacerlo:

#### Opción A: Escanear Código QR (Recomendado)

Hemos preparado un enlace de configuración automática. Puedes abrir este enlace directamente si estás en el móvil con la app instalada, o generar un código QR desde la web para escanearlo con la app de Meshtastic.

    <img
      src={require("../static/img/blog/qr-narrow.jpg").default}
      style={{ width: "100%", maxWidth: "300px", height: "auto" }}
      alt="QR de configuracion SFNarrow"
    />
 

[**🔗 Enlace de configuración SFNarrow (Abrir en App Meshtastic)**](https://meshtastic.org/e/#ChMSAQEaCFNGTmFycm93KAEwAToAEhcYPiAHKAU4A0AESAFQFlgDaAF1mmNZRA)

:::tip
Abre el enlace, verifica los ajustes y pulsa en abrir en la App Meshtastic o escanea el QR generado. ¡Recuerda guardar los cambios en el nodo!
:::

#### Opción B: Configuración Manual (Local y Remota)

Si prefieres hacerlo manualmente o necesitas actualizar un **nodo remoto**, es crítico seguir un orden específico para no perder la conexión a mitad del proceso.

**1. Parámetros LoRa a configurar:**
Ve a `Radio Configuration` -> `LoRa` y establece:
*   **Region:** European Union 868MHz
*   **Preset:** Desactiva "Usar Preset" como base para desbloquear los campos, y luego personaliza:
*   **Bandwidth:** 62
*   **Spreading Factor:** 7
*   **Coding Rate:** 5

Y luego en la parte mas abajo pon al menos uno de los dos siguientes (o los dos):
*   **Frequency Slot:** 3
*   **Frequency Override:** 869.5563 


**2. Configuración del Canal Primario (Channel 0):**
*   **Nombre:** `SFNarrow`
*   **Clave (PSK):** `AQ==` (Esto equivale a "Default" o "None", asegurando que sea un canal público).

---

### ⚠️ ¿Cómo actualizar un nodo REMOTO?

Si administras un nodo al que no tienes acceso físico, **el orden de los factores sí altera el producto**. Si cambias tu nodo local primero, dejarás de "ver" al remoto y no podrás actualizarlo. Sigue estos pasos estrictamente:

1.  **Cambia la configuración LoRa del NODO REMOTO:**
    *   Conéctate a tu nodo local.
    *   Ve a la administración del nodo remoto.
    *   Aplica los ajustes de Ancho de banda, Frecuencia, SF y CR indicados arriba en el remoto.
    *   *Nota: En este momento perderás conexión con el remoto temporalmente.*

2.  **Cambia la configuración LoRa de tu NODO LOCAL:**
    *   Aplica los mismos ajustes LoRa en tu nodo (el que tienes en la mano).
    *   *Resultado: Deberías volver a ver al nodo remoto, ya que ambos están ahora en la nueva "velocidad".*

3.  **Cambia el Canal Primario del NODO REMOTO:**
    *   Vuelve a administrar el remoto.
    *   Cambia el nombre del Canal 0 a `SFNarrow` y verifica que la PSK sea `AQ==`.

4.  **Cambia el Canal Primario de tu NODO LOCAL:**
    *   Finalmente, actualiza tu propio Canal 0 para que coincida.

:::danger Importante
Los nodos en SFNarrow **no se escucharán** con los nodos que sigan en MediumFast. Si haces los cambios en el orden incorrecto durante una administración remota, podrías tener problemas luego para gestionarlo remotamente.
:::

¡Gracias por colaborar en hacer la red de la Zona Centro más robusta! 📡❤️
