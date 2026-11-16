---
title: Probar el medidor de combustible
summary: Comprobación de la resistencia del sensor de nivel del tanque contra las barras que muestra el tablero.
category: specific
difficulty: 2
time: 20 min
tools:
  - Multímetro (escala 200 Ω)
warnings:
  - Trabaja lejos de chispas o llamas. El tanque contiene vapores de combustible.
tables:
  - title: Resistencia según el nivel
    note: Tolerancia de ± 2 Ω. El manual repite 83 Ω para 2 barras y para 1 barra; ver nota.
    columns: [Resistencia (Ω), Barras en el tablero]
    rows:
      - ["12", "8"]
      - ["32", "7"]
      - ["42", "6"]
      - ["52", "5"]
      - ["63", "4"]
      - ["73", "3"]
      - ["83", "2"]
      - ["83", "1"]
      - ["110", "0"]
sourcePages: "30, 139, 140 y 152"
order: 80
---

1. Desconecta el conector del sensor de nivel del tanque.
2. Con el multímetro en 200 Ω, mide la resistencia entre los cables blanco/amarillo (punta positiva) y negro/amarillo (punta negativa).
3. Compara la lectura con la tabla: a tanque lleno la resistencia es baja (12 Ω, 8 barras) y a tanque vacío es alta (110 Ω, 0 barras).
4. Si la resistencia no corresponde al nivel real o no cambia al mover el flotador, reemplaza el sensor.

## Si el sensor está bien y el tablero marca mal

1. Mide el voltaje de la batería.
2. Comprueba que el conector del tablero y el del sensor de nivel estén bien trabados.
3. Revisa la continuidad del cable blanco/amarillo entre el sensor y el tablero, y que el cable negro/amarillo tenga buena masa.

> La tabla del manual da el mismo valor, 83 Ω, para 2 barras y para 1 barra; una de las dos cifras es una errata y el manual no permite saber cuál. También se contradice en el número de barras: la tabla llega hasta 8 y la descripción del tablero habla de un indicador de 9 segmentos.

> El testigo de bajo nivel parpadea cuando quedan menos de 3.5 L. La bomba de combustible va dentro del tanque y se enfría con el combustible: el manual pide mantener siempre un mínimo de 3 L.
