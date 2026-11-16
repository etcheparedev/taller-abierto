---
title: Diagnosticar el sistema de refrigeración
summary: Cómo circula el refrigerante, qué controla la ECU en la versión FI y la tabla de fallas, causas probables y solución para recalentamiento, ventilador y fugas.
category: especifico
difficulty: 2
warnings:
  - Si el aviso de temperatura está encendido, detén la moto y no la uses hasta resolver la falla.
  - No abras la tapa del radiador ni sueltes mangueras con el motor caliente.
specs:
  - { label: Se enciende el ventilador, value: 98 °C }
  - { label: Aviso de sobrecalentamiento en el tablero, value: Más de 115 °C }
  - { label: Cantidad al drenar y rellenar, value: 1000 ml }
  - { label: Torque del sensor de temperatura, value: 1.2 – 1.4 kgf·m }
tables:
  - title: Fallas y soluciones
    note: "Las causas mecánicas vienen del manual de la versión carburada, que usa el mismo circuito de refrigeración. En la FI el ventilador lo gobierna la ECU, que además guarda un código de falla para el relé, el ventilador y el sensor de temperatura."
    columns: [Síntoma, Causa probable, Qué hacer]
    rows:
      - [Motor recalentado, Poco refrigerante, Buscar fugas y completar el nivel]
      - [Motor recalentado, Aletas del radiador sucias, Limpiar las aletas del radiador]
      - [Motor recalentado, Espuma o aire en el sistema, Drenar y volver a llenar el sistema]
      - [Motor recalentado, Termostato defectuoso, Revisar el termostato]
      - [Motor recalentado, Fusible quemado, Cambiar el fusible]
      - [Motor recalentado, Relé o ventilador del radiador defectuoso, "Leer los códigos de falla (parpadeo 16) y revisar el relé y el ventilador"]
      - [El ventilador no funciona con el motor caliente, Falla en el circuito de control del ventilador, "Códigos P0480, P0691 o P0692 (parpadeo 16)"]
      - [Testigo de falla encendido y ventilador o lectura de temperatura anormales, Sensor de temperatura del refrigerante o su circuito, "Códigos P0117 o P0118 (parpadeo 12)"]
      - [Refrigerante de color negro, Aceite de motor mezclado con el refrigerante, "Reemplazar las juntas; un O-ring defectuoso entre la bomba y el motor también deja pasar fluido"]
      - [El nivel baja seguido, Tapa del radiador defectuosa, "Revisar y reemplazar; una tapa que no sella deja escapar refrigerante por el respiradero"]
      - [Refrigerante en el aceite, La junta no sella, Reemplazar las juntas y los retenes de la bomba de refrigerante]
  - title: Qué hace cada componente
    columns: [Componente, Función]
    rows:
      - [Bomba de refrigerante, Hace circular el refrigerante por el sistema]
      - [Termostato, "Regula el paso hacia el radiador para que el motor caliente rápido y mantenga su temperatura"]
      - [Radiador, Enfría el refrigerante que pasa por sus tubos y aletas]
      - [Ventilador, Fuerza el paso de aire por el radiador]
      - [Relé del ventilador del radiador, "Enciende y apaga el ventilador; lo gobierna la ECU"]
      - [Sensor de temperatura del refrigerante (CTS), "Termistor NTC: su resistencia baja al subir la temperatura. La ECU usa su lectura para la inyección, el encendido y el ventilador"]
      - [Tapa del radiador, "Mantiene la presión; deja salir refrigerante al tanque de expansión y lo deja volver al enfriarse"]
      - [Tanque de expansión, Recibe el refrigerante que se dilata en caliente y lo devuelve en frío]
      - [Tornillo de purga, Permite sacar el aire del sistema]
      - [Mangueras y abrazaderas, "Llevan el refrigerante entre el radiador, la bomba y el motor"]
sourcePages: "30, 34, 37, 42, 51, 62, 66, 67, 81, 93 y 102 (FI) · 69 a 72 y 125 (carburada)"
source: "Manual de servicio Bajaj Pulsar NS 200 FI (REV. 00, OCT 2014); el recorrido del refrigerante, el termostato, la tapa del radiador y las fallas mecánicas vienen del manual de la Pulsar 200 NS carburada (Auteco S.A.S.), que el manual de la FI no describe"
order: 30
---

## Qué controla la ECU

En la versión FI no hay CDI: la unidad de control electrónico (ECU) lee el sensor de temperatura del refrigerante y con ese dato corrige la inyección y el encendido, enciende el ventilador del radiador a los 98 °C por medio de su relé y hace que el tablero avise cuando el motor pasa de 115 °C. Si falla el sensor, el relé o el ventilador, la ECU guarda un código y enciende el testigo de falla: consulta la guía «Leer los códigos de falla».

## Cómo circula el refrigerante

La bomba impulsa el refrigerante por los conductos del cilindro y de la culata hasta el termostato. Con el motor frío el termostato lo devuelve a la bomba por el tubo de derivación para que el motor caliente rápido. Al alcanzar su temperatura de apertura, lo envía a la parte superior izquierda del radiador; sale enfriado por la parte inferior derecha y vuelve a la bomba.

![Diagrama del recorrido del refrigerante: bomba, cilindro, culata y termostato; en frío vuelve a la bomba por el tubo de derivación y en caliente pasa por el radiador](../../images/flujo-refrigerante.svg)

> El diagrama y esta descripción vienen del manual de la versión carburada. Ese manual indica que el termostato empieza a abrir a los 82 °C (88 ± 2 °C según otra de sus páginas), que queda abierto del todo a los 96 °C y que la válvula de la tapa del radiador abre a 1.4 kg/cm². El manual de la FI no da esos valores.

## Para evitar que se mezclen aceite y refrigerante

- Reemplaza siempre la junta de culata y la junta del cilindro por nuevas al abrir el motor.
- Reemplaza la junta de los cárteres y los retenes de la bomba de refrigerante cada vez que separes los cárteres.
- No reutilices O-rings: el de la cubierta de la bomba de refrigerante se cambia al desmontarla.

## Mangueras y aletas

- El cuadro de mantenimiento de la FI pide revisar las mangueras, sus abrazaderas y posibles fugas, y las aletas del radiador, en cada servicio desde el 2.º.
- El nivel se revisa y completa en cada servicio con refrigerante listo para usar.
