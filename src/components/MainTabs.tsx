import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          returnIcon(route.name, focused, color, size),
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen name="Menu" component={MenuScreen} />
    </tab.Navigator>
  );
};

function returnIcon(
  routeName: string,
  focused: boolean,
  color: string,
  size: number,
) {
  let iconName: string = 'ellipse-outline';
  switch (routeName) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Menu':
      iconName = focused ? 'restaurant' : 'restaurant-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
}

export default MainTabs;
