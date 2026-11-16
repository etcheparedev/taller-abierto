---
title: Probar el termostato y el sensor de temperatura
summary: Comprobación del termostato en caliente y de la resistencia del sensor de temperatura del refrigerante.
category: specific
difficulty: 2
time: 30 min
tools:
  - Multímetro (escala 20 kΩ)
  - Recipiente con agua o aceite y fuente de calor
  - Termómetro
  - Llave dinamométrica
warnings:
  - Cuidado con las quemaduras al calentar el agua o el aceite.
  - Trabaja con el motor frío; el sistema de refrigeración está a presión en caliente.
specs:
  - { label: Inicio de apertura, value: 82 °C (88 ± 2 °C según la carta de refrigeración) }
  - { label: Apertura total, value: 96 °C (± 2 °C según la carta de refrigeración) }
  - { label: Torque del sensor de temperatura, value: 1.2 – 1.4 kgf·m }
tables:
  - title: Resistencia del sensor de temperatura
    note: Medida entre los pines 1 y 2 del sensor, con el multímetro en la escala de 20 kΩ.
    columns: [Temperatura (°C), Resistencia (kΩ)]
    rows:
      - ["0", 5.31 – 6.11]
      - ["10", 3.44 – 3.92]
      - ["20", 2.28 – 2.58]
      - ["25", 1.88 – 2.12]
      - ["30", 1.55 – 1.75]
      - ["40", 1.06 – 1.21]
      - ["50", 0.75 – 0.86]
sourcePages: "65, 69, 70, 109 y 125"
order: 40
---

## Termostato

1. Retira el termostato y sumérgelo en agua o aceite junto con un termómetro.
2. Calienta de a poco y observa la válvula.
3. Debe empezar a abrir a los 82 °C y quedar totalmente abierta a los 96 °C. Si no lo hace, reemplázalo.

> El manual se contradice: la descripción del sistema y la página de control indican 82 °C para el inicio de apertura, y la carta de refrigeración indica 88 ± 2 °C. Ante la duda, usa el valor grabado en el propio termostato.

![Escala de temperatura: a 82 °C abre el termostato, a 96 °C queda abierto, a 98 °C enciende el ventilador, a 92 °C se apaga y a 115 °C aparece el aviso](../images/cooling-temperatures.svg)

## Sensor de temperatura del refrigerante

1. Desconecta el conector del sensor.
2. Con el multímetro en la escala de 20 kΩ, mide entre los pines 1 y 2.
3. Compara la lectura con la tabla según la temperatura del sensor.
4. Si cambias el sensor, apriétalo a 1.2 – 1.4 kgf·m.

El cable negro/blanco del sensor recibe 4.6 V con el conector suelto; al conectarlo, el voltaje baja a unos 2.4 V por la resistencia del sensor.

El CDI usa esta señal para activar el relé del ventilador cuando el refrigerante supera los 98 °C y para encender el aviso del tablero a los 115 °C.
