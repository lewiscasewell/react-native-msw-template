import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useCurrencyQuery from '../hooks/useCurrencyQuery';
import Item from './Item';

export const errorMessage = 'Something went wrong!';

const List = () => {
  const [sellSupported, setSellSupported] = React.useState<boolean | undefined>(
    undefined,
  );
  const currencyQuery = useCurrencyQuery({sellSupported});

  if (currencyQuery.isFetching) {
    return <Text>Loading...</Text>;
  }

  if (currencyQuery.isError) {
    return <Text>{errorMessage}</Text>;
  }

  return (
    <FlatList
      //  eslint-disable-next-line react/no-unstable-nested-components
      ListHeaderComponent={() => (
        <View>
          <Text>Sell supported</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={sellSupported === true && styles.active}
              onPress={() => setSellSupported(true)}>
              Yes
            </Text>
            <Text
              style={sellSupported === false && styles.active}
              onPress={() => setSellSupported(false)}>
              No
            </Text>
            <Text
              style={sellSupported === undefined && styles.active}
              onPress={() => setSellSupported(undefined)}>
              Both
            </Text>
          </View>
        </View>
      )}
      data={currencyQuery.data}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Item item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  active: {
    backgroundColor: 'red',
  },
});

export default List;
