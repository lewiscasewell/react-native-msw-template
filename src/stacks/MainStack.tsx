import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from 'src';
import HeaderTitle from 'src/components/HeaderTitle';

export type MainStackParamList = {
  Currencies: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: HeaderTitle,
          }}
          name="Currencies"
          component={Index}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
