---
title: Probar el sensor TMAP
summary: Medición de la resistencia y de los voltajes de entrada y salida del sensor de temperatura y presión del aire de admisión.
category: specific
difficulty: 2
time: 30 min
tools:
  - Multímetro (escalas 20 kΩ y 20 V DC)
warnings:
  - Para llegar al sensor hay que retirar el tanque de combustible. Trabaja lejos de chispas o llamas.
  - La resistencia se mide con el sensor desconectado; los voltajes, con el sensor conectado.
tables:
  - title: Valores estándar
    columns: [Medición, Escala, Punta positiva, Punta negativa, Valor]
    rows:
      - [Resistencia, 20 kΩ, Pin 1, Pin 2, 2 ± 0.5 kΩ a 25 °C]
      - [Voltaje de entrada, 20 V DC, Rojo/azul, Amarillo/negro, 5 V DC]
      - [Voltaje de salida, 20 V DC, Blanco/rojo, Amarillo/negro, 3.8 ± 0.65 V DC]
sourcePages: "20, 142 y 143"
order: 346
---

1. Retira el tanque de combustible y la cubierta del filtro de aire junto con el elemento filtrante.
2. Desconecta el sensor TMAP y, con el multímetro en 20 kΩ, mide entre sus pines 1 y 2: debe marcar 2 ± 0.5 kΩ a 25 °C.
3. Vuelve a conectar el sensor.
4. Pon el encendido y el corte del motor en ON y el multímetro en 20 V DC.
5. Pinchando el conector por detrás, mide el voltaje de entrada entre el cable rojo/azul y el amarillo/negro: 5 V.
6. Mide el voltaje de salida entre el cable blanco/rojo y el amarillo/negro: 3.8 ± 0.65 V.
7. Si la alimentación llega y la resistencia o la salida están fuera de rango, reemplaza el sensor.

> El manual nombra distinto el cable de salida: la tabla dice blanco/rojo y el esquema del conector rotula el pin 4 como B/Na (blanco/naranja). El esquema asigna amarillo/negro al pin 1, verde al pin 2 y rojo/azul al pin 3.

> El manual no indica si el voltaje de salida se mide con el motor apagado o en marcha; las fotos muestran la medición con la moto detenida. Los tornillos del sensor son de seguridad y requieren un destornillador especial.
