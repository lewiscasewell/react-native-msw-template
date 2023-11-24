import React from 'react';
import {
  Text as RNText,
  StyleSheet,
  type TextProps as RNTextProps,
} from 'react-native';

interface TextProps extends RNTextProps {}

const Text: React.FC<TextProps> = props => {
  return (
    <RNText style={[styles.text, props.style]} {...props}>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {color: 'black'},
});

export default Text;
