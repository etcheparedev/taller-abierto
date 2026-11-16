---
title: Conocer el sistema de inyección (EMS)
summary: Qué hace cada sensor y cada actuador del sistema de gestión del motor DTS-i FI, dónde está y qué le informa a la ECU.
category: specific
difficulty: 1
specs:
  - { label: Presión de combustible, value: 2.5 – 2.9 bar }
  - { label: Ralentí, value: 1400 ± 50 rpm }
  - { label: Alimentación del TPS, value: 5 V desde la ECU }
  - { label: Rotor del sensor del cigüeñal, value: 23 dientes y un espacio vacío }
  - { label: Apertura del inyector, value: 1.5 a 10 ms }
tables:
  - title: Sensores (le informan a la ECU)
    columns: [Componente, Qué hace]
    rows:
      - [Sensor del ángulo del cigüeñal, "Captador magnético frente a los 23 dientes del rotor del magneto. Con sus pulsos la ECU calcula las revoluciones; el espacio sin diente le indica una posición fija antes del punto muerto superior"]
      - [Sensor de posición del acelerador (TPS), "Potenciómetro montado en el eje de la mariposa. Recibe 5 V de la ECU y devuelve un voltaje bajo con la mariposa cerrada y más alto a medida que se abre"]
      - [Sensor de presión y temperatura de admisión (TMAP), "Mide la presión absoluta del colector de admisión, comparada con un vacío de referencia y no con la presión atmosférica"]
      - [Sensor de temperatura del refrigerante (CTS), "Termistor NTC: su resistencia baja cuando sube la temperatura. La ECU corrige con él la inyección y el encendido"]
      - [Sensor de oxígeno (lambda), "Mide el oxígeno del gas de escape para que la ECU ajuste la mezcla"]
      - [Sensor de vuelco, "Corta el encendido si la moto se inclina demasiado. Si está desconectado, el motor no arranca y el tablero marca la falla"]
      - [Interruptor del gato lateral, "Con el gato abajo, la ECU no deja arrancar el motor, cualquiera sea la marcha"]
      - [Sensor de presión de aceite, "Mide la presión en las galerías de aceite y le avisa al tablero"]
      - [Sensor de velocidad de la rueda, "Informa la velocidad de la moto"]
      - [Interruptores de embrague y de neutro, "Habilitan el arranque"]
  - title: Actuadores (los maneja la ECU)
    columns: [Componente, Qué hace]
    rows:
      - [Bomba de combustible, "Bomba de rodillos dentro del tanque, con colador y regulador de presión. Mantiene la presión del riel y devuelve el sobrante al tanque. Se enfría y lubrica con el combustible"]
      - [Inyector, "Válvula de aguja movida por una bobina. Pulveriza el combustible en el conducto de admisión mientras dura la señal de la ECU, entre 1.5 y 10 ms"]
      - [Motor paso a paso, "Motor sin escobillas que avanza en pasos iguales y se queda en la posición ordenada; regula el aire de ralentí"]
      - [Bobina de alta 1, "Alimenta la bujía central"]
      - [Bobina de alta 2, "Alimenta las bujías izquierda y derecha"]
      - [Ventilador del radiador y su relé, "La ECU lo enciende cuando el refrigerante llega a 98 °C"]
      - [Testigo de falla (MIL), "Se enciende cuando la ECU guarda un código de falla"]
      - [Relé principal (MPRD), "Alimenta el sistema; es el relé de alimentación principal de la ECU"]
      - [Relé de la bomba de combustible, "Conecta la bomba cuando la ECU lo ordena"]
  - title: Relés auxiliares de arranque y otras unidades
    columns: [Componente, Qué hace]
    rows:
      - [Relé auxiliar de arranque 1, "De color gris. Lleva un diodo que suprime los picos de voltaje; si la moto se usa sin este relé, la ECU puede dañarse"]
      - [Relé auxiliar de arranque 2, "Aísla el circuito de arranque de la ECU. Si falla, el motor no arranca"]
      - [Relé auxiliar de arranque 3, "Enclava los interruptores de embrague y de neutro en el circuito de arranque"]
      - [Unidad de terminación, "Diodo de protección que filtra las sobretensiones para proteger la ECU"]
      - [Terminal o interfaz CAN, "Comunica la herramienta de diagnóstico con la ECU"]
      - [Módulo de control de luces, "Gestiona las luces del sistema eléctrico"]
      - [Regulador rectificador, "Convierte y regula el voltaje del magneto para cargar la batería"]
sourcePages: "19, 20, 27, 50 a 65 y 68"
order: 3
---

En la versión FI no hay carburador ni CDI. Una sola unidad, la ECU, recibe las señales de los sensores, las convierte a valores digitales y con ellas decide cuánto combustible inyectar y en qué momento saltar la chispa. También guarda los códigos de falla que se leen con el testigo del tablero o con la herramienta de diagnóstico.

![Diagrama: a la izquierda los sensores que envían señales a la ECU; a la derecha los actuadores que la ECU maneja, entre ellos la bomba, el inyector, el motor paso a paso, las bobinas y el ventilador](../images/fuel-injection-system.svg)

## Recorrido del combustible

La bomba toma el combustible del tanque a través de su colador y lo envía presurizado al filtro de combustible, y de ahí al inyector. Al final del circuito, el regulador de presión mantiene constante la diferencia de presión en el inyector y devuelve el sobrante al tanque; ese retorno mantiene fresco el combustible y evita que se formen burbujas de vapor. El inyector trabaja con una presión cercana a 2.5 bar.

## Dónde están las piezas

- **En el cuerpo de aceleración y la admisión:** inyector, motor paso a paso, TPS y TMAP.
- **En el motor:** sensor del ángulo del cigüeñal (lado del magneto), sensor de temperatura del refrigerante, sensor de presión de aceite y sensor de oxígeno en el escape.
- **En el tanque:** bomba de combustible y sensor de nivel, cada uno con su conector.
- **Detrás de la caja del filtro de aire, sobre el chasis:** sensor de vuelco.
- **En el mismo grupo que la caja de fusibles:** relés auxiliares de arranque 1, 2 y 3 e interfaz CAN.

## Modo limitado

Si falla un sensor o su cableado, la ECU puede usar un valor de reemplazo y encender el testigo de falla. En ese modo el motor funciona con encendido y mezcla fijos: alcanza para llegar al taller, con mucho menos rendimiento.

> El manual da dos valores para el ángulo en que el sensor de vuelco corta el encendido: más de 68° en la lista de componentes y 60° hacia cualquier lado en la explicación de su funcionamiento. No da valores de resistencia ni de voltaje para probar los sensores en este capítulo; las revisiones eléctricas están en el capítulo del sistema eléctrico del manual.
