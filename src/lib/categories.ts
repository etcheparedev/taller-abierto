/** The three maintenance segments every guide belongs to. */
export const CATEGORY_IDS = ['rutina', 'basico', 'especifico'] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

export const CATEGORIES: Record<CategoryId, { label: string; plural: string; description: string }> = {
  rutina: {
    label: 'Rutina',
    plural: 'De rutina',
    description: 'Lo que se repite cada cierto tiempo o kilometraje para que nada falle.',
  },
  basico: {
    label: 'Básico',
    plural: 'Básicos',
    description: 'Tareas simples que cualquiera puede hacer con herramientas comunes.',
  },
  especifico: {
    label: 'Específico',
    plural: 'Específicos',
    description: 'Trabajos puntuales de un sistema: requieren más experiencia o herramienta especial.',
  },
};

export const DIFFICULTY_LABELS = ['', 'Fácil', 'Intermedio', 'Avanzado'] as const;
