---
title: Probar el módulo de control de luces (LCM)
summary: Medición de los voltajes del módulo que enciende el faro con el motor en marcha y hace de destellador de las direccionales.
category: specific
difficulty: 2
time: 15 min
tools:
  - Multímetro (escala 20 V DC)
warnings:
  - La segunda medición se hace con el motor en marcha. Asegura la moto en neutro y aléjate de la cadena, la rueda y el escape.
tables:
  - title: Voltajes del módulo
    note: Multímetro en 20 V DC, con el encendido y el corte del motor en ON. La punta negativa va en el cable amarillo/negro.
    columns: [Condición, Punta positiva, Valor]
    rows:
      - [Motor apagado (luz apagada), Violeta, 0 V DC]
      - [Motor en marcha (faro encendido), Rojo/negro, 13.5 V DC]
sourcePages: "30, 133, 134 y 152"
order: 125
---

El módulo de control de luces reúne dos funciones: gobierna el faro, que solo enciende con el motor en marcha, y es el destellador de las direccionales. Por eso una falla del módulo puede dejar la moto sin faro, sin direccionales o sin ambos.

1. Pon el interruptor de encendido y el de corte del motor en ON, sin arrancar.
2. Pon el multímetro en 20 V DC.
3. Sin desconectar el módulo, pincha por detrás su conector: punta positiva en el cable violeta y punta negativa en el amarillo/negro. Con el motor apagado debe marcar 0 V.
4. Arranca el motor.
5. Pasa la punta positiva al cable rojo/negro: con el faro encendido debe marcar 13.5 V.

## Si los valores no se cumplen

1. Revisa los fusibles y la carga de la batería.
2. Revisa la bombilla del faro y su conector.
3. Si las direccionales tampoco funcionan, revisa que llegue corriente al módulo por el cable café, desde la caja de fusibles.
4. Si la alimentación y la masa están bien, reemplaza el módulo.

> El manual no da tolerancia para los 13.5 V ni indica en qué pin del módulo está cada cable; su esquema rotula el conector de 4 pines como negro/amarillo, naranja, azul/blanco y café, y dibuja el cable violeta en un conector aparte de 2 vías.
