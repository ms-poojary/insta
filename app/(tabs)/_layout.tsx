import { Tabs } from 'expo-router';
import { Ionicons,FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarLabelStyle: { display: 'none' }, // Hide labels by setting display to none        tabBarStyle: { height: 60},
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
        <Tabs.Screen
        name='explore'
        options={{
          tabBarLabel: 'Explore  ',
          tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
      <Tabs.Screen name='post'
      options={
        {
          tabBarIcon:({color,size})=><FontAwesome name="plus-square-o" size={size} color={color} />
        }
      }
      />
      <Tabs.Screen name='reels'
      options={
        {
          tabBarIcon:({color,size})=><Ionicons name="play-sharp" size={size} color={color} />
        }
      }
      />
    
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: 'Profile  ',
          tabBarIcon: ({ color, size }) => <Ionicons name="accessibility" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
