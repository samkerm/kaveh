import { YStack, Text } from 'tamagui';

export default function SettingsScreen() {
  return (
    <YStack f={1} ai="center" jc="center" p="$4">
      <Text fontSize={18} fontWeight="600">
        Settings
      </Text>
    </YStack>
  );
}
