import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../styles/theme';

// Telas
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/patient/HomeScreen';
import ProfileScreen from '../screens/patient/ProfileScreen';
import FormScreen from '../screens/patient/FormScreen';
import MoreScreen from '../screens/patient/MoreOptions';
import ProgressScreen from '../screens/patient/ProgressScreen';
import HidratationScreen from '../screens/patient/ActivityScreen/Hidratation'; 
import ActivityScreen from '../screens/patient/ActivityScreen/Activity'; 
import Sleep from '../screens/patient/ActivityScreen/Sleep'; 
import Challenges from '../screens/patient/ActivityScreen/Challenges'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Theme.colors.primary,
        tabBarInactiveTintColor: Theme.colors.locked,
        tabBarStyle: {
            borderTopWidth: 0,
            elevation: 10,
            height: 60,
            backgroundColor: Theme.colors.card
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          if (route.name === 'FormScreen') iconName = focused ? 'document-text' : 'document-text-outline';
          else if (route.name === 'Progresso') iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          else if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'MoreScreen') iconName = focused ? 'grid' : 'grid-outline';
          else if (route.name === 'Perfil') iconName = focused ? 'person' : 'person-outline';

          return <Ionicons name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tab.Screen name="FormScreen" component={FormScreen} />
      <Tab.Screen name="Progresso" component={ProgressScreen} /> 
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MoreScreen" component={MoreScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="Hidratation" component={HidratationScreen} />
      <Stack.Screen name="Activity" component={ActivityScreen} />
      <Stack.Screen name="Sleep" component={Sleep} />
      <Stack.Screen name="Challenges" component={Challenges} />
    </Stack.Navigator>
  );
}