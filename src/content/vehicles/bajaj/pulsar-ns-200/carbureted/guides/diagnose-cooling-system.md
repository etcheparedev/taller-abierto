---
title: Diagnosticar el sistema de refrigeración
summary: Cómo funciona el sistema, qué hace cada componente y la tabla de fallas, causas probables y solución para recalentamiento, ventilador y fugas.
category: specific
difficulty: 2
warnings:
  - Si el aviso de temperatura está encendido, detén la moto y no la uses hasta resolver la falla.
  - No abras la tapa del radiador ni sueltes mangueras con el motor caliente.
specs:
  - { label: Capacidad total, value: 1000 ml }
  - { label: Válvula de presión de la tapa, value: Abre a 1.4 kg/cm² }
  - { label: Abrazaderas de manguera, value: A 3 mm del extremo de la manguera (marca blanca) }
tables:
  - title: Fallas y soluciones
    columns: [Síntoma, Causa probable, Qué hacer]
    rows:
      - [Motor recalentado, Poco refrigerante, Buscar fugas y completar el nivel]
      - [Motor recalentado, Aletas del radiador sucias, Limpiar las aletas del radiador]
      - [Motor recalentado, Espuma en el sistema, Drenar y volver a llenar el sistema]
      - [Motor recalentado, Termostato defectuoso, Revisar el termostato]
      - [Motor recalentado, Fusible quemado, Cambiar el fusible]
      - [Motor recalentado, Relé o ventilador del radiador defectuoso, Revisar y reemplazar]
      - [Motor recalentado, CDI defectuoso (falla del circuito del relé), Revisar y reemplazar]
      - [Aviso de temperatura encendido, El ventilador no funciona con el motor caliente, "Revisar la alimentación del ventilador: si llega, reemplazar el ventilador; si no, revisar el relé y el CDI"]
      - [El ventilador no se detiene, Relé del radiador pegado, Revisar y reemplazar]
      - [Refrigerante de color negro, Aceite de motor mezclado con el refrigerante, "Reemplazar las juntas; un O-ring defectuoso entre la bomba y el motor también deja pasar fluido"]
      - [El nivel baja seguido, Tapa del radiador defectuosa, "Revisar y reemplazar; una tapa que no sella deja escapar refrigerante por el respiradero"]
      - [Refrigerante en el aceite, La junta no sella, Reemplazar las juntas de la bomba de refrigerante]
  - title: Qué hace cada componente
    columns: [Componente, Función]
    rows:
      - [Bomba de refrigerante, Hace circular el refrigerante por el sistema]
      - [Termostato, "Regula el paso hacia el radiador para que el motor caliente rápido y mantenga su temperatura"]
      - [Radiador, Enfría el refrigerante que pasa por sus tubos y aletas]
      - [Ventilador, Fuerza el paso de aire por el radiador]
      - [Relé del radiador, "Enciende y apaga el ventilador; lo gobierna el CDI"]
      - [Sensor de temperatura, Informa la temperatura del refrigerante]
      - [Tapa del radiador, "Mantiene la presión; una válvula deja salir refrigerante al tanque de expansión y otra lo deja volver al enfriarse"]
      - [Tanque de expansión, Recibe el refrigerante que se dilata en caliente y lo devuelve en frío]
      - [Tornillo de sangrado, Permite sacar el aire del sistema]
      - [Mangueras y abrazaderas, "Llevan el refrigerante entre el radiador, la bomba y el motor"]
  - title: Temperaturas de control
    note: La carta de refrigeración del mismo manual indica 88 ± 2 °C para el inicio de apertura del termostato y 96 ± 2 °C para la apertura total.
    columns: [Evento, Temperatura]
    rows:
      - [El termostato empieza a abrir, 82 °C]
      - [Termostato totalmente abierto, 96 °C]
      - [Se enciende el ventilador, 98 °C]
      - [Se apaga el ventilador, 92 °C]
      - [Aviso en el tablero, 115 °C]
sourcePages: "69 a 72 y 125"
order: 30
---

## Cómo circula el refrigerante

La bomba impulsa el refrigerante por los conductos del cilindro y de la culata hasta el termostato. Con el motor frío (menos de 82 °C) el termostato lo devuelve a la bomba por el tubo de derivación para que el motor caliente rápido. Al superar esa temperatura, lo envía a la parte superior izquierda del radiador; sale enfriado por la parte inferior derecha y vuelve a la bomba.

![Diagrama del recorrido del refrigerante: bomba, cilindro, culata y termostato; en frío vuelve a la bomba por el tubo de derivación y en caliente pasa por el radiador](../../images/coolant-flow.svg)

Cuando el refrigerante se dilata, la válvula de presión de la tapa del radiador abre a 1.4 kg/cm² y lo deja pasar al tanque de expansión. Al enfriarse el motor se forma vacío y la otra válvula de la tapa lo deja volver al radiador.

## Para evitar que se mezclen aceite y refrigerante

- Reemplaza siempre la junta de culata y la junta del cilindro por nuevas al abrir el motor.
- Reemplaza la junta gris de los cárteres cada vez que los separes.
- Reemplaza los sellos de la bomba de refrigerante cada vez que separes los cárteres.

## Mangueras y abrazaderas

- Coloca cada abrazadera en la marca blanca de la manguera, a 3 mm del extremo.
- Usa abrazaderas nuevas al montar: una reutilizada puede agrietarse y dejar fugas.
- El cuadro de mantenimiento pide revisar mangueras y abrazaderas desde el 2.º servicio y cambiar las mangueras cada 35 000 km o 3 años.
