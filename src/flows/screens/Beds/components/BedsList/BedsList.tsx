import { YStack, XStack, Text, Button, Separator } from 'tamagui';

import type { Bed } from './useBeds';

type Props = {
  beds: Bed[];
  onReserve: (id: string) => void;
  onRelease: (id: string) => void;
};

export default function BedsList({ beds, onReserve, onRelease }: Props) {
  return (
    <YStack p="$4" space="$3">
      {beds.map((b) => (
        <YStack key={b.id} p="$3" bc="$background" br="$2">
          <XStack ai="center" jc="space-between">
            <Text>
              {b.label} — {b.status}
            </Text>
            <XStack space>
              <Button size="$2" disabled={b.status === 'reserved'} onPress={() => onReserve(b.id)}>
                Reserve
              </Button>
              <Button size="$2" disabled={b.status === 'available'} onPress={() => onRelease(b.id)}>
                Release
              </Button>
            </XStack>
          </XStack>
          <Separator mt="$2" />
        </YStack>
      ))}
    </YStack>
  );
}
