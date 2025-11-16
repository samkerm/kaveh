import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { TopTabs } from '@/navigation/TopTabs';

export default function TabsLayout() {
  if (Platform.OS === 'web') {
    return (
      <TopTabs>
        <TopTabs.Screen name="index" options={{ title: 'Home' }} />
        <TopTabs.Screen name="beds" options={{ title: 'Beds' }} />
        <TopTabs.Screen name="settings" options={{ title: 'Settings' }} />
      </TopTabs>
    );
  }
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="beds" options={{ title: 'Beds' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
