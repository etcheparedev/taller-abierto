---
title: Probar la bocina, el medidor de combustible y las direccionales
summary: Mediciones con multímetro de la bocina, la unidad del tanque y el relé de las direccionales.
category: especifico
difficulty: 2
time: 45 min
tools:
  - Multímetro
  - Batería de 12 V
warnings:
  - Para probar la unidad del medidor hay que quitar el tanque. La gasolina es inflamable.
  - Los valores de resistencia son a 20 °C.
specs:
  - { label: Bobina de la bocina, value: 1.95 – 2.25 Ω }
  - { label: Consumo máximo de la bocina, value: 1.5 A }
  - { label: Medidor de combustible (lleno), value: 18.5 – 21.5 Ω }
  - { label: Medidor de combustible (vacío), value: 137 – 143 Ω }
  - { label: Relé de direccionales (entrada y salida), value: 12 V }
  - { label: Frecuencia de parpadeo, value: 70 – 100 ciclos por minuto }
sourcePages: "30, 255 y 259"
order: 230
---

## Bocina

1. Desconecta los dos conectores de la bocina.
2. Mide la resistencia entre sus terminales: 1.95 – 2.25 Ω. Si está fuera de rango, cámbiala.
3. Conecta la bocina a una batería de 12 V. Si el sonido es defectuoso, gira su tornillo de ajuste hasta obtener un sonido correcto. Si no mejora, cámbiala.

## Unidad del medidor de combustible

1. Quita el tanque de combustible y saca la unidad del medidor.
2. Conecta el multímetro al conector de la unidad: cables naranja/blanco y verde/negro.
3. Mueve el flotador hasta el tope superior (lleno) y hasta el tope inferior (vacío) y lee la resistencia en cada extremo.
4. Compara: lleno 18.5 – 21.5 Ω, vacío 137 – 143 Ω. Si está fuera de rango, cambia la unidad.

> Para el valor de tanque lleno el manual da dos rangos: 19.0 – 21.0 Ω en la tabla de especificaciones y 18.5 – 21.5 Ω en el procedimiento de prueba.

## Relé de direccionales

1. Con el relé conectado, mide el voltaje entre el cable marrón y tierra con el interruptor principal en ON. Debe haber 12 V. Si no, la falla está en el circuito entre el interruptor principal y el relé.
2. Mide el voltaje entre el cable marrón/blanco y tierra con el interruptor principal en ON. Debe haber 12 V. Si no, cambia el relé.

> Si una direccional parpadea muy rápido o muy lento, revisa primero que las bombillas sean de 12 V 10 W y que ninguna esté fundida.
