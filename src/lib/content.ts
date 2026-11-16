import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORY_IDS } from './categories';
import type { VehicleType } from './vehicleTypes';

/** One version of a model. Its id is "<brand>/<model>/<version>". */
export type Vehicle = CollectionEntry<'vehicles'>;
/** Its id is "<brand>/<model>/<slug>" when shared, "<brand>/<model>/<version>/<slug>" otherwise. */
export type Guide = CollectionEntry<'guides'>;

/** Every version found under <brand>/<model>/. */
export interface Model {
  /** "<brand>/<model>" */
  id: string;
  brandSlug: string;
  brand: string;
  name: string;
  /** Taken from its first version. */
  type: VehicleType;
  /** Other market names, gathered from all its versions. */
  aliases: Vehicle['data']['aliases'];
  versions: Vehicle[];
}

export interface Brand {
  slug: string;
  name: string;
  models: Model[];
}

export const guideSlugOf = (guide: Guide) => guide.id.split('/').at(-1)!;
export const brandSlugOf = (vehicle: Vehicle) => vehicle.id.split('/')[0];
export const modelIdOf = (vehicle: Vehicle) => vehicle.id.split('/').slice(0, 2).join('/');

const byText = (a: string, b: string) => a.localeCompare(b, 'es', { numeric: true });

/** All models, each with its versions, sorted by brand and name. */
export async function getModels(): Promise<Model[]> {
  const models = new Map<string, Model>();
  for (const vehicle of await getCollection('vehicles')) {
    const id = modelIdOf(vehicle);
    const model = models.get(id) ?? {
      id,
      brandSlug: brandSlugOf(vehicle),
      brand: vehicle.data.brand,
      name: vehicle.data.model,
      type: vehicle.data.type,
      aliases: [],
      versions: [],
    };
    model.versions.push(vehicle);
    for (const alias of vehicle.data.aliases) {
      if (!model.aliases.some((known) => known.name === alias.name)) model.aliases.push(alias);
    }
    models.set(id, model);
  }
  for (const model of models.values()) model.versions.sort((a, b) => byText(a.data.version, b.data.version));
  return [...models.values()].sort((a, b) => byText(a.brand, b.brand) || byText(a.name, b.name));
}

/** Brands sorted by name, each with its models. Pass a type to keep only that kind of vehicle. */
export async function getBrands(type?: VehicleType): Promise<Brand[]> {
  const brands = new Map<string, Brand>();
  for (const model of await getModels()) {
    if (type && model.type !== type) continue;
    const brand = brands.get(model.brandSlug) ?? { slug: model.brandSlug, name: model.brand, models: [] };
    brand.models.push(model);
    brands.set(brand.slug, brand);
  }
  return [...brands.values()];
}

/**
 * Guides of one version: the ones shared by the whole model plus its own.
 * A version guide replaces the shared guide with the same file name.
 * Sorted by category, then `order`, then title.
 */
export async function getGuidesOf(vehicle: Vehicle): Promise<Guide[]> {
  const guides = await getCollection('guides');
  const bySlug = new Map<string, Guide>();
  for (const owner of [modelIdOf(vehicle), vehicle.id]) {
    for (const guide of guides) {
      const slug = guideSlugOf(guide);
      if (guide.id === `${owner}/${slug}`) bySlug.set(slug, guide);
    }
  }
  return [...bySlug.values()].sort(
    (a, b) =>
      CATEGORY_IDS.indexOf(a.data.category) - CATEGORY_IDS.indexOf(b.data.category) ||
      a.data.order - b.data.order ||
      byText(a.data.title, b.data.title),
  );
}
