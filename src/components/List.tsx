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
          <View style={styles.container}>
            <Text
              style={[styles.item, sellSupported === true && styles.active]}
              onPress={() => setSellSupported(true)}>
              Yes
            </Text>
            <Text
              style={[styles.item, sellSupported === false && styles.active]}
              onPress={() => setSellSupported(false)}>
              No
            </Text>
            <Text
              style={[
                styles.item,
                sellSupported === undefined && styles.active,
              ]}
              onPress={() => setSellSupported(undefined)}>
              Both
            </Text>
          </View>
        </View>
      )}
      data={currencyQuery.data}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item}) => <Item item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  contentContainer: {
    paddingBottom: 100,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
  },
  active: {
    backgroundColor: 'lightgrey',
  },
});

export default List;
