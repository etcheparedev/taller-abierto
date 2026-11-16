---
title: Diagnosticar la falta de chispa
summary: Orden de comprobación del encendido y medición de capuchón, bobina y sensor de posición del cigüeñal.
category: especifico
difficulty: 2
time: 1 h
tools:
  - Multímetro
  - Probador dinámico de chispa (opcional)
  - Llave de bujías y galgas
warnings:
  - Mide resistencias con el interruptor principal en OFF y los conectores desconectados.
  - Los valores son a 20 °C. Mide con el motor frío.
  - No introduzcas las puntas del multímetro por el frente de los conectores. Mide por la parte trasera, sin forzar los terminales.
  - El circuito de alta tensión da descargas fuertes. No toques el cable de bujía con el motor girando.
tables:
  - title: Valores de prueba a 20 °C
    columns: [Componente, Dónde medir, Valor]
    rows:
      - [Capuchón de bujía, Entre sus dos extremos (fuera del cable), 5 kΩ]
      - [Bobina de encendido (primario), Terminal del cable naranja y tierra, 0.32 – 0.48 Ω]
      - [Bobina de encendido (secundario), Cable de alta tensión (sin capuchón) y tierra, 5.68 – 8.52 kΩ]
      - [Sensor de posición del cigüeñal, Cables azul/amarillo y verde del conector, 192 – 288 Ω]
      - [Distancia entre electrodos de la bujía, Con galgas, 0.8 – 0.9 mm]
  - title: Orden de diagnóstico
    columns: [Paso, Revisar, Si falla]
    rows:
      - ["1", Fusible, Cambiar el fusible]
      - ["2", Batería, "Limpiar bornes, recargar o cambiar la batería"]
      - ["3", Bujía, Calibrar o cambiar la bujía]
      - ["4", Capuchón de bujía, Cambiar el capuchón]
      - ["5", Bobina de encendido, Cambiar la bobina]
      - ["6", Sensor de posición del cigüeñal, Cambiar el sensor]
      - ["7", Interruptor principal, Cambiar el interruptor]
      - ["8", Sensor de posición del acelerador (TPS), Cambiar el TPS (viene con el carburador)]
      - ["9", Interruptor de parada del motor, Cambiar el interruptor derecho del manubrio]
      - ["10", Cableado del sistema de encendido, Reparar o conectar el cableado]
      - ["11", Todo lo anterior está bien, Cambiar el CDI]
sourcePages: "29, 220, 221, 256 y 257"
order: 180
---

Sigue el orden de la tabla: va de lo más simple y barato a lo más caro. Para llegar a los componentes quita el asiento, las cubiertas laterales y el tanque.

## Capuchón de bujía

1. Desenrosca el capuchón del cable de bujía.
2. Mide la resistencia entre los dos extremos del capuchón, en la escala de kΩ. Debe ser de 5 kΩ. Si no, cámbialo.

## Bobina de encendido

1. Desconecta los conectores de la bobina.
2. Mide el primario entre el terminal del cable naranja y tierra: 0.32 – 0.48 Ω.
3. Con el capuchón quitado, mide el secundario entre el cable de alta tensión y tierra: 5.68 – 8.52 kΩ.
4. Si algún valor está fuera de rango, cambia la bobina.

## Sensor de posición del cigüeñal

1. Desconecta del arnés el conector del sensor.
2. Mide entre los cables azul/amarillo y verde: 192 – 288 Ω.
3. Si está fuera de rango, se cambia el sensor, que forma conjunto con el estator.

## Prueba de chispa

1. Desconecta el capuchón de la bujía y conecta entre ambos el probador dinámico de chispa.
2. Gira el interruptor principal a ON y coloca el interruptor de parada del motor en la posición de marcha.
3. Acciona el arranque y observa la chispa en el probador.

> El manual da como "distancia mínima de chispa" el mismo valor que la separación de electrodos de la bujía (0.8 a 0.9 mm), lo que parece un error de edición. No se incluye aquí una distancia de salto para el probador.

> La especificación general escribe la resistencia del secundario como "5.68-8.52 Ω"; el procedimiento de prueba, que es el que usa la escala de kΩ, la da en kΩ.
