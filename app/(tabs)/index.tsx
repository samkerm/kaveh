import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Kaveh</Text>
      <Link href="/(tabs)/beds">Go to Beds</Link>
    </View>
  );
}
