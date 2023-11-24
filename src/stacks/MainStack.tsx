import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from 'src';
import Text from 'components/Text';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const HeaderTitle = (props: {
  children: string;
  tintColor?: string | undefined;
}) => (
  <Text
    testID="header-title"
    style={[headerTitleStyles.headerTitle, {color: props.tintColor}]}>
    {props.children}
  </Text>
);

const headerTitleStyles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
  },
});

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
