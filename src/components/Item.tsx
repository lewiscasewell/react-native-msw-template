import React from 'react';
import {View} from 'react-native';
import Text from 'components/Text';
import {Currency} from 'hooks/useCurrencyQuery';

const Item: React.FC<{item: Currency}> = ({item}) => {
  return (
    <View testID="card">
      <Text>{item.name}</Text>
      <Text>{item.code}</Text>
    </View>
  );
};

export default Item;
