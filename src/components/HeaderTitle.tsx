import React from 'react';
import {StyleSheet} from 'react-native';
import Text from 'components/Text';

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

export default HeaderTitle;
