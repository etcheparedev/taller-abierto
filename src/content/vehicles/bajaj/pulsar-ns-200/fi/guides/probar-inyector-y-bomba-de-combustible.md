---
title: Medir la resistencia del inyector y de la bomba de combustible
summary: Comprobación eléctrica con multímetro del bobinado del inyector y del motor de la bomba de combustible.
category: especifico
difficulty: 2
time: 30 min
tools:
  - Multímetro (escala 200 Ω)
warnings:
  - Trabaja lejos de chispas o llamas. Hay que retirar el tanque y quedan vapores de combustible.
  - Mide con el encendido apagado y el componente desconectado.
specs:
  - { label: Inyector, value: 12 ± 0.6 Ω a 20 °C (entre sus pines 1 y 2) }
  - { label: Bomba de combustible, value: "2.1 Ω (naranja/azul y negro/amarillo); ver nota" }
sourcePages: "57, 138 y 139"
order: 345
---

## Inyector

1. Retira la cubierta del tanque y el tanque de combustible.
2. Retira la cubierta del filtro de aire junto con el elemento filtrante.
3. Desconecta el conector del inyector.
4. Con el multímetro en 200 Ω, mide entre los pines 1 y 2 del inyector.
5. El valor debe ser de 12 ± 0.6 Ω a 20 °C. Si no, reemplaza el inyector.

## Bomba de combustible

1. Antes de medir, descarta lo simple: batería totalmente cargada, y fusible e interruptor de encendido en buen estado.
2. Pon el encendido en ON y escucha: la bomba debe sonar al cebarse. Si no suena, revisa primero el relé principal.
3. Apaga el encendido y desconecta el conector de la bomba.
4. Con el multímetro en 200 Ω, mide entre los cables naranja/azul (punta positiva) y negro/amarillo (punta negativa).
5. El valor estándar es de 2.1 Ω.

> El manual da dos valores para la bomba: 2.1 Ω en la tabla de pruebas del capítulo eléctrico y 2.7 ± 0.1 Ω en la descripción de la bomba del capítulo de inyección. Una lectura entre ambos valores no basta para condenar la bomba: confirma con la prueba de entrega y de presión de combustible.

> El esquema del inyector rotula sus cables como N/B (negro/blanco) y M/B (café/blanco).
