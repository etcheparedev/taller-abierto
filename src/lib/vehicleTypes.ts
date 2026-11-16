/** Vehicle kinds (`type` in vehicle.yaml) with the URL slug and label of each. */
export const VEHICLE_TYPES = {
  motorcycle: { slug: 'motorcycles', label: 'Motos' },
  car: { slug: 'cars', label: 'Autos' },
  truck: { slug: 'trucks', label: 'Camionetas' },
  other: { slug: 'other', label: 'Otros' },
} as const;

export type VehicleType = keyof typeof VEHICLE_TYPES;

export const VEHICLE_TYPE_IDS = Object.keys(VEHICLE_TYPES) as VehicleType[];
