import { BedsList } from '@kaveh/ui';
import { useBeds, sampleBeds } from '@kaveh/core';

export default function BedsScreen() {
  const { beds, reserve, release } = useBeds(sampleBeds);
  return <BedsList beds={beds} onReserve={reserve} onRelease={release} />;
}
