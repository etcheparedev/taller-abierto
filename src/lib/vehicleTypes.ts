/** Vehicle kinds (`type` in vehicle.yaml) with the URL slug and label of each. */
export const VEHICLE_TYPES = {
  moto: { slug: 'motos', label: 'Motos' },
  auto: { slug: 'autos', label: 'Autos' },
  camioneta: { slug: 'camionetas', label: 'Camionetas' },
  otro: { slug: 'otros', label: 'Otros' },
} as const;

export type VehicleType = keyof typeof VEHICLE_TYPES;

export const VEHICLE_TYPE_IDS = Object.keys(VEHICLE_TYPES) as VehicleType[];
