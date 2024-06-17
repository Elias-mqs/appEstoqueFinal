import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/Home';
import { ItemScreen } from './pages/itemScreen';
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='HomeStack'
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

function HomeTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        borderTopWidth: 0,
        bottom: 14,
        left: 14,
        right: 14,
        elevation: 0,
        borderRadius: 14,
      }
    }}>
      <Tab.Screen
        name="inventário"
        component={ItemScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <MaterialIcons name="inventory" size={28} color="#0d7066" />
            }
            return <MaterialIcons name="inventory" size={28} color="#689c97" />
          }
        }} />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <MaterialIcons name="library-add" size={28} color="#0d7066" />
            }
            return <MaterialIcons name="library-add" size={28} color="#689c97" />
          }
        }} />
    </Tab.Navigator>
  );
}

