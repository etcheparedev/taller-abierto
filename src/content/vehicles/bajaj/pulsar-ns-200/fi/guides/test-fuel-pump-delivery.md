---
title: Probar la entrega de la bomba de combustible
summary: Medición del caudal de la bomba con el tanque fuera de la moto y una batería externa, 180 ml en 10 segundos.
category: specific
difficulty: 2
time: 45 min
tools:
  - Conector de prueba de la bomba, con pinzas para batería e interruptor ON/OFF
  - Batería de 12 V cargada
  - Jarra medidora limpia
  - Cronómetro
  - Multímetro (para la resistencia de la bomba)
warnings:
  - Trabaja en un lugar ventilado, lejos de chispas y llamas; se manipula gasolina al aire.
  - No hagas funcionar la bomba en seco. El combustible la enfría y la lubrica; el tanque debe tener combustible.
  - Conecta las pinzas a la batería respetando la polaridad y con el interruptor del conector en OFF.
specs:
  - { label: Entrega de la bomba, value: 180 ml en 10 segundos }
  - { label: Resistencia de la bomba, value: "2.7 + 0.1 Ω (así lo escribe el manual; la tabla eléctrica dice 2.1 Ω)" }
  - { label: Combustible mínimo en el tanque, value: 3 L }
sourcePages: "20, 31, 57, 66, 71 y 76"
order: 8
---

La bomba va dentro del tanque, en un módulo que incluye el colador de entrada y el regulador de presión, unido por una pieza en T. De ahí el combustible sale presurizado hacia el filtro y el inyector; lo que sobra vuelve al tanque.

## Preparación

1. Retira el tanque de combustible siguiendo su guía y apóyalo sobre una superficie plana y firme, con combustible adentro.
2. Enchufa el conector de prueba al conector de la bomba de combustible del tanque.
3. Con el interruptor del conector en OFF, conecta sus pinzas a la batería externa de 12 V.

## Medición

1. Sostén la jarra medidora limpia bajo la salida de combustible del tanque.
2. Pon el interruptor del conector en ON y deja funcionar la bomba 10 segundos exactos.
3. Pon el interruptor en OFF y lee la jarra: deben ser 180 ml.
4. Devuelve el combustible al tanque y desconecta la batería y el conector de prueba.

## Si entrega menos

1. Revisa que la ventilación del tanque no esté tapada.
2. Revisa que la línea y el filtro de combustible no estén obstruidos.
3. Mide la resistencia de la bomba con el multímetro y compárala con el valor del manual.
4. Lee los códigos de falla: P0627, P0628 y P0629 (parpadeo 41) corresponden al circuito de control de la bomba.

> El manual da un solo valor de entrega (180 ml en 10 segundos), sin tolerancia, y escribe la resistencia como «2.7 + 0.1 ohmios». No da código de parte para el conector de prueba. El filtro de combustible en línea se cambia en el 4.º y el 7.º servicio (7500 y 15 000 km).
