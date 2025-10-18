import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookTableScreen from './src/screens/BookTableScreen';
import LocationScreen from './src/screens/LocationScreen';
import { MenuProvider } from 'react-native-popup-menu';
import MainTabs from './src/components/MainTabs';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="MainTabs"
          screenOptions={{ headerShown: false }}
        >
          <stack.Screen name="MainTabs" component={MainTabs} />

          <stack.Screen
            name="BookTable"
            component={BookTableScreen}
            options={{
              headerShown: true,
              title: 'Book a table',
            }}
          />
          <stack.Screen
            name="Locations"
            component={LocationScreen}
            options={{
              headerShown: true,
              title: 'Locations',
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
