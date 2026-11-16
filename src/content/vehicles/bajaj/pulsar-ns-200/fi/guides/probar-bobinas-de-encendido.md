---
title: Probar las bobinas de encendido
summary: Medición de la resistencia primaria y secundaria de la bobina central y de la bobina doble, y de los capuchones de bujía.
category: especifico
difficulty: 2
time: 30 min
tools:
  - Multímetro (escalas 200 Ω, 2 kΩ y 20 kΩ)
warnings:
  - Mide con el encendido apagado y las bobinas desconectadas.
  - Para llegar a las bobinas hay que retirar el tanque de combustible. Trabaja lejos de chispas o llamas.
specs:
  - { label: Bobina central, value: Alimenta la bujía central }
  - { label: Bobina doble (melliza), value: Alimenta las bujías izquierda y derecha }
  - { label: Capuchón de bujía, value: 1 kΩ ± 150 Ω }
tables:
  - title: Valores estándar
    columns: [Bobina, Bobinado, Escala, Dónde medir, Valor]
    rows:
      - [Central, Primario, 200 Ω, Pin 1 (naranja/blanco) y pin 2 (negro), 0.513 – 0.627 Ω]
      - [Central, Secundario, 20 kΩ, Salida de alta y pin del cable naranja/blanco, 4.23 – 5.17 kΩ]
      - [Doble, Primario, 200 Ω, Negro/rojo y pin del cable naranja/blanco, 0.63 – 0.77 Ω]
      - [Doble, Secundario, 20 kΩ, Entre las dos salidas de alta, 11.0 – 16.2 kΩ]
sourcePages: "143, 145, 146 y 148"
order: 50
---

## Acceso

1. Retira los asientos, la cubierta del tanque y el tanque de combustible.
2. Desconecta el conector de la bobina que vas a medir.
3. Si necesitas sacar la bobina doble (lado derecho), quita sus 2 pernos, que también sujetan un cable de masa, libera los cables de sus abrazaderas y retira los capuchones de las bujías izquierda y derecha.

## Medición

1. Con el multímetro en 200 Ω, mide el bobinado primario entre los terminales que indica la tabla.
2. Con el multímetro en 20 kΩ, mide el bobinado secundario. En la bobina central se mide entre la salida de alta y el pin del cable naranja/blanco; en la doble, entre sus dos salidas de alta.
3. Si algún valor está fuera de rango, reemplaza la bobina.

## Capuchones de bujía

1. Retira el capuchón del cable de alta.
2. Con el multímetro en 2 kΩ, mide entre los dos extremos del capuchón.
3. El valor debe ser de 1 kΩ ± 150 Ω. Si no, reemplázalo.

> Las tablas del manual no indican la temperatura de medición de las bobinas. Estos valores son distintos de los de la versión carburada: no los mezcles.
