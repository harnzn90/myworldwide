import {View, Text, Button} from 'react-native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from './src/pages/Main/Main';
import Fav from './src/pages/Fav/Fav';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './src/pages/Login/Login';
import Signup from './src/pages/SignUp/Signup';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTab = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 20,
          },
          tabBarStyle: {
            height: 80,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Fav') {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={50} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Fav" component={Fav} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
