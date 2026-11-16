---
title: Probar el sensor de presión de aceite
summary: Comprobación de continuidad del sensor de presión de aceite contra la lectura de un manómetro.
category: especifico
difficulty: 3
time: 30 min
tools:
  - Multímetro (modo continuidad)
  - Manómetro para aceite de motor
warnings:
  - La prueba se hace con el motor en marcha. Cuidado con el escape y con las salpicaduras de aceite.
  - Si el testigo de presión de aceite parpadea en marcha, apaga el motor y revisa el nivel antes de cualquier prueba.
specs:
  - { label: Presión de aceite correcta, value: 0.9 a 1.1 bar en el manómetro }
  - { label: Resultado con presión correcta, value: Hay continuidad entre el cable del sensor y negro/amarillo }
sourcePages: "19, 140 y 152"
order: 351
---

## Cuándo parpadea el testigo

Según el manual, el icono de presión de aceite parpadea cuando se cumplen a la vez tres condiciones durante más de 20 segundos: motor por encima de 3500 rpm, refrigerante entre 50 °C y 60 °C y presión de aceite por debajo de 0.9 bar.

## Prueba

1. Conecta el manómetro de aceite al motor y arráncalo.
2. Comprueba que el manómetro marque entre 0.9 y 1.1 bar.
3. Con el multímetro en continuidad, mide entre el cable del sensor (punta positiva) y el cable negro/amarillo de masa (punta negativa).
4. Con la presión correcta, el multímetro debe mostrar continuidad.
5. Si la presión es correcta y no hay continuidad, reemplaza el sensor. Si la presión está por debajo de 0.9 bar, el problema está en la lubricación, no en el sensor.

> El manual nombra de tres maneras el cable del sensor: café/azul en la tabla de esta prueba, M/Rs (café/rosado) en el esquema junto a la tabla y café/verde en el diagrama del circuito. Identifícalo en el conector del propio sensor.

> El manual no indica a qué régimen ni temperatura se toman los 0.9 – 1.1 bar, ni dónde se conecta el manómetro. La condición «entre 50 °C y 60 °C» está transcrita tal como aparece.
