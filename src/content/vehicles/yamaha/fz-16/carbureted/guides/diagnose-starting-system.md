---
title: Diagnosticar el sistema de arranque
summary: Qué revisar cuando el motor de arranque no gira, con la prueba directa del motor, los relés y los límites de servicio.
category: specific
difficulty: 3
time: 1 h
tools:
  - Multímetro
  - Cable de puente de sección igual o mayor que el cable de la batería
  - Batería de 12 V cargada
warnings:
  - La prueba con puente produce chispas. Hazla lejos de gasolina o gases inflamables.
  - El cable de puente debe tener al menos la sección del cable de la batería. Uno más fino se quema.
  - Pon la caja de cambios en neutro antes de puentear el motor de arranque.
specs:
  - { label: Potencia del motor de arranque, value: 0.25 kW }
  - { label: Bobina del relé de arranque, value: 3.51 – 4.29 Ω }
  - { label: Bobina del relé de corte, value: 90.0 – 110.0 Ω }
  - { label: Diámetro mínimo del conmutador, value: 17.6 mm }
  - { label: Rebaje de mica, value: 2.10 mm }
  - { label: Longitud de escobilla, value: 7.5 mm · límite 4.0 mm }
  - { label: Resistencia de la armadura (conmutador), value: 0.0315 – 0.0385 Ω a 20 °C }
tables:
  - title: Orden de diagnóstico
    columns: [Paso, Revisar, Si falla]
    rows:
      - ["1", Fusible, Cambiar el fusible]
      - ["2", Batería, "Limpiar bornes, recargar o cambiar la batería"]
      - ["3", Motor de arranque con puente directo, "Si gira, sigue en el paso 5. Si no gira, paso 4"]
      - ["4", Motor de arranque desarmado, Reparar o cambiar el motor de arranque]
      - ["5", Relé de corte del arranque, Cambiar el relé]
      - ["6", Relé de arranque, Cambiar el relé]
      - ["7", Interruptor principal, Cambiar el interruptor]
      - ["8", Interruptor de parada del motor, Cambiar el interruptor derecho del manubrio]
      - ["9", Interruptor de neutro, Cambiar el interruptor]
      - ["10", Interruptor del embrague, Cambiar el interruptor]
      - ["11", Botón de arranque, Cambiar el interruptor derecho del manubrio]
      - ["12", Cableado del sistema de arranque, Reparar o conectar el cableado]
sourcePages: "30, 170, 224 a 227, 254, 255, 257 y 258"
order: 200
---

## Cómo funciona el corte de arranque

Con el interruptor principal en ON y el interruptor de parada en posición de marcha, el motor de arranque solo recibe corriente si se cumple al menos una de estas condiciones:

- La caja está en neutro.
- La palanca del embrague está apretada.

Si la moto no arranca con una marcha puesta y el embrague apretado, pero sí en neutro, sospecha del interruptor del embrague.

## Prueba directa del motor de arranque

1. Pon la caja en neutro.
2. Une con el cable de puente el borne positivo de la batería y el cable del motor de arranque.
3. Si el motor gira, está bien: el problema está en los relés, los interruptores o el cableado. Si no gira, hay que desmontarlo y revisarlo.

## Relés

1. Desconecta el relé del arnés.
2. Alimenta su bobina con una batería de 12 V y mide continuidad entre los terminales de salida con el multímetro en la escala de ohmios más baja.
3. Con la bobina alimentada debe haber continuidad. Si no, cambia el relé.

> El manual identifica los terminales solo con una ilustración. El conector del relé de arranque lleva cables rojo, negro, azul/blanco y rojo/blanco; el del relé de corte, rojo/negro, azul/negro y rojo/blanco. La ilustración no deja del todo claro qué par es la bobina y cuál el contacto: confírmalo con el diagrama de cableado antes de alimentar el relé.

## Motor de arranque desarmado

1. Antes de abrirlo, marca la posición de la carcasa respecto a la tapa delantera.
2. Si el conmutador está sucio, límpialo con lija de grano 600.
3. Mide el diámetro del conmutador. Por debajo de 17.6 mm se cambia el motor de arranque.
4. Mide el rebaje de mica (2.10 mm). Si es menor, rebájalo con una hoja de sierra afilada a la medida.
5. Mide la resistencia de la armadura en el conmutador: 0.0315 – 0.0385 Ω. Fuera de rango, se cambia el motor.
6. Mide las escobillas. Por debajo de 4.0 mm se cambia el conjunto de tapa delantera y portaescobillas.
7. Revisa los dientes del piñón, el rodamiento y el sello de aceite.
8. Arma alineando las marcas y monta el motor con sus tornillos a 10 N·m (1.0 kgf·m).
