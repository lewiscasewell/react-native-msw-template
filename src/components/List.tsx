import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import useCurrencyQuery from 'hooks/useCurrencyQuery';
import Item from 'components/Item';
import Text from 'components/Text';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from 'src/stacks/MainStack';
import SettingsButton from './SettingsButton';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

export const errorMessage = 'Something went wrong!';

const ItemSeparator = () => <View style={styles.separator} />;

type Navigation = NativeStackNavigationProp<MainStackParamList, 'Currencies'>;

const List = () => {
  const [sellSupported, setSellSupported] = React.useState<boolean | undefined>(
    undefined,
  );
  const currencyQuery = useCurrencyQuery({sellSupported});
  const navigation = useNavigation<Navigation>();
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  useEffect(() => {
    navigation.setOptions({
      //  eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <SettingsButton onPress={() => bottomSheetRef.current?.present()} />
      ),
    });
  }, [navigation]);

  if (currencyQuery.isFetching) {
    return <ActivityIndicator testID="loading" />;
  }

  if (currencyQuery.isError) {
    return <Text>{errorMessage}</Text>;
  }

  return (
    <>
      <FlatList
        data={currencyQuery.data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => <Item item={item} />}
        ItemSeparatorComponent={ItemSeparator}
      />
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={['40%']}
        onChange={index => console.log(index)}>
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
      </BottomSheetModal>
    </>
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
    paddingTop: 10,
  },
  item: {
    padding: 10,
  },
  active: {
    backgroundColor: 'lightgrey',
  },
  separator: {
    height: 8,
  },
});

export default List;
