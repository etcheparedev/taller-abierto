---
title: Probar el relé y el ventilador del radiador
summary: Medición de la bobina del relé y prueba directa del motor del ventilador con 12 V.
category: specific
difficulty: 2
time: 30 min
tools:
  - Multímetro (escala 200 Ω)
  - Fuente o batería de 12 V con cables de prueba
warnings:
  - Mantén dedos y cables lejos de las aspas al alimentar el ventilador.
  - Trabaja con el motor frío. No abras el circuito de refrigerante para esta prueba.
specs:
  - { label: Resistencia de la bobina del relé, value: 89 – 110 Ω }
  - { label: Aviso de sobrecalentamiento en el tablero, value: Más de 115 °C }
sourcePages: "30, 138, 144 y 152"
order: 350
---

En la versión FI el ventilador lo gobierna la ECU: lee el sensor de temperatura del motor y activa el relé del ventilador, que alimenta el motor. Si el ventilador no arranca, la temperatura sigue subiendo y por encima de 115 °C aparece el aviso de sobrecalentamiento en el tablero.

## Bobina del relé

1. Apaga el motor.
2. Desconecta el relé de su base.
3. Con el multímetro en 200 Ω, mide entre los dos terminales de la bobina del relé.
4. La resistencia debe estar entre 89 y 110 Ω.

## Ventilador

1. Desconecta el conector del motor del ventilador.
2. Aplica 12 V de corriente continua directamente al conector del motor.
3. El ventilador debe girar de inmediato y de forma suave. Si no gira, reemplázalo.

## Si el relé y el ventilador están bien

1. Revisa los fusibles.
2. Prueba el sensor de temperatura del refrigerante.
3. Revisa el cableado entre el sensor, la ECU, el relé y el ventilador. Si todo lo demás está bien, la falla está en el mando de la ECU: hace falta la herramienta de diagnóstico.

> El manual da un solo valor de bobina, bajo el título genérico «bobina de relé», sin decir a cuál de los relés auxiliares corresponde (relé principal, de la bomba de combustible y del ventilador). Tampoco numera los pines del relé ni describe la prueba de sus contactos.
