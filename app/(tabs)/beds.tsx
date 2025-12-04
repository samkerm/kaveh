import { BedsList } from '@resonara/ui';
import { useBeds, sampleBeds } from '@resonara/core';

export default function BedsScreen() {
  const { beds, reserve, release } = useBeds(sampleBeds);
  return <BedsList beds={beds} onReserve={reserve} onRelease={release} />;
}
