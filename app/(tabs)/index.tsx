import { Link } from 'expo-router';
import { YStack, XStack, Text, Button, Separator } from 'tamagui';

export default function HomeScreen() {
  return (
    <YStack f={1} ai="center" jc="center" p="$4" gap="$4">
      <Text fontSize={20} fontWeight="600">
        Welcome to Kaveh
      </Text>
      <Separator />
      <XStack gap="$3">
        <Link href="/(tabs)/beds" asChild>
          <Button>Go to Beds</Button>
        </Link>
        <Link href="/(tabs)/settings" asChild>
          <Button>Settings</Button>
        </Link>
      </XStack>
    </YStack>
  );
}
