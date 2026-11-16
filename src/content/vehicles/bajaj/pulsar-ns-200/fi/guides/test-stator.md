---
title: Probar el estator, el sensor del cigüeñal y el interruptor de neutro
summary: Medición de la bobina de carga trifásica, del sensor de ángulo del cigüeñal y de la continuidad del interruptor de neutro.
category: specific
difficulty: 2
time: 20 min
tools:
  - Multímetro (escalas 200 Ω y 2 kΩ, y modo continuidad)
warnings:
  - Mide con el interruptor de encendido y el de corte del motor en OFF.
specs:
  - { label: Bobina de carga (trifásica), value: 1 Ω entre cada par de cables amarillos }
  - { label: Sensor de ángulo del cigüeñal, value: 365 ± 20 Ω }
  - { label: Interruptor de neutro, value: Continuidad entre verde claro y negro/amarillo }
sourcePages: "135 y 137"
order: 60
---

## Bobina de carga

El estator de la versión FI es trifásico y trabaja sumergido en aceite. Del magneto salen tres cables amarillos.

1. Pon el interruptor de encendido en OFF.
2. Desconecta el conector del magneto.
3. Con el multímetro en 200 Ω, mide entre cada par de terminales: 1 y 2, 1 y 3, y 2 y 3.
4. Cada lectura debe ser de 1 Ω.

## Sensor de ángulo del cigüeñal

1. Con el encendido y el corte del motor en OFF, desconecta el conector del sensor.
2. Pon el multímetro en 2 kΩ.
3. Mide entre los cables blanco/rojo (punta positiva) y negro/amarillo (punta negativa).
4. El valor debe ser de 365 ± 20 Ω.

## Interruptor de neutro

1. Pon el multímetro en modo continuidad.
2. Mide entre el cable verde claro (punta positiva) y el negro/amarillo (punta negativa).
3. Si el multímetro suena, el interruptor está bien; si no suena, está defectuoso.

Si la bobina de carga está bien y la batería no carga, sigue con la guía del sistema de carga.

> El manual no da tolerancia para la bobina de carga ni la separación entre el sensor del cigüeñal y el rotor. Imprime el valor del sensor como «365+ 20 Ohm». Tampoco aclara en qué marcha se prueba el interruptor de neutro; por su función, la continuidad corresponde a la caja en neutro.
