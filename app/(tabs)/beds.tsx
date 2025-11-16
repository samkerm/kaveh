import BedsList from '../../src/flows/screens/Beds/components/BedsList/BedsList';
import { useBeds } from '../../src/flows/screens/Beds/components/BedsList/useBeds';

export default function BedsScreen() {
  const { beds, reserve, release } = useBeds([
    { id: '1', label: 'Bed 1', status: 'available' },
    { id: '2', label: 'Bed 2', status: 'reserved' },
  ]);
  return <BedsList beds={beds} onReserve={reserve} onRelease={release} />;
}
