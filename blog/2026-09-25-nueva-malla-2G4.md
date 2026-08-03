---
slug: malla-2.4G-preparacion
title: 📡 ¡Salto a los 2.4GHz! Antenas, cacharreo DIY y la conquista de Madrid
authors: [EA5JSQ]
tags: [2.4GHz, Antenas, Hardware, DIY, Configuración, Mesh]
description: >
  La malla en 2.4GHz arranca motores. Mientras los nodos se preparan para iluminar
  Madrid y otras zonas, repasamos las mejores opciones de antenas comerciales,
  el resurgir de las "cantennas" caseras y los retos de aduanas. ¡Prepara tu VNA!
---

La malla de Meshtastic está calentando motores para una nueva frontera: **la banda de 2.4GHz**. Los nodos se preparan, los latiguillos se revisan y la comunidad ya está debatiendo cuál es el mejor arsenal de antenas para "iluminar" ciudades enteras. Si tienes un nodo de 2.4G en camino, este artículo resume todo lo que se está cociendo en los laboratorios caseros de la red. 🙌

<!-- truncate -->

---

## 🙋 Para todo el mundo: ¿Qué implica pasar a 2.4GHz?

A diferencia de la banda de 868MHz, la banda de 2.4GHz requiere **Línea de Visión Directa (LOS)** mucho más estricta. Los obstáculos perdonan menos, pero a cambio nos permite "abusar" de la ganancia direccional sin generar tanto ruido innecesario.

Al concentrar la señal, podemos lograr un **PIRE (Potencia Isotrópica Radiada Equivalente)** mucho mayor. Según las pruebas iniciales, utilizar una antena direccional o sectorial adecuada puede multiplicar la señal **hasta 20 o 25 veces** en comparación con la típica antena omnidireccional de 5dBi. El objetivo es claro: conseguir enlaces potentes que cubran grandes extensiones, como por ejemplo iluminar la ciudad de Madrid desde puntos elevados como Venturada o Rigel.

---

## 🔧 La Lista de la Compra: Antenas recomendadas (y cuáles evitar)

Si estás montando tu placa (ya sea con un módulo Lilygo, una placa Scout o las *Faketecs 2.4G*), la elección de la antena es crítica.

### Lo que funciona bien
- **Antenas de serie Ebyte (5dBi):** Una opción segura y estándar para empezar sin complicaciones y con buenas tasas.
- **Interline 14dBi:** Altamente recomendadas para establecer enlaces fijos y estables punto a punto.
- **Antenas Sectoriales y Direccionales:** Ideales para nodos en altura que necesiten dar cobertura a una gran zona urbana.

### Lo que debes evitar 🚫
- **Robarle la antena al router Wi-Fi viejo:** Aunque la tentación es grande, la mayoría de los routers modernos usan antenas **doble banda (2.4GHz y 5GHz)**. Estas antenas suelen tener un rendimiento muy deficiente cuando se usan exclusivamente para Meshtastic. Como dice el dicho en la malla: *"Siendo doble banda, buen truño será"*.

:::warning ¡Cuidado con los latiguillos!
De nada sirve una antena de alta ganancia si fallas en la base. Un latiguillo (pigtail) de mala calidad o demasiado largo (incluso 20cm) en 2.4GHz puede comerse gran parte de tu ganancia.
:::

---

## 🥫 El rincón del Cacharreo DIY: El retorno de las "Cantennas"

El paso a 2.4GHz ha despertado la nostalgia de muchos veteranos de la época del *Aircrack-ng* y las redes WEP. Puesto que la longitud de onda en 2.4GHz es muy pequeña, la fabricación de antenas caseras de alta ganancia es completamente viable.

¿Qué se está viendo por los grupos de trabajo?
- **Cantennas con botes de Nescafé o Pringles:** Todo un clásico. Un diseño de guía de ondas cilíndrica que, bien ajustado, ofrece una direccionalidad excelente.
- **Parabólicas con malla metálica o papel Albal:** Modificaciones artesanales para concentrar el haz de señal y sacar dBi's de donde no los hay.

**¿El secreto del éxito? El VNA.**
Hoy en día, casi todo el mundo tiene acceso a un **NanoVNA** y un **TinySA** económicos. Esto marca la diferencia entre hacer un invento a ciegas y calibrar una antena casera para que rinda de forma óptima.

---

## 📦 Compras y Aduanas: El "Impuesto Revolucionario"

Un tema de debate candente al adquirir equipo de radio es dónde comprarlo. Actualmente, pedir antenas baratas por **AliExpress** implica lidiar con los procesos de aduanas europeos. Si el envío cae en manos de Correos y hay que pagar los 8€ de gastos de gestión, el coste de experimentar con antenas económicas se dispara (e incluso te pueden cobrar la destrucción si rechazas el paquete).

Algunos usuarios intentan sortear esto comprando a *dropshippers* en **Amazon**, aunque los precios base son mayores. La recomendación general es agrupar pedidos o buscar opciones europeas consolidadas si vas a invertir en una antena seria.

### Siguientes pasos
Las pruebas continúan. Prepara tu nodo, afila tu VNA, rescata ese bote de metal de la despensa y ¡nos vemos en las frecuencias de la nueva Malla 2.4G!

