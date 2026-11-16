---
title: Diagnosticar el sistema de carga
summary: Medición del voltaje de carga a 4500 rpm y de la bobina trifásica del magneto para saber si fallan la batería, el estator o el regulador-rectificador.
category: especifico
difficulty: 2
time: 45 min
tools:
  - Multímetro con escalas de 20 V DC y 200 Ω
  - Probador de baterías (opcional)
  - Tacómetro (o el del tablero)
warnings:
  - Haz las mediciones con la batería totalmente cargada. Con la batería baja los valores no sirven.
  - El motor gira a 4500 rpm durante la prueba. Asegura la moto, en neutro, y aléjate de la cadena, la rueda y el escape.
  - El voltaje se mide con el multímetro en paralelo con la batería.
specs:
  - { label: Voltaje de carga, value: 14.5 ± 0.2 V a 4500 rpm }
  - { label: Batería cargada antes de la prueba, value: 13.1 ± 0.1 V }
  - { label: Bobina de carga (trifásica), value: 1 Ω entre cada par de cables amarillos }
tables:
  - title: Qué indica cada resultado
    columns: [Resultado, Revisar]
    rows:
      - [Voltaje por debajo de 14.3 V, "Fusible principal, conexiones, bobina de carga del magneto y regulador-rectificador"]
      - [Voltaje por encima de 14.7 V, Regulador-rectificador y su masa (cable negro)]
      - [Voltaje correcto pero la batería se descarga, Batería y consumos con la moto apagada]
sourcePages: "134, 135, 140 y 152"
order: 310
---

El magneto de la versión FI es trifásico y va sumergido en aceite: entrega corriente alterna por tres cables amarillos al regulador-rectificador. De ahí la carga sale por el cable blanco/negro, pasa por el fusible principal y llega al positivo de la batería por el cable rojo. El regulador hace masa por un cable negro y lleva acoplado un condensador.

![Esquema del circuito de carga de la versión FI: el magneto trifásico entrega corriente por tres cables amarillos al regulador-rectificador, que carga la batería por el cable blanco/negro, el fusible principal y el cable rojo; la resistencia del magneto es de 1 ohmio entre cada par de cables amarillos y el voltaje de carga, medido en paralelo con la batería, es de 14.5 voltios](../images/circuito-carga.svg)

## Voltaje de carga

1. Comprueba que la batería esté totalmente cargada: 13.1 ± 0.1 V en reposo.
2. Pon el interruptor de encendido y el de corte del motor en ON.
3. Pon el multímetro en 20 V DC y conéctalo a los bornes de la batería: punta positiva al positivo y punta negativa al negativo.
4. Arranca el motor y llévalo a 4500 rpm.
5. Lee el voltaje: debe ser de 14.5 ± 0.2 V.
6. Apaga el motor y desconecta el multímetro.

## Bobina de carga del magneto

1. Con el encendido apagado, desconecta el conector del magneto (tres cables amarillos).
2. Pon el multímetro en 200 Ω.
3. Mide entre cada par de terminales: 1 y 2, 1 y 3, y 2 y 3.
4. Cada lectura debe ser de 1 Ω. Una lectura abierta o muy distinta de las otras dos indica una fase dañada.

## Si los valores no se cumplen

1. Revisa el fusible principal y la limpieza y apriete de los bornes de la batería.
2. Revisa el conector del regulador-rectificador, su masa y el conector del condensador.
3. Si la batería, el magneto y el cableado están bien, reemplaza el regulador-rectificador.

> El manual imprime el valor como «14.5 V + 0.2 V»; en sus tablas el signo ± aparece a menudo como +. No da corriente de carga, tolerancia para la resistencia del magneto ni valores para probar el regulador-rectificador, que se descarta por eliminación.

> Sobre el condensador, el manual solo dice que es muy importante para el funcionamiento de la ECU, que su conector debe estar firme y que se comprueba tocando su cable positivo con masa: debe saltar una chispa. No da capacidad ni otro valor de medición.
