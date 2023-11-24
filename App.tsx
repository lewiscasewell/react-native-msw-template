/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainStack from 'src/stacks/MainStack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={styles.flex}>
        <BottomSheetModalProvider>
          <MainStack />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
