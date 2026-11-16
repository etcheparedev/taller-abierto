---
title: Probar el sensor de posición del acelerador (TPS)
summary: Medición del voltaje de alimentación y de señal del TPS del cuerpo de aceleración, en ralentí y con el acelerador a fondo.
category: specific
difficulty: 2
time: 30 min
tools:
  - Multímetro (escala 20 V DC)
warnings:
  - Para llegar al TPS hay que retirar el tanque de combustible. Trabaja lejos de chispas o llamas.
  - No desmontes el TPS del cuerpo de aceleración para medirlo. Sus tornillos son de seguridad y requieren un destornillador especial.
specs:
  - { label: Voltaje de entrada, value: 3.3 V DC }
  - { label: Voltaje de salida en ralentí, value: 0.5 V DC }
  - { label: Voltaje de salida con el acelerador a fondo, value: 4.35 V DC }
  - { label: Resistencia entre los pines 2 y 3, value: "1.6 – 2.4 Ω, tal como lo imprime el manual; ver nota" }
  - { label: Cables del conector, value: "Pin 1 V/A, pin 2 rojo/negro, pin 3 negro/verde" }
sourcePages: "20, 61 y 145"
order: 340
---

El TPS va montado en el cuerpo de aceleración y le informa a la ECU cuánto está abierta la mariposa. Su conector tiene tres cables.

1. Retira la cubierta del tanque y el tanque de combustible.
2. Retira la cubierta del filtro de aire junto con el elemento filtrante.
3. Pon el multímetro en la escala de 20 V DC.
4. Sin desconectar el sensor, pincha por detrás su conector en los cables rojo/negro (punta positiva) y negro/verde (punta negativa).
5. Pon el encendido en ON y lee los voltajes: 0.5 V con el acelerador cerrado y 4.35 V con el acelerador a fondo.
6. Abre y cierra despacio: el voltaje debe subir y bajar de forma continua, sin saltos.

## Si los valores no se cumplen

1. Comprueba que el juego libre del cable del acelerador sea correcto y que la mariposa cierre del todo.
2. Comprueba la alimentación del sensor.
3. Si la alimentación y la masa están bien y la señal sigue fuera de rango, reemplaza el TPS.

> La tabla del manual repite los mismos dos cables (rojo/negro y negro/verde) para las tres mediciones: entrada de 3.3 V, salida en ralentí de 0.5 V y salida a fondo de 4.35 V. No pueden medirse tres valores distintos entre el mismo par de cables: uno de ellos es el de señal y la alimentación debe medirse en el tercer cable (pin 1, que el esquema rotula V/A). Identifica la señal como la lectura que cambia al girar el acelerador. Además, la descripción del sensor en el capítulo de inyección dice que la ECU lo alimenta con 5 V, mientras que esta tabla da 3.3 V de entrada.

> El manual también indica una «resistencia de la bobina» de 1.6 – 2.4 Ω entre los pines 2 y 3. Un TPS es un potenciómetro, no una bobina, y ese valor es inusualmente bajo; puede ser una errata de unidad. Tómalo con reserva.
