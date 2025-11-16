import BedsList from '../../src/features/beds/components/BedsList';
import { useBeds } from '../../src/features/beds/hooks/useBeds';

export default function BedsScreen() {
  const { beds, reserve, release } = useBeds([
    { id: '1', label: 'Bed 1', status: 'available' },
    { id: '2', label: 'Bed 2', status: 'reserved' },
  ]);
  return <BedsList beds={beds} onReserve={reserve} onRelease={release} />;
}
