import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Text from 'components/Text';
import List from 'components/List';

function Index(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={styles.title}>Currencies</Text>
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default Index;
