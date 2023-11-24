import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'components/Text';
import {Currency} from 'hooks/useCurrencyQuery';

const Item: React.FC<{item: Currency}> = ({item}) => {
  return (
    <View testID="card" style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.code}>{item.code}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#68e3e8',
    borderRadius: 20,
    borderCurve: 'continuous',
  },
  name: {
    fontSize: 16,
  },
  code: {
    fontSize: 14,
    color: 'grey',
  },
});

export default Item;
