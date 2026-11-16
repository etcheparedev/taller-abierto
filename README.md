# Taller Abierto

Open, community-maintained vehicle service guides. A static site built with [Astro](https://astro.build): no backend, no database. Every vehicle is a folder of plain text files.

Guides are grouped into three maintenance segments:

| Segment      | `category`   | What goes here                                                  |
| ------------ | ------------ | --------------------------------------------------------------- |
| De rutina    | `rutina`     | Recurring tasks by time or mileage (wash, chain, fluid levels). |
| Básicos      | `basico`     | Simple jobs anyone can do with common tools.                    |
| Específicos  | `especifico` | System-specific jobs needing experience or special tools.       |

## Run it

Requires Node 22.23.4 or newer.

```sh
npm install
npm run dev      # local server with hot reload
npm run build    # static site in dist/ (also validates all content)
npm run check    # type check
```

## Add a vehicle

There are two doors to the same format:

- **Without git:** the site has a form at `/proponer/` ("Proponer una guía"). It builds the guide's Markdown file and
  opens GitHub with it pre-filled, either as an issue (photos can be dragged in) or as a new file for a pull request.
  Set `repo` and `branch` in `src/lib/site.ts` so its buttons point to your repository.
- **With files** (by hand or with an AI agent): the layout described below.

No code changes needed. Vehicles are organised as **brand / model / version**, because the same model often exists in several versions (carburetted vs fuel injected, different forks, engines or model years) whose data and procedures differ:

```
src/content/vehicles/
└── honda/                         <- brand
    └── cb190r/                    <- model
        ├── guides/                <- guides shared by EVERY version of the model
        │   └── lavado.md
        ├── images/                <- images used by the shared guides
        ├── carburada/             <- one folder per version
        │   ├── vehicle.yaml       <- data of this version
        │   ├── guides/            <- guides of this version only
        │   │   ├── cambiar-aceite.md
        │   │   └── ajustar-carburador.md
        │   └── images/
        │       ├── cover.jpg
        │       └── tapon-drenaje.jpg
        └── inyeccion/
            ├── vehicle.yaml
            └── guides/
```

Folder and file names become the URL (`/honda/cb190r/carburada/cambiar-aceite/`): lowercase, hyphens, no accents. `guides` and `images` are reserved names and cannot be used for a version.

- **Adding a version** of an existing model: create its folder with a `vehicle.yaml`. It immediately gets all the shared guides.
- **Shared or not?** Put a guide in the model's `guides/` only when it is correct for every version. When in doubt, keep it in the version folder.
- **Overriding:** a version guide with the same file name as a shared guide replaces it for that version.

### `vehicle.yaml`

```yaml
brand: Honda
model: CB190R
version: Carburada # what tells this version apart
type: moto # moto | auto | camioneta | otro
years: 2016–2023 # optional
aliases: # optional, other names of the same model in other markets
  - { name: Rouser NS 200, markets: "Argentina, Filipinas" }
tagline: One sentence shown on the card and the vehicle page.
cover: ./images/cover.jpg # optional photo of the vehicle
highlights: # up to 4 headline figures
  - { label: Cilindrada, value: 184 cc }
specs: # full spec list, any number of rows
  - { label: Refrigeración, value: Aire }
tables: # optional reference tables (torques, limits...)
  - title: Torques de apriete
    note: Optional footnote.
    columns: [Parte, N·m]
    rows:
      - [Tapón de drenaje, "24"]
source: Manual de servicio Honda CB190R # where the data comes from
```

### A guide (`guides/<slug>.md`)

```md
---
title: Cambiar el aceite
summary: One sentence describing the job.
category: rutina # rutina | basico | especifico
difficulty: 1 # 1 easy · 2 intermediate · 3 workshop level
time: 30 min # optional
interval: Cada 3000 km # optional
tools: # optional
  - Llave de 17 mm
warnings: # optional, shown before the steps
  - Trabaja con el motor tibio, no caliente.
specs: # optional key figures for the sidebar
  - { label: Capacidad, value: 1.0 L }
tables: [] # optional, same shape as in vehicle.yaml
videos: # optional reference videos
  - title: Cambio de aceite paso a paso
    url: https://www.youtube.com/watch?v=VIDEO_ID
    author: Channel name # optional
sourcePages: "42" # optional, page(s) of the source manual
author: # optional, shown on the guide so readers can find you (everything here is public)
  name: Juan Pérez
  workshop: Taller Pérez Motos
  location: Av. Siempre Viva 123, Córdoba
  contact: "+54 351 555 0000"
  links:
    - { label: Instagram, url: "https://instagram.com/tallerperez" }
source: Manual de servicio Honda CB190R # optional, only when it differs from the vehicle's source (shared guides)
order: 10 # optional, lower shows first within its category
---

1. Each numbered item becomes a checkable step.

   ![Describe what the photo shows](../images/tapon-drenaje.jpg)

2. Readers can tick steps off; progress is saved in their browser.

## Optional heading

A second numbered list starts a new group of steps. Regular Markdown
(paragraphs, bullet lists, `> notes`) works everywhere.
```

Run `npm run build` before opening a pull request. The build fails with a clear message if a field is missing or misspelled; the schema lives in [`src/content.config.ts`](src/content.config.ts).

### Images and videos

**Images.** Put the files in the `images/` folder next to the guide's `guides/` folder and reference them with standard Markdown: `![description](../images/file.jpg)`.

- To attach an image to a step, put it on its own line inside the step, indented three spaces and separated by a blank line (see the example above). Outside a list it is shown as a regular figure.
- Readers can click any image to see it full size.
- The description is required: it is what screen readers announce.
- JPG, PNG and WebP are resized and compressed by the build; around 1600 px wide is plenty. SVG diagrams are used as they are and need `width` and `height` attributes.
- Only add photos you took yourself or that are freely licensed. Photos from service manuals are not allowed.

**Videos.** Add them to the guide's `videos` list. YouTube links (`watch`, `youtu.be`, `shorts`) are embedded and only load when the reader presses play; any other URL is shown as a link. Link to videos, never upload video files to the repository.

### Content rules

- **Write the steps in your own words.** Service manuals are copyrighted: use them as a source of facts (torques, clearances, intervals), never copy their text or photos, and never commit the PDF (`*.pdf` is git-ignored).
- **Never guess a number.** If the manual doesn't state a value, leave it out. If two parts of the manual disagree, say so in the guide.
- **Quote YAML values** that are pure numbers or contain `: ` (for example `"24"`).
- Site content is written in neutral Spanish.

## Project layout

```
src/
├── content.config.ts   content schemas (the contract for contributors)
├── content/vehicles/   all vehicles and guides
├── lib/                categories, site settings, content queries
├── components/         Carousel, BrandMark, ModelCard, Aliases, GuideCard, DataTable, VideoList, Tachometer
├── layouts/Layout.astro
├── pages/              home · [brand] · [model] · [version] · [guide]
└── styles/global.css   design tokens and all styles
```

Site name and repository link: [`src/lib/site.ts`](src/lib/site.ts).

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`, and builds every pull request
to validate it. In a fork, enable Pages with "GitHub Actions" as the source (Settings → Pages) and point `repo` in
`src/lib/site.ts` to your repository.

To build by hand with the site and base path of the repository:

```sh
SITE=https://<user>.github.io BASE=/<repo> npm run build
```

## Disclaimer

Guides are informational. Always verify against the official manual for your exact model and year, and consult a qualified mechanic when in doubt.


## License

- Code: [MIT](LICENSE).
- Vehicle data and guides (`src/content/`): [CC BY-SA 4.0](src/content/LICENSE.md).
