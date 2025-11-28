import type { Bed } from './useBeds';

// Sample domain fixtures; replace with API data later.
export const sampleBeds: Bed[] = [
  { id: '1', label: 'Bed 1', status: 'available' },
  { id: '2', label: 'Bed 2', status: 'reserved' },
  { id: '3', label: 'Bed 3', status: 'available' },
];

export function createBeds(count: number): Bed[] {
  return Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    label: `Bed ${i + 1}`,
    status: i % 2 === 0 ? 'available' : 'reserved',
  }));
}
