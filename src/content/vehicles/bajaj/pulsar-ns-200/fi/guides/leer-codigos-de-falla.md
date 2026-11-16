---
title: Leer los códigos de falla de la inyección
summary: Cómo contar los parpadeos del testigo de falla (MIL) y la lista completa de códigos de la ECU con su significado.
category: especifico
difficulty: 2
time: 15 min
tools:
  - Papel y lápiz para anotar los parpadeos
  - Herramienta de diagnóstico (escáner), si la tienes, para leer el código P completo
warnings:
  - Si el testigo de falla se enciende en marcha, el motor puede pasar a modo limitado, con encendido y mezcla fijos y mucho menos rendimiento. Sirve para llegar al taller, no para seguir usando la moto.
  - No desconectes la batería ni ningún conector de la inyección con el encendido en ON.
specs:
  - { label: Parpadeo largo, value: Vale 10 }
  - { label: Parpadeo corto, value: Vale 1 }
  - { label: Borrado de los códigos, value: 3 ciclos de conducción }
tables:
  - title: Códigos de falla
    note: "Ciclo: cantidad de ciclos de conducción que indica la lista del manual para cada código; «inmediato» significa que el código de parpadeo se activa enseguida. El texto que muestra la herramienta de diagnóstico puede diferir un poco. El manual marca los códigos del sensor de vuelco y del gato lateral como no aplicables a otro vehículo de la marca (RE 60), con el que comparte esta lista."
    columns: [Parpadeo, Código, Ciclo, Significado]
    rows:
      - ["02", P0336, "3", Sensor de posición del cigüeñal · señal fuera de rango o con mal rendimiento]
      - ["06", P0122, "3", Sensor de posición del acelerador (TPS) · circuito con señal baja]
      - ["06", P0123, "3", Sensor de posición del acelerador (TPS) · circuito con señal alta]
      - ["09", P0107, "3", Presión absoluta del colector o barométrica (TMAP) · señal baja]
      - ["09", P0108, "3", Presión absoluta del colector o barométrica (TMAP) · señal alta]
      - ["11", P0506, "1", Control de aire de ralentí · revoluciones más bajas de lo esperado]
      - ["11", P0507, "1", Control de aire de ralentí · revoluciones más altas de lo esperado]
      - ["12", P0117, "3", Sensor de temperatura del refrigerante · señal baja]
      - ["12", P0118, "3", Sensor de temperatura del refrigerante · señal alta]
      - ["13", P0112, inmediato, Sensor de temperatura del aire de admisión · señal baja]
      - ["13", P0113, inmediato, Sensor de temperatura del aire de admisión · señal alta]
      - ["14", P1609, inmediato, Señal de salida de consumo de combustible · circuito abierto]
      - ["14", P1610, inmediato, Señal de salida de consumo de combustible · corto a masa]
      - ["14", P1611, inmediato, Señal de salida de consumo de combustible · corto a batería]
      - ["15", P1501, "1", Sensor de vuelco · señal no admisible]
      - ["15", P1502, "1", Sensor de vuelco · circuito abierto]
      - ["15", P1503, "1", Sensor de vuelco · corto a masa]
      - ["15", P1504, "1", Sensor de vuelco · corto a batería]
      - ["16", P0480, "1", Relé del ventilador del radiador · falla en el circuito de control]
      - ["16", P0691, "1", Ventilador del radiador · circuito de control con señal baja]
      - ["16", P0692, "1", Ventilador del radiador · circuito de control con señal alta]
      - ["17", P0130, "3", Sensor de oxígeno · falla del circuito]
      - ["17", P0131, "3", Sensor de oxígeno · voltaje bajo]
      - ["17", P0132, "3", Sensor de oxígeno · voltaje alto]
      - ["17", P0134, "3", Sensor de oxígeno · sin actividad]
      - ["18", P0650, inmediato, Testigo de falla (MIL) · circuito de control]
      - ["18", P1604, inmediato, Testigo de falla (MIL) · circuito de control con señal baja]
      - ["18", P1605, inmediato, Testigo de falla (MIL) · circuito de control con señal alta]
      - ["19", P1601, inmediato, Indicador del tanque de combustible · circuito abierto]
      - ["19", P1602, inmediato, Indicador del tanque de combustible · señal baja]
      - ["19", P1603, inmediato, Indicador del tanque de combustible · señal alta]
      - ["21", P0689, inmediato, Relé de potencia de la ECU · circuito de detección con señal baja]
      - ["22", P1606, inmediato, Señal de velocidad del motor · circuito abierto]
      - ["22", P1607, inmediato, Señal de velocidad del motor · señal baja]
      - ["22", P1608, inmediato, Señal de velocidad del motor · señal alta]
      - ["23", P0501, "3", Sensor de velocidad del vehículo · señal fuera de rango o con mal rendimiento]
      - ["24", P0562, inmediato, Voltaje del sistema bajo]
      - ["24", P0563, inmediato, Voltaje del sistema alto]
      - ["24", P1510, inmediato, Voltaje del sistema · falla detectada en la ECU]
      - ["25", P1505, "1", Sensor del gato lateral · señal no admisible]
      - ["25", P1506, "1", Sensor del gato lateral · circuito abierto]
      - ["25", P1507, "1", Sensor del gato lateral · corto a masa]
      - ["25", P1508, "1", Sensor del gato lateral · corto a batería]
      - ["26", P0642, "3", Voltaje de referencia de sensores «A» · bajo]
      - ["26", P0643, "3", Voltaje de referencia de sensores «A» · alto]
      - ["27", P0652, "1", Voltaje de referencia de sensores «B» · bajo]
      - ["27", P0653, "1", Voltaje de referencia de sensores «B» · alto]
      - ["33", P0201, "1", Inyector del cilindro 1 · circuito abierto]
      - ["33", P0261, "1", Inyector del cilindro 1 · señal baja]
      - ["33", P0262, "1", Inyector del cilindro 1 · señal alta]
      - ["41", P0627, "1", Bomba de combustible · circuito de control abierto]
      - ["41", P0628, "1", Bomba de combustible · circuito de control con señal baja]
      - ["41", P0629, "1", Bomba de combustible · circuito de control con señal alta]
      - ["45", P0030, "3", Calentador del sensor de oxígeno · circuito de control]
      - ["45", P0031, "3", Calentador del sensor de oxígeno · circuito de control con señal baja]
      - ["45", P0032, "3", Calentador del sensor de oxígeno · circuito de control con señal alta]
      - ["49", P0508, "3", Sistema de control de aire de ralentí · circuito con señal baja]
      - ["49", P0509, "3", Sistema de control de aire de ralentí · circuito con señal alta]
      - ["49", P0511, "3", Sistema de control de aire de ralentí · falla del circuito]
