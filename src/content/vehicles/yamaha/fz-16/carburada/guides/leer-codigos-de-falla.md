---
title: Leer los códigos de falla del autodiagnóstico
summary: Cómo interpretar los destellos de la luz de avería del motor y cómo probar el sensor de posición del acelerador.
category: especifico
difficulty: 2
time: 30 min
tools:
  - Multímetro digital
  - Reloj o cronómetro para contar destellos
warnings:
  - No separes el sensor de posición del acelerador (TPS) del carburador. Si falla, el manual indica cambiar el carburador.
  - No cambies el CDI con el interruptor principal en ON.
  - Mide por la parte trasera de los conectores, sin forzar los terminales.
specs:
  - { label: Prueba de la luz al dar contacto, value: Encendida 3 segundos }
  - { label: Voltaje de entrada del TPS, value: 5 V (cables azul y negro/azul) }
  - { label: Salida del TPS con el acelerador cerrado, value: 0.65 – 0.75 V (cables amarillo y negro/azul) }
  - { label: Sensor de velocidad, value: Alterna entre 0 V y 5.0 V al girar la rueda }
tables:
  - title: Códigos de falla
    columns: [Código, Elemento, Síntoma, "¿Arranca?", "¿Se puede conducir?"]
    rows:
      - ["15", Sensor de posición del acelerador, Circuito abierto o cortocircuito, Sí, Sí]
      - ["16", Sensor de posición del acelerador, Sensor trabado, Sí, Sí]
  - title: Cómo se leen los destellos
    columns: [Parte del código, Destello]
    rows:
      - [Decenas, 1 segundo encendida y 1.5 segundos apagada]
      - [Unidades, 0.5 segundos encendida y 0.5 segundos apagada]
      - [Pausa antes de repetir, 3 segundos apagada]
sourcePages: "240 a 244 y 260"
order: 210
---

El CDI vigila el sistema. Cuando detecta una avería hace funcionar el motor con valores de sustitución, enciende la luz de avería del motor y guarda un código en memoria hasta que se borra.

![Lectura del código 15: un destello largo para la decena y cinco destellos cortos para las unidades](../images/codigos-de-falla.svg)

## Comprobar la luz

1. Gira el interruptor principal a ON. La luz de avería debe encenderse 3 segundos y apagarse.
2. Si no se enciende, revisa el cableado de comunicación y los LED del tablero.

## Leer el código

1. Con la avería presente, detén el motor. La luz empieza a destellar el código.
2. Cuenta los destellos largos (decenas) y luego los cortos (unidades). Por ejemplo, un destello largo y cinco cortos es el código 15.
3. Busca el código en la tabla.

## Código 15: circuito del TPS abierto o en corto

1. Revisa que el sensor no esté flojo ni aprisionado y que esté montado en su posición.
2. Revisa el conector del sensor y el conector del CDI: terminales salidos y trabas.
3. Revisa la continuidad del arnés entre el sensor y el CDI en los cables negro/azul, amarillo y azul.
4. Mide el voltaje de entrada del sensor entre los cables azul y negro/azul con el contacto en ON: 5 V.
5. Mide la salida entre amarillo y negro/azul con el acelerador cerrado: 0.65 – 0.75 V. Al abrir lentamente el acelerador, el voltaje debe subir de forma progresiva.
6. Si la salida no cambia, cambia a saltos o está fuera de rango con el acelerador cerrado, se reemplaza el carburador.
7. Gira el interruptor principal a ON para comprobar que el código ya no aparece.

## Código 16: TPS trabado

1. Revisa el montaje del sensor.
2. Haz la prueba de voltaje de salida del paso anterior.
3. Para comprobar la reparación, arranca el motor, déjalo en ralentí y luego súbelo de revoluciones.

## Sensor de velocidad

1. Con el contacto en ON, mide en el conector del sensor (lado del arnés) entre los cables blanco y azul/negro.
2. Levanta la rueda delantera y gírala lentamente. La lectura debe alternar entre 0 V y 5.0 V en cada vuelta. Si no, cambia el sensor.

> La tabla de códigos del manual solo lista el 15 y el 16. La sección de detalles describe además fallas de la bobina de encendido (circuito primario abierto), del CDI y del sensor de velocidad, pero sin asignarles número de código.
