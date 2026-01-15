---
sidebar_label: Antenas recomendadas
sidebar_position: 4
description: Guía con recomendaciones y experiencias sobre antenas para dispositivos Meshtastic, basadas en el grupo de Telegram Meshtastic España.
---

# Antenas recomendadas

La elección de la antena es tan importante como el propio dispositivo. Elegir el número adecuado de dBi no se trata solo de “cuanto más, mejor”. 
Un valor de dBi alto concentra la señal en una dirección más estrecha, lo que puede aumentar el alcance, pero reducir la cobertura en otras direcciones. 

<p align="center">
  <img src="/img/guias/dbi.jpeg" alt="diferencia dBi" width="400" />
</p>

Por el contrario, una antena con menos dBi ofrece una señal más amplia y uniforme, ideal para zonas con obstáculos o donde se necesita cubrir un área cercana en 360°. Entender este equilibrio es clave para optimizar la conexión y el rendimiento de la red.

<p align="center">
  <img src="/img/guias/dbi2.jpg" alt="diferencia dBi" width="400" />
</p>

Por lo tanto, no. Más dBi no significa más potencia, ni garantiza mejor rendimiento; se trata de encontrar el equilibrio para tu entorno y uso.

A continuación te presentamos una lista de antenas recomendadas y no recomendadas para usar con tus dispositivos Meshtastic.

---

## 📟 Antenas para nodos portátiles

- **Gizont 17 CM**
  [Ver en AliExpress](https://es.aliexpress.com/item/1005004607615001.html)

- **Gizont 20 CM**
  [Ver en AliExpress](https://es.aliexpress.com/item/1005006359246399.html)

- **GrandWisdom (USAR SIN DOBLAR)**
  [Ver en AliExpress](https://es.aliexpress.com/item/32979875502.html)

## 🗼 Antenas para nodos fijos

- **Yagi direccional Aliexpress:**
  Se recomienda comprobar con VNA (Analizador de Redes Vectorial).
  Puede que sea necesario ajustarla para obtener mejor rendimiento.
  [Ver en AliExpress](https://a.aliexpress.com/_Eu7alUU)

- **Yagi direccional Amazon:**
Antena probada que da buen rendimiento aunque algo mas cara.
[Ver en Amazon](https://www.amazon.es/dp/B0CVGSL7Q4)

- **Mikrotik LoRa Omnidireccional 6.5dbi**: Antena de buena calidad aunque de precio alto.  [Ver en su web](https://www.senetic.es/product/868_Omni_antenna) 

- **Alfa Network AOA-868-5ACM** Antena de de 5 dbi de buena calidad del fabricante Alfa Networks. Muy utilizada en EEUU. [Ver en su web](https://alfa-network.eu/antennas/aoa-868-5acm)

- **Ziisor Fibra 55cm:** Opción de antena más económica.
  [Ver en AliExpress](https://es.aliexpress.com/item/1005007463706065.html)

:::tip
La mayoría de antenas para estación fija llevan conector de tipo N. Revisa si necesitas comprar algún adaptador o conector N - Ipex.
:::

---

## 🛑 Antenas no recomendadas

- **Antena original**

    Las antenas originales que vienen con dispositivos como el Heltec V3 no valen para el uso con Meshtastic ya que son de muy mala calidad o están ajustadas a frecuencias que no son útiles.

- **Gizont Mala**
  
    Si tienes suerte, podrías ajustarla, pero ¿realmente vale la pena?
  [Ver en AliExpress](https://a.aliexpress.com/_Ew2bKoq)

- **Ziisor Fibra 40cm:** En nuestra experiencia funciona peor que las de 20cm, no merece la pena.
  [Ver en AliExpress](https://a.aliexpress.com/_EjIfcmE)


- **Gizont 40 CM** Tiene el mismo problema que la Ziisor.
  [Ver en AliExpress](https://es.aliexpress.com/item/1005006359246399.html)


- **fakeAlpha**
  
    No la compres si no tienes un NanoVNA para comprobarla. Algunas unidades no están bien calibradas o funcionan mal.

---

:::note 
Toda esta información se basa en recomendaciones y experiencias obtenidas en el grupo de Telegram de Meshtastic España. Para más detalles, dudas o consultas, te invitamos a unirte:
[https://t.me/meshtastic_esp](https://t.me/meshtastic_esp)
:::


### Fuentes:

https://www.data-alliance.net/es/dbi-db-dbm-dbmw-definido-y-explicado
https://www.gme.net.au/eu/news/understanding-antenna-gain-and-dbi/