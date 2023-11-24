import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Text from 'components/Text';

interface Props extends TouchableOpacityProps {}

const SettingsButton: React.FC<Props> = props => {
  return (
    <TouchableOpacity {...props}>
      <Text>Settings</Text>
    </TouchableOpacity>
  );
};

export default SettingsButton;
