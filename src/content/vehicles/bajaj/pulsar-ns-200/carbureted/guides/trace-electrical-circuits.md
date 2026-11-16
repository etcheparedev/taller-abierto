---
title: Seguir una falla con los circuitos eléctricos
summary: Dónde está cada componente, qué fusible y qué cables usa cada circuito, y cómo recorrerlo con el multímetro sin dañar la instalación.
category: specific
difficulty: 3
time: 1 h
tools:
  - Multímetro (20 V DC y continuidad)
  - Fusibles de repuesto de 20 A y 15 A
warnings:
  - No pongas ningún cable a masa para buscar chispa o corriente.
  - No cortes, empalmes ni repares el cableado. Un ramal dañado se cambia.
  - No retires fusibles ni los reemplaces por otros de mayor amperaje.
  - No apliques agua a presión sobre conectores, interruptores ni tablero.
  - No agregues accesorios como alarmas, bocinas extra o más grandes, luces musicales, zumbadores, bombillas de mayor potencia o destelladores que enciendan las cuatro direccionales a la vez.
tables:
  - title: Dónde está cada componente
    columns: [Componente, Ubicación]
    rows:
      - [Batería, Bajo el asiento delantero]
      - [Caja de fusibles, Junto a la batería]
      - [Unidad de control de luces, "Bajo el asiento, detrás de la batería"]
      - [CDI, "Bajo el asiento, detrás de la unidad de control de luces"]
      - [Relé del radiador, "Lado derecho, junto al destellador (flasher)"]
      - [Destellador de direccionales (flasher), "Lado derecho, junto al relé del radiador"]
      - [Regulador-rectificador, "En el costado del chasis, junto al relé de arranque"]
      - [Relé de arranque, Junto al regulador-rectificador]
  - title: Circuitos según los diagramas
    note: Colores tal como los abrevia el manual. La leyenda está en la tabla siguiente.
    columns: [Circuito, Fusible, Recorrido principal]
    rows:
      - [Arranque, 1 (20 A), "Interruptor de encendido → corte del motor (Gr/R) → botón de arranque (R/W) → bobina del relé → interruptor de neutro (Lg) o del embrague (Y/G) → masa. El relé une el cable rojo (R) de la batería con el motor de arranque"]
      - [Carga, 20 A, "Magneto (dos cables L/W) → regulador-rectificador → cable W → fusible → cable W/B → batería. Masa del regulador por B/Y"]
      - [Encendido, 20 A, "Interruptor de encendido → corte del motor (Gr/R, +12 V al CDI) → CDI → bobina 1 (bujía central) y bobina 2 (bujías izquierda y derecha). Señales: pulsora (W/R) y TPS (Pi)"]
      - [Bocina, 2 (15 A), "Fusible 2 → cable Br → bocina → cable B → botón de la bocina → masa"]
      - [Luz de freno, 2 (15 A), "Fusible 2 → cable Br → interruptor delantero o trasero → cable L → luz trasera LED → masa (B/Y)"]
      - [Direccionales, 2 (15 A), "Fusible 2 → relé destellador → interruptor de direccionales → cable G (izquierdas) o Gr (derechas) → bombillas de 12 V 10 W → masa (B/Y)"]
      - [Luces, 2 (15 A), "Interruptor de luces y comando izquierdo → unidad de control de luces → faro HS1, luces de posición y luz trasera LED"]
      - [Ventilador del radiador, 1 (20 A), "Sensor de temperatura (B/W) → CDI → relé del ventilador (L/G) → ventilador (R/L) → masa (B/Y)"]
      - [Testigo de neutro, 1 (20 A), "Tablero pin 9 → cable Lg → interruptor de neutro → masa"]
      - [Testigo del gato lateral, 1 (20 A), "Tablero pin 4 → cable Or/Br → interruptor del gato lateral → masa (B/Y)"]
      - [Testigo de presión de aceite, 1 (20 A), "Tablero pin 3 → cable Br/G → interruptor de presión de aceite → masa"]
      - [Medidor de combustible, 1 (20 A), "Tablero pin 13 → cable W/Y → flotador del tanque → masa (B/Y)"]
      - [Velocímetro, 1 (20 A), "Tablero pin 2 → cable R/W → sensor de velocidad → cable L/W → tablero pin 12. Masa del sensor por B/Y"]
      - [Tacómetro, 1 (20 A), "CDI y bobina 1 → cable B → tablero pin 8"]
  - title: Abreviaturas de colores
    note: El manual no trae leyenda. Las marcadas como confirmadas coinciden con el color que el propio manual escribe en sus tablas de prueba; las demás siguen la convención habitual de Bajaj.
    columns: [Abreviatura, Color, Confirmada]
    rows:
      - [B, Negro, Sí]
      - [W, Blanco, Sí]
      - [R, Rojo, Sí]
      - [Y, Amarillo, Sí]
      - [L, Azul, Sí]
      - [Br, Café, Sí]
      - [Lg, Verde claro, Sí]
      - [Pi, Rosado, Sí]
      - [G, Verde, "Sí (en Y/G, amarillo/verde)"]
      - [Gr, Gris, "No"]
      - [Or, Naranja, "No"]
  - title: Pines del conector del tablero
    columns: [Pin, Función]
    rows:
      - ["1", Alimentación del tablero con el encendido en ON]
      - ["2", Alimentación del sensor de velocidad]
      - ["3", Entrada del interruptor de presión de aceite]
      - ["4", Entrada del interruptor del gato lateral]
      - [6 y 7, Masa]
      - ["8", Señal del tacómetro]
      - ["9", Testigo de neutro]
      - [10 y 11, Testigos de direccional izquierda y derecha]
      - ["12", Señal del sensor de velocidad]
      - ["13", Medidor de combustible]
      - ["16", Alimentación permanente de la batería]
