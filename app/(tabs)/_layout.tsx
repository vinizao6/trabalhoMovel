import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Inicio',
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color={color} />
        )
      }}
    />
    <Tabs.Screen
      name="produtos"
      options={{
        title: 'produtos',
        tabBarIcon: ({ color }) => (
          <Ionicons name="cart" size={24} color={color} />
        )
      }}
    />
    <Tabs.Screen
      name="sobre"
      options={{
        title: 'sobre mim',

        tabBarIcon: ({ color }) => (
          <Ionicons name="person" size={24} color={color} />
        )
      }}
    />
    </Tabs>
  );
}
