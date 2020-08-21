import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//componentes
import * as scr from './screen-components';
const Stack = createStackNavigator();

const None = () => <></>;

export default function Navigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {console.log('RENDER NAV')}
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            component={scr.MainPage}
            name={'Main'}
            options={{
              header: None,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
