---
title: Probar el motor de arranque
summary: Medición del consumo del motor de arranque en la moto y prueba de continuidad de su armadura (inducido) desarmado.
category: specific
difficulty: 3
time: 1 h
tools:
  - Pinza amperimétrica (escala 200 A DC)
  - Multímetro (modo continuidad)
warnings:
  - Para medir el consumo se desconectan los tres capuchones de bujía para que el motor no arranque. Mantenlos lejos de las bujías y de tus manos.
  - Mantén presionado el botón de arranque solo 3 segundos por intento.
  - Desconecta el terminal negativo de la batería antes de desmontar el motor de arranque.
specs:
  - { label: Consumo del motor de arranque, value: 40 – 45 A (con los capuchones de bujía retirados) }
tables:
  - title: Pruebas de la armadura
    columns: [Entre, Resultado correcto, Si no se cumple]
    rows:
      - [Cada delga del colector y el eje, No hay continuidad, Reemplazar la armadura]
      - [Cada delga y la delga contigua, Hay continuidad, Reemplazar la armadura]
  - title: Qué debe cumplirse para que gire
    columns: [Elemento, Condición]
    rows:
      - [Interruptor de encendido, En ON]
      - [Interruptor de corte del motor, En ON]
      - [Caja de cambios o embrague, "En neutro, o con la palanca del embrague presionada"]
      - [Gato lateral, Retraído (la ECU bloquea el arranque con el gato extendido)]
      - [Botón de arranque, Presionado]
sourcePages: "30, 135 y 136"
order: 320
---

## Consumo en la moto

1. Desconecta los capuchones de las 3 bujías.
2. Pon el interruptor de encendido y el de corte del motor en ON.
3. Selecciona la escala de 200 A DC en la pinza amperimétrica y ponla en cero.
4. Coloca la pinza alrededor del cable rojo de entrada del motor de arranque.
5. Presiona el botón de arranque durante 3 segundos y lee el consumo.
6. El valor debe estar entre 40 y 45 A.
7. Vuelve a colocar los capuchones en sus bujías.

## Armadura (inducido)

1. Desmonta el motor de arranque, desármalo y saca la armadura.
2. Con el multímetro en continuidad, mide entre el eje y cada delga del colector: no debe haber continuidad en ninguna.
3. Mide entre cada delga y la contigua, recorriendo todo el colector: debe haber continuidad en todas.
4. Si alguna prueba falla, reemplaza la armadura.

## Si no gira

1. Revisa la carga de la batería y los fusibles.
2. Prueba el relé de arranque.
3. Prueba el interruptor del embrague, el de neutro y el sensor del gato lateral.
4. Revisa el cable rojo entre la batería, el relé y el motor, y el cable de masa.

> El manual no da medidas de escobillas ni del colector, ni el procedimiento para desarmar el motor de arranque. El consumo es mayor que el que indica el manual de la versión carburada (30 – 38 A): usa el de tu versión.
