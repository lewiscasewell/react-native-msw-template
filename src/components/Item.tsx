import React from 'react';
import {Text, View} from 'react-native';
import {Currency} from '../hooks/types';

const Item: React.FC<{item: Currency}> = ({item}) => {
  return (
    <View testID="card">
      <Text>{item.name}</Text>
      <Text>{item.code}</Text>
    </View>
  );
};

export default Item;
