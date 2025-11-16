import { useMemo, useState } from 'react';

export type Bed = { id: string; label: string; status: 'available' | 'reserved' };

export function useBeds(initial: Bed[] = []) {
  const [beds, setBeds] = useState<Bed[]>(initial);
  const available = useMemo(() => beds.filter((b) => b.status === 'available'), [beds]);
  const reserved = useMemo(() => beds.filter((b) => b.status === 'reserved'), [beds]);

  function reserve(id: string) {
    setBeds((prev) => prev.map((b) => (b.id === id ? { ...b, status: 'reserved' } : b)));
  }

  function release(id: string) {
    setBeds((prev) => prev.map((b) => (b.id === id ? { ...b, status: 'available' } : b)));
  }

  return { beds, available, reserved, reserve, release };
}
