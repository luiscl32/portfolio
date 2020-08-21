import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//components
import * as scr from './screen-components';
import { options, options_no_transparent } from './screen-options';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={options} initialRouteName="Main">
          <Stack.Screen
            component={scr.MainPage}
            name={'Main'}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={scr.Dashboard}
            name={'Main/dashboard'}
            options={{
              title: 'Dashboard',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
