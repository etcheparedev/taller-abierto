---
title: Probar el sensor de oxígeno (lambda)
summary: Comprobación con multímetro del calefactor y del elemento sensor de la sonda lambda, en frío.
category: specific
difficulty: 2
time: 15 min
tools:
  - Multímetro (escala 200 Ω)
warnings:
  - Mide con el motor y el escape fríos. Los valores son a 25 °C y el sensor va roscado en el escape.
  - Mide con el encendido en OFF y el sensor desconectado del ramal.
tables:
  - title: Valores a 25 °C
    columns: [Entre, Resultado]
    rows:
      - [Pin 1 y pin 2, "Hay continuidad; el manual imprime «9 + 10 Ohm»"]
      - [Pin 3 y pin 4, "Circuito abierto (el multímetro muestra 1)"]
sourcePages: "142"
order: 347
---

1. Comprueba que el interruptor de encendido esté en OFF.
2. Desconecta el conector del sensor de oxígeno del ramal.
3. Pon el multímetro en la escala de 200 Ω.
4. Mide entre los pines 1 y 2 del conector del sensor: debe haber continuidad, con una resistencia baja.
5. Mide entre los pines 3 y 4: a 25 °C el circuito está abierto y el multímetro muestra «1».
6. Si entre 1 y 2 no hay continuidad, o entre 3 y 4 hay un valor bajo en frío, reemplaza el sensor.

> El valor de los pines 1 y 2 aparece en el manual como «9 + 10 Ohm @ 25°C». En sus tablas el signo ± suele imprimirse como +, pero aquí no queda claro si la tolerancia es de ± 10 Ω o de ± 10 %. Tómalo como una resistencia del orden de 9 Ω.

> El esquema dibuja los cables del sensor como dos blancos, uno gris y uno negro. El manual no describe una prueba del sensor en caliente; su funcionamiento se confirma con la herramienta de diagnóstico.
