import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../screens/Home';
import Sub from '../screens/Sub';
import Third from '../screens/Third';

export default function Navigation() {
  return (
    <>
      <NavigationContainer theme={DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

const Stack = createMaterialTopTabNavigator();
function RootNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="예상비용 산출" component={Home} />
        <Stack.Screen name="강화 성공률" component={Third} />
        <Stack.Screen name="시뮬레이션" component={Sub} />
      </Stack.Navigator>
    </>
  );
}
