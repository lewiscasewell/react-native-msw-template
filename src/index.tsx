import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import List from 'components/List';

function Index(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <List />
    </SafeAreaView>
  );
}

export default Index;
