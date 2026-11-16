---
title: Probar el medidor de combustible
summary: Comprobación de la resistencia del flotador del tanque contra las barras que muestra el tablero.
category: especifico
difficulty: 2
time: 20 min
tools:
  - Multímetro (escala 200 Ω)
warnings:
  - Trabaja lejos de chispas o llamas. El tanque contiene vapores de combustible.
tables:
  - title: Resistencia según el nivel
    note: Tolerancia de ± 3 Ω.
    columns: [Resistencia (Ω), Barras en el tablero]
    rows:
      - ["40", "8"]
      - ["50", "7"]
      - ["60", "6"]
      - ["70", "5"]
      - ["80", "4"]
      - ["90", "3"]
      - ["97", "2"]
      - ["103", "1"]
      - ["110", "0"]
sourcePages: "107, 108 y 120"
order: 80
---

1. Desconecta el conector del medidor del tanque.
2. Con el multímetro en 200 Ω, mide la resistencia entre los cables blanco/amarillo (punta positiva) y negro/amarillo (punta negativa).
3. Compara la lectura con la tabla: a tanque lleno la resistencia es baja (40 Ω, 8 barras) y a tanque vacío es alta (110 Ω, 0 barras).
4. Si la resistencia no corresponde al nivel real o no cambia al mover el flotador, reemplaza el medidor.

## Si el medidor está bien y el tablero marca mal

1. Revisa la continuidad del cable blanco/amarillo entre el medidor y el tablero: llega al pin 13 del conector del tablero.
2. Revisa que el cable negro/amarillo del medidor tenga buena masa.
