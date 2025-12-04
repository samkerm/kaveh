'use client';

import { sampleBeds } from '@resonara/core';
import type { Bed } from '@resonara/core';
import { BedsList } from '@resonara/ui';
import { YStack } from 'tamagui';

export default function BedsPage() {
  const beds = sampleBeds;
  return (
    <YStack p="$6" gap="$4">
      <BedsList
        beds={beds}
        onReserve={(id: Bed['id']) => console.log('reserve', id)}
        onRelease={(id: Bed['id']) => console.log('release', id)}
      />
    </YStack>
  );
}
