---
title: Revisar y cargar la batería
summary: Medición del voltaje en reposo y carga de la batería VRLA fuera de la moto con un cargador automático para baterías selladas.
category: basic
difficulty: 1
time: 5 a 14 h (casi todo de espera)
tools:
  - Multímetro o probador de baterías (herramienta Bajaj n.º 37204020)
  - Cargador para baterías VRLA (herramienta Bajaj n.º 37004162)
  - Vaselina (gelatina de petróleo) para los bornes
warnings:
  - Carga la batería fuera de la moto, en un lugar ventilado y lejos de chispas o llamas.
  - Nunca hagas un corto entre los bornes para ver si la batería tiene carga.
  - Si manipulas ácido de batería usa guantes, delantal y gafas de seguridad, y apoya la batería en una bandeja de plástico.
  - Es una batería sellada VRLA. No intentes abrirla ni agregarle agua o electrolito.
specs:
  - { label: Batería, value: "12 V 8 Ah, VRLA" }
  - { label: Voltaje en reposo de una batería en buen estado, value: 13 a 13.2 V }
  - { label: Corriente de carga para 8 Ah, value: 4 A }
  - { label: Tiempo de carga, value: 5 o 14 horas según el estado de la batería }
tables:
  - title: Luces del cargador que describe el manual
    columns: [Luz, Significado]
    rows:
      - [Verde (suministro), El cargador está encendido]
      - [Roja de polaridad, Las pinzas están conectadas al revés]
      - [Roja de circuito abierto (parpadea), La batería no está conectada o se soltó una pinza]
      - [Blanca (Boost), "La batería tiene menos de 5 V y el cargador intenta recuperarla"]
      - [Amarilla, Modo batería nueva seleccionado]
      - [Azul, Modo batería usada seleccionado]
      - [Roja de batería inservible, "Tras 30 minutos en Boost la batería sigue por debajo de 5 V"]
      - [Verde (cargada), La carga terminó]
sourcePages: "7, 20, 28, 35, 130, 131, 134 y 150"
order: 110
---

## Revisión

1. Quita los asientos.
2. Con el encendido apagado, mide el voltaje entre los bornes (voltaje en circuito abierto): una batería en buen estado marca de 13 a 13.2 V. Si tienes probador de baterías, úsalo para comprobar que retiene la carga.
3. Revisa que los bornes estén limpios y apretados y que la caja no tenga grietas ni hinchazón.
4. Si la batería está descargada, cárgala como sigue.

## Carga

1. Desconecta la batería, retírala de la moto y límpiala a fondo.
2. Conecta el cargador a la red y enciende su suministro principal. El cargador del manual trabaja con 230 V de corriente alterna monofásica: comprueba el voltaje del tuyo.
3. Conecta las pinzas a la batería: roja al borne positivo y negra al negativo.
4. Enciende el cargador: debe encenderse la luz verde. Si se enciende la roja de polaridad, las pinzas están invertidas.
5. Selecciona la corriente de carga: 4 A para esta batería de 8 Ah.
6. Selecciona el modo de batería usada (o nueva, si es su primera carga).
7. Deja que el cargador trabaje. Si la batería tiene menos de 5 V, primero pasa al modo Boost: a los 3 minutos vuelve a medir y, si ya superó los 5 V, cambia al modo seleccionado. Si después de 30 minutos sigue por debajo de 5 V, enciende la luz de batería inservible: esa batería ya no admite carga.
8. Espera a que se encienda la luz verde de batería cargada. La carga dura 5 o 14 horas según el estado de la batería.
9. Apaga el cargador y desconecta las pinzas.
10. Instala la batería en la moto y protege los bornes con vaselina.

> El manual describe un cargador concreto (marca Metafab) con selector de 2 A y 4 A: 2 A para baterías selladas de 3, 4 y 5 Ah, y 4 A para las de 6, 8 y 10 Ah. Con otro cargador automático para baterías VRLA, sigue sus instrucciones y respeta esas corrientes.

> El manual se contradice con la luz del modo «batería nueva»: en la lista de indicadores del cargador es amarilla y en el procedimiento dice que se enciende la verde.

> Si la batería se desconecta durante la carga, el cargador pita durante 2 minutos y parpadea la luz roja de circuito abierto.

> Para proteger los bornes el manual pide vaselina y prohíbe la grasa. Como referencia de batería cargada da dos cifras compatibles: 13 a 13.2 V en la revisión de preentrega y 13.1 ± 0.1 V antes de medir el voltaje de carga.
