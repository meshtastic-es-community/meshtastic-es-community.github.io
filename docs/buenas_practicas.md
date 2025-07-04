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

Los saltos **MÁXIMOS** que recomendamos son:
- 4 - Para nodos bien conectados (CLIENT en exterior)
- 5 - **Solamente** si estamos en los extremos de la malla o para un nodo CLIENT_MUTE en interior.

:::info
Los mensajes se moverán de forma mucho más ágil si entre todos usamos solamente los hops mínimos necesarios. Cuantos más hops, los mensajes dan más vueltas, con caminos redundantes y saturando la malla innecesariamente.
:::
:::warning
Muchos usuarios creen erróneamente que poner 7 hops (el más alto) es mejor, pero es totalmente contraproducente para sí mismos. Es por algo que vienen 3 por defecto.
:::
