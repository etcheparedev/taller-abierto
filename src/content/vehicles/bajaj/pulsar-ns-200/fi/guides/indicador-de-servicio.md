---
title: Entender el indicador de servicio y los avisos del tablero
summary: A qué kilometraje corresponde cada servicio de la versión FI y qué significa cada testigo, incluido el de falla de la inyección.
category: rutina
difficulty: 1
interval: Cada 2500 km
specs:
  - { label: Servicios, value: Cada 2500 km desde el 2.º }
  - { label: Aviso de revoluciones, value: Parpadea desde 9500 rpm }
  - { label: Corte de encendido, value: 10 500 rpm }
  - { label: Aviso de bajo combustible, value: Menos de 3.5 L }
  - { label: Aviso de temperatura, value: Más de 115 °C }
tables:
  - title: Kilometraje de cada servicio
    columns: [Servicio, Kilometraje]
    rows:
      - [1.º, 450 – 500 km]
      - [2.º, 2450 – 2500 km]
      - [3.º, 4950 – 5000 km]
      - [4.º, 7450 – 7500 km]
      - [5.º, 9950 – 10 000 km]
      - [6.º, 12 450 – 12 500 km]
      - [7.º, 14 950 – 15 000 km]
sourcePages: "30, 36, 37 y 65"
order: 70
---

El tablero enciende el recordatorio de servicio cuando se acerca el mantenimiento. Qué se revisa en cada servicio está en la tabla «Programa de mantenimiento periódico» de la ficha de la moto. El manual indica que la configuración del recordatorio solo se hace en un centro de servicio autorizado, y no dice a qué kilometraje exacto se enciende.

## Selector de modo

- Cambia entre el odómetro, los parciales TRIP 1 y TRIP 2 y el reloj (HH:MM, AM/PM).
- Permite poner el reloj en hora y volver a cero los parciales.

## Qué pasa al dar contacto

1. Pon en ON la llave de encendido y el interruptor de apagado del motor.
2. Observa los 4 testigos de la parte superior: se encienden todos y algunos se apagan solos.
3. Mira el testigo de falla de la inyección: si se enciende, la ECU detectó un error en el sistema de gestión del motor.

## Avisos del tablero

- **Falla de la inyección (MIL):** se enciende cuando la ECU detecta un error en el sistema de gestión del motor. Lleva la moto a revisar; el motor puede seguir funcionando en modo limitado, con menos rendimiento. Consulta la guía «Leer los códigos de falla».
- **Temperatura del refrigerante:** avisa cuando el motor supera los 115 °C. Detén la moto.
- **Presión de aceite:** avisa cuando cae la presión de aceite del motor.
- **Batería:** avisa cuando cae el voltaje de la batería.
- **Gato lateral:** se enciende cuando el gato lateral está abajo. Con el gato abajo la ECU no deja arrancar el motor.
- **Neutro, direccionales y luz alta:** testigos LED.
- **Bajo combustible:** parpadea cuando quedan menos de 3.5 L. El medidor es una barra de 9 segmentos.
- **Aviso de revoluciones:** un LED ámbar parpadea cuando el motor llega a 9500 rpm; el encendido se corta a 10 500 rpm.

> El manual describe el testigo de falla de dos maneras: como un ícono ámbar en el lado izquierdo del tablero y como un indicador rojo junto al de luz alta.
