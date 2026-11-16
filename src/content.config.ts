import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_IDS } from './lib/categories';

/**
 * Content model
 * -------------
 * Vehicles are organised as brand / model / version:
 *
 * src/content/vehicles/<brand>/<model>/<version>/vehicle.yaml     -> one version of a model
 * src/content/vehicles/<brand>/<model>/<version>/guides/<slug>.md -> guide of that version only
 * src/content/vehicles/<brand>/<model>/guides/<slug>.md           -> guide shared by every version
 * .../images/*  next to either guides/ folder                     -> photos and diagrams
 *
 * A version guide with the same file name as a shared one replaces it.
 * Adding a vehicle never requires touching code: create the folders and the
 * build validates every file against the schemas below.
 */

const table = z.object({
  title: z.string(),
  note: z.string().optional(),
  columns: z.array(z.string()).min(2),
  rows: z.array(z.array(z.string())),
});

const spec = z.object({ label: z.string(), value: z.string() });

const vehicles = defineCollection({
  loader: glob({
    base: './src/content/vehicles',
    pattern: '*/*/*/vehicle.yaml',
    // "bajaj/pulsar-ns-200/carbureted/vehicle.yaml" -> "bajaj/pulsar-ns-200/carbureted"
    generateId: ({ entry }) => entry.replace(/\/vehicle\.yaml$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      brand: z.string(),
      model: z.string(),
      /** What tells this version apart, e.g. "Carburada", "FI ABS", "2.0 TDI". */
      version: z.string(),
      type: z.enum(['motorcycle', 'car', 'truck', 'other']),
      years: z.string().optional(),
      /**
       * Other names the same model is sold under, and where. Declare them in any
       * version: the model shows the names of all its versions together.
       */
      aliases: z.array(z.object({ name: z.string(), markets: z.string().optional() })).default([]),
      tagline: z.string(),
      /** Optional photo, relative to vehicle.yaml (e.g. ./images/cover.jpg). Must be your own or freely licensed. */
      cover: image().optional(),
      /** Headline figures shown on cards and in the vehicle header (max 4 look best). */
      highlights: z.array(spec).max(4).default([]),
      specs: z.array(spec).default([]),
      /** Reference tables: torques, service limits, etc. */
      tables: z.array(table).default([]),
      /** Where the data comes from. Shown on the page for traceability. */
      source: z.string(),
    }),
});

const guides = defineCollection({
  loader: glob({
    base: './src/content/vehicles',
    pattern: ['*/*/guides/*.md', '*/*/*/guides/*.md'],
    // shared:  "bajaj/pulsar-ns-200/guides/washing.md"              -> "bajaj/pulsar-ns-200/washing"
    // version: "bajaj/pulsar-ns-200/carbureted/guides/spark-plugs.md"    -> "bajaj/pulsar-ns-200/carbureted/spark-plugs"
    generateId: ({ entry }) => entry.replace('/guides/', '/').replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(CATEGORY_IDS),
    /** 1 = anyone, 2 = some experience, 3 = workshop level. */
    difficulty: z.number().int().min(1).max(3),
    time: z.string().optional(),
    /** How often to do it, e.g. "Cada 500 km". Mostly for routine guides. */
    interval: z.string().optional(),
    tools: z.array(z.string()).default([]),
    warnings: z.array(z.string()).default([]),
    specs: z.array(spec).default([]),
    tables: z.array(table).default([]),
    /** Page(s) of the source manual, for anyone who wants to double-check. */
    /** Reference videos. YouTube links are embedded; any other URL is shown as a link. */
    videos: z
      .array(z.object({ title: z.string(), url: z.url(), author: z.string().optional() }))
      .default([]),
    sourcePages: z.string().optional(),
    /** Source of this guide when it is not the vehicle's `source` (e.g. a guide shared by several versions). */
    source: z.string().optional(),
    /** Who wrote the guide and how to reach them. Only publish contact details you want to be public. */
    author: z
      .object({
        name: z.string(),
        workshop: z.string().optional(),
        /** Address or city of the workshop. */
        location: z.string().optional(),
        /** Phone, e-mail or any other way to get in touch. */
        contact: z.string().optional(),
        links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      })
      .optional(),
    /** Lower numbers are listed first within a category. */
    order: z.number().default(100),
  }),
});

export const collections = { vehicles, guides };
