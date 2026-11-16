---
title: Diagnosticar el sistema de carga
summary: Medición del voltaje y de la corriente de carga a 4000 rpm para saber si fallan la batería, el estator o el regulador-rectificador.
category: specific
difficulty: 2
time: 45 min
tools:
  - Multímetro con escalas de 20 V DC y 10 A DC
  - Tacómetro (o el del tablero)
warnings:
  - Haz las mediciones con la batería totalmente cargada. Con la batería baja los valores no sirven.
  - El motor gira a 4000 rpm durante la prueba. Asegura la moto en el gato central, en neutro, y aléjate de la cadena, la rueda y el escape.
  - Para medir corriente el multímetro va en serie con el circuito, nunca en paralelo con la batería.
specs:
  - { label: Voltaje de carga, value: 14.3 – 14.7 V a 4000 ± 25 rpm }
  - { label: Corriente de carga, value: 5 A máximo a 4000 ± 25 rpm }
  - { label: Batería cargada para la prueba de corriente, value: 12.5 ± 0.3 V }
  - { label: Bobina de carga, value: 0.8 – 1.1 Ω a 25 °C }
  - { label: Fusible del circuito, value: 20 A }
tables:
  - title: Qué indica cada resultado
    columns: [Resultado, Revisar]
    rows:
      - [Voltaje por debajo de 14.3 V, "Fusible de 20 A, conexiones, bobina de carga del estator y regulador-rectificador"]
      - [Voltaje por encima de 14.7 V, "Regulador-rectificador y su masa (cable negro/amarillo)"]
      - [Voltaje correcto pero la batería se descarga, "Batería y consumos con la moto apagada"]
sourcePages: "94, 96, 109, 116 y 118"
order: 310
---

El circuito es corto: del magneto salen dos cables azul/blanco al regulador-rectificador, y de este sale un cable blanco que pasa por el fusible de 20 A y llega al positivo de la batería por el cable blanco/negro. El regulador hace masa al chasis por el cable negro/amarillo.

![Esquema del circuito de carga: el magneto entrega corriente alterna por dos cables azul/blanco al regulador-rectificador, que carga la batería a través del fusible de 20 A; el voltaje se mide en paralelo con la batería y la corriente en serie entre los cables blanco y blanco/negro](../images/charging-circuit.svg)

## Voltaje de carga

1. Comprueba que la batería esté totalmente cargada.
2. Pon el multímetro en 20 V DC y conéctalo en paralelo con la batería: punta positiva al cable rojo del positivo y punta negativa a masa.
3. Arranca el motor y llévalo a 4000 rpm.
4. Enciende las luces y lee el voltaje: debe estar entre 14.3 y 14.7 V.
5. Apaga el motor y desconecta el multímetro.

## Corriente de carga

1. Usa una batería cargada, con 12.5 ± 0.3 V en reposo.
2. Con el motor apagado, pon el multímetro en 10 A DC e intercálalo en serie en la línea de carga: punta positiva al cable blanco/negro y punta negativa al cable blanco.
3. Arranca el motor y llévalo a 4000 rpm.
4. Lee la corriente: no debe pasar de 5 A.
5. Apaga el motor, retira el multímetro y vuelve a unir la línea de carga.

## Si los valores no se cumplen

1. Revisa el fusible de 20 A y la limpieza de los bornes de la batería.
2. Mide la bobina de carga del estator: 0.8 – 1.1 Ω entre los dos cables azul/blanco.
3. Revisa los conectores del regulador-rectificador y su masa.
4. Si la batería, el estator y el cableado están bien, reemplaza el regulador-rectificador.

> El manual no da un valor de resistencia para probar el regulador-rectificador; se descarta por eliminación.
