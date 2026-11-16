export const SITE = {
  name: 'Taller Abierto',
  description:
    'Guías de mantenimiento paso a paso, abiertas y hechas por la comunidad, para cualquier vehículo.',
  repo: 'https://github.com/etcheparedev/taller-abierto',
  /** Default branch of the repo: the "Proponer una guía" form creates files on it. */
  branch: 'main',
};

/** Prefix an internal path with the configured base (needed for GitHub Pages sub-paths). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/|\/$/g, '');
  return clean ? `${base}/${clean}/` : `${base}/`;
}
