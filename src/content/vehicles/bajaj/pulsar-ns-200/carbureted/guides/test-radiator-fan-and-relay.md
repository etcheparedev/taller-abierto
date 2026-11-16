---
title: Probar el relé y el ventilador del radiador
summary: Medición de la bobina del relé, prueba de sus contactos y prueba directa del ventilador con 12 V.
category: specific
difficulty: 2
time: 30 min
tools:
  - Multímetro (escala 200 Ω y modo continuidad)
  - Fuente o batería de 12 V con cables de prueba
warnings:
  - Mantén dedos y cables lejos de las aspas al alimentar el ventilador.
  - Trabaja con el motor frío. No abras el circuito de refrigerante para esta prueba.
specs:
  - { label: Resistencia de la bobina del relé, value: 110 Ω ± 10 % (pines 85 y 86) }
  - { label: Contactos del relé, value: Pines 30 y 87 }
  - { label: Encendido del ventilador, value: 98 °C }
  - { label: Aviso de temperatura en el tablero, value: 115 °C }
  - { label: Fusible del circuito, value: Fusible 1 (20 A) }
sourcePages: "96, 113, 114 y 123"
order: 350
---

El sensor de temperatura informa al CDI; cuando el refrigerante supera los 98 °C, el CDI activa el relé y este alimenta el ventilador. Si el ventilador no arranca, la temperatura sigue subiendo y a 115 °C aparece el aviso en el tablero.

El relé del radiador está en el lado derecho de la moto, junto al destellador de las direccionales.

## Bobina del relé

1. Apaga el motor.
2. Desconecta el relé.
3. Con el multímetro en 200 Ω, mide entre los pines 85 y 86.
4. La resistencia debe ser de 110 Ω ± 10 %.

## Contactos del relé

1. Aplica 12 V de corriente continua entre los pines 85 y 86: debe oírse un clic.
2. Pon el multímetro en modo continuidad.
3. Con los 12 V aplicados, mide entre los pines 30 y 87: debe haber continuidad.
4. Si no hay clic o no hay continuidad, reemplaza el relé.

## Ventilador

1. Desconecta el conector del motor del ventilador.
2. Aplica 12 V de corriente continua directamente a los dos terminales del motor.
3. El ventilador debe girar de inmediato, parejo y sin ruidos. Si no gira, reemplázalo.

## Si el relé y el ventilador están bien

1. Revisa el fusible 1 (20 A).
2. Prueba el sensor de temperatura del refrigerante.
3. Revisa el cableado entre el sensor, el CDI y el relé. Si todo lo demás está bien, el CDI no está activando el relé.

> En la tabla de esta prueba el manual rotula los pines como «relay encendido», el nombre que usa para el relé de arranque; por el título y el valor se trata del relé del radiador.
