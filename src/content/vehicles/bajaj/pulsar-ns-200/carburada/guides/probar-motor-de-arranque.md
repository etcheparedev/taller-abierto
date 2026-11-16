---
title: Probar el motor de arranque
summary: Medición del consumo del motor de arranque en la moto y prueba de continuidad de su armadura (inducido) desarmado.
category: especifico
difficulty: 3
time: 1 h
tools:
  - Pinza amperimétrica (escala 200 A DC)
  - Multímetro (modo continuidad)
warnings:
  - Para medir el consumo se desconectan los capuchones de bujía para que el motor no arranque. Hazlo con cuidado y mantenlos lejos de la bujía y de tus manos.
  - Mantén presionado el botón de arranque solo 3 segundos por intento.
  - Desconecta el terminal negativo de la batería antes de desmontar el motor de arranque.
specs:
  - { label: Consumo del motor de arranque, value: 30 – 38 A (con los capuchones de bujía desconectados) }
  - { label: Fusible del circuito de mando, value: Fusible 1 (20 A) }
tables:
  - title: Pruebas de la armadura
    columns: [Entre, Resultado correcto, Si no se cumple]
    rows:
      - [Cada delga del colector y el eje, No hay continuidad, Reemplazar la armadura]
      - [Cada delga y la delga contigua, Hay continuidad, Reemplazar la armadura]
  - title: Qué debe cumplirse para que gire
    note: Según el diagrama del circuito de arranque.
    columns: [Elemento, Condición]
    rows:
      - [Interruptor de encendido, En ON]
      - [Interruptor de corte del motor (kill switch), En posición de marcha]
      - [Botón de arranque, Presionado]
      - [Caja de cambios o embrague, "En neutro, o con la palanca del embrague presionada"]
      - [Relé de arranque, Cierra y conecta el cable rojo de la batería con el motor]
sourcePages: "96, 115 y 117"
order: 320
---

## Consumo en la moto

1. Pon el encendido en ON y desconecta los capuchones de las bujías.
2. Pon la pinza amperimétrica en 200 A DC y colócala alrededor del cable rojo del motor de arranque.
3. Presiona el botón de arranque durante 3 segundos y lee el consumo.
4. El valor debe estar entre 30 y 38 A.
5. Vuelve a colocar los capuchones en sus bujías.

> El manual escribe «desconecte ambos capuchones» aunque el motor tiene tres bujías. Desconecta los tres para que el motor no arranque durante la medición.

## Armadura (inducido)

1. Desmonta el motor de arranque, desármalo y saca la armadura.
2. Con el multímetro en continuidad, mide entre el eje y cada delga del colector: no debe haber continuidad en ninguna.
3. Mide entre cada delga y la contigua, recorriendo todo el colector: debe haber continuidad en todas.
4. Si alguna prueba falla, reemplaza la armadura.

## Si no gira

1. Revisa la carga de la batería y el fusible 1 (20 A).
2. Prueba el relé de arranque.
3. Prueba el interruptor del embrague y comprueba que el testigo de neutro encienda.
4. Revisa el cable rojo entre la batería, el relé y el motor, y el cable de masa del motor.

> El manual no da medidas de escobillas ni del colector, ni el procedimiento para desarmar el motor de arranque.
