---
title: Ajustar el juego libre del acelerador
summary: Ajuste del juego del puño con el tensor del cable. En la versión FI el ralentí no se ajusta a mano; lo regula la ECU.
category: rutina
difficulty: 1
time: 10 min
interval: En cada servicio
tools:
  - Llaves para las tuercas del tensor
  - Regla
specs:
  - { label: Juego libre del puño, value: 2 – 3 mm }
  - { label: Ralentí (lo regula la ECU), value: 1400 ± 50 rpm }
sourcePages: "27, 34, 36, 61 y 75 (FI) · 27 (carburada, ajuste en el manubrio)"
source: "Manual de servicio Bajaj Pulsar NS 200 FI (REV. 00, OCT 2014); los pasos del tensor del manubrio vienen del manual de la Pulsar 200 NS carburada (Auteco S.A.S.)"
order: 26
---

![Dónde se mide el juego libre: 2 a 3 mm en la palanca del embrague y 2 a 3 mm en el puño del acelerador](../../images/juegos-libres.svg)

1. Gira el puño del acelerador despacio y mide cuánto se mueve antes de empezar a tirar del cable: deben ser 2 a 3 mm.
2. Si no coincide, gira el tensor del cable en el manubrio hasta dejar 2 a 3 mm de juego libre.
3. Aprieta la tuerca del tensor.
4. Comprueba de nuevo el juego y que el puño gire con suavidad.

> El manual de la FI da el valor (2 a 3 mm) y pide revisarlo en cada servicio, pero no describe los tensores; los pasos del tensor del manubrio vienen del manual de la versión carburada. El cable termina en el cuerpo de aceleración, donde el sensor TPS informa a la ECU la posición de la mariposa.

> El ralentí (1400 ± 50 rpm) lo mantiene la ECU con el motor paso a paso; el manual no describe ningún ajuste manual. Si el ralentí queda alto o bajo, revisa los códigos de falla: P0506 y P0507 (parpadeo 11) corresponden al control de aire de ralentí.
