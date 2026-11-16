---
title: Probar las bobinas de encendido
summary: Medición de la resistencia primaria y secundaria de la bobina central y de la bobina doble.
category: especifico
difficulty: 2
time: 20 min
tools:
  - Multímetro (escalas 200 Ω y 20 kΩ)
warnings:
  - Mide con el encendido apagado y las bobinas a temperatura ambiente (los valores son a 25 °C).
  - No pongas un cable a masa para buscar chispa. El manual lo prohíbe porque daña la instalación.
specs:
  - { label: Bobina central (bobina de alta 1), value: Alimenta la bujía central }
  - { label: Bobina doble (bobina de alta 2), value: Alimenta las bujías izquierda y derecha }
tables:
  - title: Valores estándar a 25 °C
    columns: [Bobina, Bobinado, Escala, Dónde medir según la tabla, Valor]
    rows:
      - [Central, Primario, 200 Ω, Blanco/amarillo y negro/amarillo, 0.3 – 0.5 Ω]
      - [Central, Secundario, 20 kΩ, Blanco/amarillo y negro/amarillo, 4.5 – 6.5 kΩ]
      - [Doble, Primario, 200 Ω, Los dos cables blanco/amarillo, 0.45 – 0.55 Ω]
      - [Doble, Secundario, 20 kΩ, Pines 1 y 2 del conector, 5.8 – 7.2 kΩ]
sourcePages: "105, 110, 111 y 122"
order: 50
---

1. Apaga el encendido y desconecta la bobina que vas a medir.
2. Con el multímetro en 200 Ω, mide la resistencia del bobinado primario y compárala con la tabla.
3. Retira el capuchón de la bujía girándolo en sentido antihorario.
4. Con el multímetro en 20 kΩ, mide la resistencia del bobinado secundario y compárala con la tabla.
5. Si algún valor está fuera de rango, reemplaza la bobina.

> Que los valores coincidan indica que la bobina probablemente está bien. Si el encendido sigue fallando, comprueba la chispa con un probador de bobinas CDI/HT.

> La tabla del manual repite los mismos colores de cable para el primario y el secundario de la bobina central, y el diagrama del circuito de encendido rotula los cables de las bobinas con otros colores (negro en la central; negro/amarillo y negro/rojo en la doble). Identifica los terminales en la bobina que tienes en la mano antes de medir: el primario se mide entre los dos terminales de baja y el secundario incluye la salida de alta hacia la bujía.