sourcePages: "19, 54, 65 a 67 y 76"
order: 5
---

Cuando la ECU detecta una falla en un sensor, un actuador o su cableado, guarda un código y enciende el testigo de falla del tablero (MIL). Si el que falla es un solo sensor, la ECU puede reemplazar su lectura por un valor fijo para que el motor siga funcionando. El código se lee de dos maneras: contando los parpadeos del testigo o conectando la herramienta de diagnóstico, que muestra el código P completo.

![Ejemplo de lectura: un parpadeo largo y dos cortos forman el código 12; dos largos y uno corto, el 21. Con varias fallas, los códigos salen de menor a mayor y la serie se repite](../images/codigos-de-parpadeo.svg)

## Contar los parpadeos

1. Deja la moto detenida, con el motor en ralentí o apagado: el testigo solo parpadea en esas condiciones. En marcha queda encendido fijo.
2. Observa el testigo de falla y cuenta los parpadeos largos: cada uno vale 10.
3. Cuenta los parpadeos cortos que siguen: cada uno vale 1.
4. Suma los dos grupos. Por ejemplo, un largo y dos cortos dan el código 12.
5. Si hay varias fallas guardadas, anótalas todas: la ECU las muestra una tras otra, empezando por el número más bajo, y después repite la serie. Con las fallas 21 y 12 guardadas, verás 12, 21, 12, 21 y así sucesivamente.
6. Busca cada número en la columna «Parpadeo» de la tabla. Un mismo número de parpadeo agrupa varios códigos P del mismo componente; para saber cuál es exactamente hace falta la herramienta de diagnóstico.

## Después de reparar

1. Corrige la causa: revisa primero el conector y el cableado del componente señalado, que deben estar limpios, firmes y sin cables quemados.
2. Usa la moto con normalidad. Según el manual, hacen falta 3 ciclos de conducción para que se borren todos los códigos.

> El manual dice que la serie de parpadeos se repite «hasta que se abra el terminal de autodiagnóstico», pero no explica dónde está ese terminal ni cómo se usa. La herramienta de diagnóstico se conecta por la interfaz CAN, que el manual ubica en el mismo grupo que la caja de fusibles y los relés auxiliares de arranque; no da el código de parte de la herramienta.
