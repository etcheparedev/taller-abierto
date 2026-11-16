---
title: Probar el sensor de posición del acelerador (TPS)
summary: Medición del voltaje de señal del TPS del carburador con el acelerador cerrado y a fondo.
category: especifico
difficulty: 2
time: 15 min
tools:
  - Multímetro (escala 20 V DC)
warnings:
  - Haz la prueba con el motor apagado y el encendido en ON.
specs:
  - { label: Voltaje con el acelerador cerrado (0 %), value: 0.7 V ± 10 % }
  - { label: Voltaje con el acelerador a fondo (100 %), value: 3.4 – 3.8 V }
  - { label: Cables de medición, value: Rosado (positivo) y negro/amarillo (negativo) }
sourcePages: "9, 114 y 122"
order: 340
---

El TPS va montado en el carburador y le informa al CDI cuánto está abierto el acelerador. Tiene tres cables: gris/blanco (alimentación de 5 V desde el CDI), rosado (señal) y negro/amarillo (masa).

1. Pon el multímetro en la escala de 20 V DC.
2. Sin desconectar el sensor, pincha por detrás su conector: punta positiva en el cable rosado y punta negativa en el negro/amarillo.
3. Pon el encendido en ON sin arrancar el motor.
4. Con el acelerador cerrado, lee el voltaje: debe ser de 0.7 V ± 10 %.
5. Abre el acelerador a fondo y lee de nuevo: debe estar entre 3.4 y 3.8 V.
6. Abre y cierra despacio: el voltaje debe subir y bajar de forma continua, sin saltos.

## Si los valores no se cumplen

1. Comprueba que el juego libre del cable del acelerador sea correcto y que la mariposa cierre del todo.
2. Comprueba la alimentación del sensor en el cable gris/blanco.
3. Si la alimentación y la masa están bien y la señal sigue fuera de rango, reemplaza el TPS.

> El manual no describe el procedimiento de ajuste del TPS, aunque la tabla de mantenimiento lo menciona.
