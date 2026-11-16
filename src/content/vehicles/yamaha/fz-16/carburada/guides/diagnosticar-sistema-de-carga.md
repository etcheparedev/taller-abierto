---
title: Diagnosticar el sistema de carga
summary: Qué revisar cuando la batería no carga, con la medición del estator y del voltaje de carga.
category: especifico
difficulty: 2
time: 45 min
tools:
  - Multímetro
  - Tacómetro digital
warnings:
  - Mide la resistencia del estator con el motor apagado y frío (valor a 20 °C).
  - Para medir el voltaje de carga el motor gira a unas 5000 rpm. Asegura la moto y aléjate de las partes en movimiento y del escape.
specs:
  - { label: Bobina del estator, value: 0.464 – 0.696 Ω a 20 °C }
  - { label: Voltaje de carga, value: 13.7 – 14.7 V a 5000 rpm }
  - { label: Salida del magneto, value: "14.0 V, 125 W a 5000 rpm" }
  - { label: Capacidad del rectificador, value: 20 A }
tables:
  - title: Orden de diagnóstico
    columns: [Paso, Revisar, Si falla]
    rows:
      - ["1", Fusible, Cambiar el fusible]
      - ["2", Batería, "Limpiar bornes, recargar o cambiar la batería"]
      - ["3", Bobina del estator, Cambiar el conjunto de estator y sensor de posición del cigüeñal]
      - ["4", Regulador / rectificador, Cambiar el regulador / rectificador]
      - ["5", Cableado del sistema de carga, Reparar o conectar el cableado]
sourcePages: "29, 230 y 258"
order: 190
---

Quita el asiento y la cubierta lateral izquierda para llegar a los conectores.

## Bobina del estator

1. Desconecta del arnés el conector de la bobina del estator.
2. Con el multímetro en la escala de ohmios más baja, mide entre los dos cables blancos del conector.
3. El valor debe estar entre 0.464 y 0.696 Ω. Si no, se cambia el conjunto de estator y sensor de posición del cigüeñal.

## Voltaje de carga

1. Conecta el tacómetro al cable de la bujía.
2. Conecta el multímetro, en voltios de corriente continua, en el conector del regulador / rectificador: punta positiva al cable rojo y negativa al cable negro.
3. Arranca el motor y llévalo a unas 5000 rpm.
4. Lee el voltaje: debe estar entre 13.7 y 14.7 V.
5. Si está fuera de rango y el estator y la batería están bien, cambia el regulador / rectificador.
