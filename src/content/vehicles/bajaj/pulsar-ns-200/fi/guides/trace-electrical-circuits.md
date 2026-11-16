---
title: Seguir una falla con los circuitos eléctricos
summary: Qué cables usa cada circuito de la versión FI según los diagramas del manual, y cómo recorrerlo con el multímetro sin dañar la instalación ni la ECU.
category: specific
difficulty: 3
time: 1 h
tools:
  - Multímetro (20 V DC y continuidad)
  - Fusibles de repuesto del mismo amperaje que los originales
warnings:
  - No pongas ningún cable a masa para buscar chispa o corriente. Un corto puede dañar la ECU.
  - No cortes ni empalmes el cableado.
  - No reemplaces fusibles por otros de mayor amperaje.
  - No apliques agua a presión sobre conectores, comandos del manubrio ni tablero.
  - No midas con el multímetro la unidad de terminación ni la unidad de terminación CAN. El manual indica probarlas solo por sustitución.
tables:
  - title: Dónde está cada componente
    columns: [Componente, Ubicación]
    rows:
      - [Batería, Bajo el asiento del conductor]
      - [ECU, Enganchada a la sujeción de la batería]
      - [Unidad del ABS, Debajo del tanque de combustible]
      - [Condensador, Acoplado al regulador-rectificador]
      - [Bobinas de encendido y sensor de vuelco, "Bajo el tanque de combustible (hay que retirarlo para llegar)"]
      - ["TPS, sensor TMAP, motor paso a paso e inyector", En el cuerpo de aceleración y la admisión]
  - title: Circuitos según los diagramas
    note: Colores tal como aparecen en los diagramas del manual, traducidos del inglés.
    columns: [Circuito, Recorrido principal]
    rows:
      - [Carga, "Magneto (tres cables amarillos) → regulador-rectificador → blanco/negro → fusible principal → rojo → batería. Masa del regulador por cable negro"]
      - [Luz de freno, "Caja de fusibles → café → interruptor delantero o trasero → azul → luz trasera LED → masa (negro/amarillo)"]
      - [Bocina, "Caja de fusibles → café → bocina → negro → botón del comando → masa (negro)"]
      - [Direccionales, "Caja de fusibles → café → módulo de control de luces → naranja → comando izquierdo → verde (izquierdas) o gris (derechas) → bombillas → masa (negro/amarillo)"]
      - [Medidor de combustible, "Tablero → blanco/amarillo → sensor de nivel del tanque → masa (negro/amarillo)"]
      - [Ventilador del radiador, "Sensor de temperatura del motor → ECU → relé del ventilador → motor del ventilador (gris/amarillo) → masa (negro/amarillo)"]
      - [Testigo de presión de aceite, "Tablero → café/verde → sensor de presión de aceite → masa (negro/amarillo)"]
      - [Testigo del gato lateral, "Sensor del gato (rosado, amarillo/negro y rojo) → ECU → naranja/café → tablero"]
      - [Tacómetro, "Sensor del cigüeñal en el magneto (blanco/rojo y negro/amarillo) → ECU → negro/violeta → tablero"]
      - [Velocímetro, "Tablero → rojo/blanco → sensor de velocidad → azul/blanco → tablero. Masa del sensor por negro/amarillo. El tablero pasa la velocidad a la ECU por blanco/azul"]
  - title: Abreviaturas de colores en los esquemas de prueba
    note: Los esquemas pequeños del capítulo eléctrico usan iniciales en español. Las marcadas como confirmadas coinciden con el color que el propio manual escribe en la tabla de esa prueba.
    columns: [Abreviatura, Color, Confirmada]
    rows:
      - [N, Negro, Sí]
      - [A, Amarillo, Sí]
      - [B, Blanco, Sí]
      - [R, Rojo, Sí]
      - [Az, Azul, Sí]
      - [M, Café (marrón), Sí]
      - [V, Verde, Sí]
      - [Rs, Rosado, Sí]
      - [Na, Naranja, Sí]
      - [Vi, Violeta, Sí]
      - [G, Gris, "No"]
sourcePages: "50 a 53, 123, 132 a 147 y 152"
order: 300
---

Todos los circuitos comparten el mismo tronco: del positivo de la batería sale un cable rojo que pasa por el fusible principal y sigue como blanco/negro hasta el interruptor de encendido (cable blanco). Con la llave en ON, el interruptor entrega corriente por el cable café, que sigue como café/azul hacia la caja de fusibles. De la caja salen las alimentaciones del tablero y de la ECU (gris/rosado) y la del interruptor de corte del motor, que devuelve la corriente por el cable gris/rojo. Casi todas las masas son negro/amarillo.

## Método

1. Identifica en la tabla el circuito que falla.
2. Revisa el fusible principal y los de la caja, a la vista y con el multímetro en continuidad.
3. Comprueba la batería: con el encendido apagado debe marcar de 13 a 13.2 V entre sus bornes.
4. Pon el encendido y el interruptor de corte del motor en ON.
5. Con el multímetro en 20 V DC y la punta negativa en masa, mide con la punta positiva a lo largo del recorrido del circuito, desde la caja de fusibles hacia el componente, pinchando los conectores por detrás.
6. El punto donde deja de haber voltaje señala el tramo o componente con la falla: un conector suelto, un interruptor o un cable cortado.
7. Si el voltaje llega hasta el componente, revisa su masa: con el encendido apagado, mide continuidad entre el cable de masa y el chasis.
8. Prueba el componente con su guía específica antes de reemplazarlo.
9. Si el testigo de falla del motor está encendido, la avería está registrada en la ECU y se lee con la herramienta de diagnóstico.

## Al terminar

1. Deja cada conector bien trabado y dentro de su fuelle de goma.
2. Devuelve el cableado a su recorrido original y sujétalo con sus precintos.
3. Comprueba que el manubrio gire de tope a tope sin tensar ningún ramal.

> El manual trae además dos diagramas del sistema de gestión del motor (EMS, partes 1 y 2), con la ECU, los relés auxiliares, los sensores y los actuadores. Están impresos a un tamaño que no permite leer con seguridad los colores de cada cable, por eso no se transcriben aquí.

> Los diagramas no indican el amperaje de ningún fusible ni numeran los pines del tablero o de la ECU.

> El manual se contradice en el cable del sensor de presión de aceite: el diagrama del circuito lo dibuja café/verde, la tabla de prueba dice café/azul y el esquema junto a esa tabla lo rotula M/Rs (café/rosado).

> Dos módulos no se pueden medir. La unidad de terminación lleva un diodo de protección contra picos de voltaje para la ECU y dos diodos del circuito de neutro; su síntoma de falla es que el testigo de neutro se enciende con una marcha puesta y el embrague presionado. La unidad de terminación CAN mantiene la comunicación entre la ECU y la herramienta de diagnóstico. Ambas se prueban solo por sustitución.
