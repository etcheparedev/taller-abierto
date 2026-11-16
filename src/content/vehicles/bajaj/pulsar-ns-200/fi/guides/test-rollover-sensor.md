---
title: Probar el sensor de vuelco
summary: Medición de los voltajes del sensor que apaga el motor cuando la moto se inclina más de 60°.
category: specific
difficulty: 2
time: 30 min
tools:
  - Multímetro (escala 20 V DC)
  - Llave para los 2 pernos del sensor
warnings:
  - Para llegar al sensor hay que retirar el tanque de combustible. Trabaja lejos de chispas o llamas.
  - Móntalo siempre en su posición original. Un sensor mal orientado apaga el motor o deja de protegerlo.
tables:
  - title: Voltajes del sensor
    note: Multímetro en 20 V DC, con el encendido y el corte del motor en ON. La punta negativa va en el cable negro/amarillo.
    columns: [Medición, Punta positiva, Posición, Valor]
    rows:
      - [Voltaje de entrada, Rojo/azul, Cualquiera, 5 V DC]
      - [Voltaje de salida, Café/verde, Normal, 4.8 – 4.9 V DC]
      - [Voltaje de salida, Café/verde, Inclinado más de 60°, 2 – 2.2 V DC]
sourcePages: "63, 141 y 148"
order: 348
---

El sensor de vuelco es una unidad sellada con una pesa interna. Si la moto se inclina más de 60° hacia cualquier lado, le avisa a la ECU, que apaga el motor.

1. Retira los asientos, la cubierta del tanque y el tanque de combustible.
2. Pon el encendido y el corte del motor en ON y el multímetro en 20 V DC.
3. Sin desconectar el sensor, pincha por detrás su conector y mide entre el cable rojo/azul y el negro/amarillo: deben llegar 5 V.
4. Mide entre el cable café/verde y el negro/amarillo con el sensor en su posición normal: 4.8 – 4.9 V.
5. Quita los 2 pernos del sensor y, sin desconectarlo, inclínalo más de 60°: la salida debe bajar a 2 – 2.2 V.
6. Si la alimentación llega y la salida no cambia, reemplaza el sensor: desconecta su conector y retíralo.
7. Monta el sensor en la misma posición, con sus 2 pernos.

> El manual no da el torque de los pernos del sensor. Tampoco describe cómo se restablece el sistema después de una caída.
