---
title: Comprobar el ABS y su testigo
summary: Cómo funciona el freno antibloqueo de la rueda delantera, qué debe hacer el testigo del tablero y qué revisar cuando indica una falla.
category: basico
difficulty: 1
time: 15 min
warnings:
  - El ABS no acorta la frenada en todas las condiciones. En piso muy irregular la distancia puede ser mayor que sin ABS. Mantén la distancia y baja la velocidad.
  - El ABS no evita caídas por entrar demasiado rápido en una curva.
  - No apliques agua a presión sobre los sensores de velocidad de las ruedas ni sobre sus conectores.
specs:
  - { label: Testigo del ABS al dar contacto, value: Encendido }
  - { label: El testigo se apaga, value: Al superar 10 km/h }
  - { label: Testigo parpadeando, value: Falla en el sistema ABS }
  - { label: Unidad del ABS, value: Debajo del tanque de combustible }
  - { label: Sensores de velocidad, value: De efecto Hall }
sourcePages: "109 y 123 a 125"
order: 135
---

El ABS evita que la rueda se bloquee al frenar fuerte. La unidad del ABS reúne una parte eléctrica (la unidad de control) y una hidráulica (válvulas de solenoide, depósito temporal y bomba), y va intercalada entre la bomba de freno del manubrio y la pinza delantera. Recibe los pulsos de los sensores de velocidad, que leen un anillo dentado montado en la rueda.

![Esquema del ABS: la palanca y la bomba de freno envían líquido a la unidad del ABS, que lo deja pasar a la pinza delantera por la válvula de entrada; la unidad de control recibe la señal de los sensores de velocidad de rueda y gobierna la válvula de salida, el depósito y la bomba para aliviar y devolver presión](../images/abs-bloques.svg)

- En una frenada normal la válvula de entrada está abierta y la de salida cerrada: la presión de la palanca llega directo a la pinza.
- Si la rueda está por bloquearse, la unidad cierra el paso y abre la válvula de salida: parte del líquido pasa al depósito temporal y la presión en la pinza baja.
- Cuando la rueda recupera giro, la bomba devuelve el líquido y la presión vuelve a subir. El ciclo se repite mientras la rueda siga a punto de bloquearse.

## Comprobación del testigo

1. Pon el encendido en ON: el testigo del ABS debe encenderse y quedar fijo.
2. Arranca y avanza: al pasar de 10 km/h el testigo debe apagarse.
3. Si el testigo parpadea, el sistema detectó una falla. El freno sigue funcionando como un freno hidráulico normal, sin antibloqueo.
4. Si el testigo queda encendido en marcha, trátalo también como una falla del ABS.

## Qué revisar si indica falla

1. Mira el sensor de velocidad de la rueda delantera: va sujeto con un perno junto a la pinza. Debe estar firme, limpio y con el cable entero y bien guiado en sus abrazaderas.
2. Revisa que el anillo dentado de la rueda no tenga dientes doblados ni barro pegado.
3. Revisa que los conectores de los sensores y de la unidad del ABS estén trabados y secos.
4. Comprueba el voltaje de la batería y los fusibles.
5. Si todo lo anterior está bien, la moto necesita diagnóstico en un taller con el equipo de la marca.

## Qué se siente cuando actúa

1. En una frenada fuerte sobre piso resbaloso notarás pulsaciones en la palanca del freno delantero. Es normal: indica que el ABS está trabajando.
2. Usa siempre los dos frenos a la vez.

> El manual no es claro sobre los sensores: el texto dice que la unidad lee sensores en ambas ruedas y su diagrama de bloques dibuja uno delantero y uno trasero, pero la unidad solo actúa sobre la pinza delantera y las fotos solo muestran el sensor de la rueda delantera.

> El manual explica el funcionamiento, pero no trae códigos de falla del ABS, valores para probar los sensores (resistencia, voltaje o separación con el anillo), ni el procedimiento para desmontar o purgar la unidad.
