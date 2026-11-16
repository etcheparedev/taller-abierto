---
title: Probar los interruptores de freno, embrague, encendido, corte del motor y gato lateral
summary: Comprobación con multímetro cuando la luz de freno no enciende, el motor no da arranque o el tablero marca mal el gato lateral.
category: basico
difficulty: 2
time: 30 min
tools:
  - Multímetro (modo continuidad y escala 20 V DC)
warnings:
  - No lubriques los interruptores eléctricos con aceite ni grasa.
  - No apliques agua a presión directamente sobre los comandos del manubrio. Después de lavar la moto, sécalos con aire antes de usarlos.
  - No aprietes de más los tornillos que sujetan los comandos.
tables:
  - title: Continuidad esperada
    columns: [Interruptor, Cables, Estado, Resultado]
    rows:
      - [Freno delantero o trasero, Café y azul, Palanca o pedal accionado, Hay continuidad]
      - [Freno delantero o trasero, Café y azul, En reposo, No hay continuidad]
      - [Embrague, Amarillo/verde y negro/amarillo, Palanca presionada, Hay continuidad]
      - [Embrague, Amarillo/verde y negro/amarillo, Palanca suelta, No hay continuidad]
      - [Encendido, Café y blanco, Llave en ON, Hay continuidad]
      - [Encendido, Café y blanco, Llave en OFF, No hay continuidad]
      - [Corte del motor, Gris/rojo y café/azul, «Motor apagado» según el manual, Hay continuidad]
      - [Corte del motor, Gris/rojo y café/azul, «Motor encendido» según el manual, No hay continuidad]
  - title: Interruptor del gato lateral (voltajes)
    note: Multímetro en 20 V DC, con el encendido y el corte del motor en ON. La punta negativa va siempre en el cable amarillo/negro.
    columns: [Medición, Punta positiva, Posición, Valor]
    rows:
      - [Voltaje de entrada, Rojo/azul, Cualquiera, 5 V DC]
      - [Voltaje de salida, Rosado, "Gato retraído (imán frente al interruptor)", 2 – 2.2 V DC]
      - [Voltaje de salida, Rosado, "Gato extendido (imán lejos del interruptor)", 5 V DC]
sourcePages: "132, 133, 151 y 152"
order: 70
---

## Interruptor de freno delantero y trasero

1. Pon el encendido en ON.
2. Acciona la palanca del freno delantero: la luz de freno debe encenderse. Repite con el pedal del freno trasero.
3. Si no enciende con uno de los dos, desconecta ese interruptor y mide continuidad entre sus cables café y azul.
4. Con el freno accionado debe haber continuidad; en reposo, no. Si no se cumple, reemplaza el interruptor.
5. Si no enciende con ninguno, revisa los fusibles: ambos interruptores se alimentan desde la caja de fusibles por el cable café.

## Interruptor del embrague

1. Desconecta el interruptor del embrague.
2. Con la palanca suelta, mide entre el cable amarillo/verde y el negro/amarillo: no debe haber continuidad.
3. Presiona la palanca y mide de nuevo: debe haber continuidad. Si no se cumple, reemplaza el interruptor.

## Interruptor de encendido

1. Gira la llave a OFF y desconecta el conector del interruptor de encendido.
2. Mide continuidad entre los cables café y blanco.
3. En ON debe haber continuidad (suena el multímetro); en OFF, no.

## Interruptor de corte del motor

1. Pon el interruptor de encendido en OFF.
2. Con el multímetro en continuidad, mide entre los cables gris/rojo y café/azul del comando derecho.
3. Cambia el interruptor de corte de una posición a la otra: en una debe haber continuidad y en la otra no. Si da lo mismo en las dos, el interruptor está dañado.

> La tabla del manual rotula las dos filas como «motor apagado: muestra continuidad» y «motor encendido: no muestra continuidad», sin decir a qué posición del interruptor corresponde cada una. Es lo contrario de lo que se espera de un interruptor que deja pasar corriente en la posición de marcha, así que toma como criterio que el estado cambie entre una posición y otra.

## Interruptor del gato lateral

El gato lateral lleva un sensor que detecta un imán, no un contacto mecánico. La ECU no permite arrancar con el gato extendido.

1. Pon el encendido y el corte del motor en ON y el multímetro en 20 V DC.
2. Sin desconectar el sensor, mide entre el cable rojo/azul y el amarillo/negro: deben llegar 5 V.
3. Mide entre el cable rosado y el amarillo/negro con el gato retraído: 2 – 2.2 V.
4. Extiende el gato y mide de nuevo: 5 V.
5. Si la alimentación llega y la salida no cambia, reemplaza el sensor.

> Revisa también que los protectores de goma de la palanca de embrague, de la palanca de freno y del interruptor del freno trasero estén enteros.