sourcePages: "96, 105 y 116 a 123"
order: 300
---

Todos los circuitos comparten el mismo tronco: el positivo de la batería sale por el cable blanco/negro (W/B), pasa por el fusible 1 de 20 A y llega por el cable blanco (W) al interruptor de encendido. Con la llave en ON, el interruptor entrega corriente por el cable café (Br), que sigue como café/azul (Br/L) hacia el interruptor de corte del motor y hacia el fusible 2 de 15 A.

## Método

1. Identifica en la tabla el circuito que falla y su fusible.
2. Revisa ese fusible a la vista y con el multímetro en continuidad.
3. Comprueba la batería: con el encendido apagado, mide el voltaje entre sus bornes.
4. Pon el encendido en ON y el interruptor de corte del motor en posición de marcha.
5. Con el multímetro en 20 V DC y la punta negativa en masa, mide con la punta positiva a lo largo del recorrido del circuito, desde el fusible hacia el componente, pinchando los conectores por detrás.
6. El punto donde deja de haber voltaje señala el tramo o componente con la falla: un conector suelto, un interruptor o un cable cortado.
7. Si el voltaje llega hasta el componente, revisa su masa: con el encendido apagado, mide continuidad entre el cable de masa (negro/amarillo en la mayoría de los circuitos) y el chasis.
8. Prueba el componente con su guía específica antes de reemplazarlo.

## Al terminar

1. Deja cada conector bien trabado y dentro de su fuelle de goma.
2. Devuelve el cableado a su recorrido original y sujétalo con sus precintos.
3. Comprueba que el manubrio gire de tope a tope sin tensar ningún ramal.

> El manual advierte que las fallas del cableado causadas por cortes, empalmes, accesorios o agua a presión no las cubre la garantía.

> Los diagramas no numeran igual el fusible en todos los circuitos: en carga y encendido aparece solo como «fusible (20 A)», que por el recorrido es el fusible 1.
