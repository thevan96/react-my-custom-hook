import { SafeAreaView, StatusBar, View } from 'react-native';
import React from 'react';

import useDimension from './useDimension';

const App = () => {
  const screen = useDimension();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          ...screen,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 200,
            height: 100,
            backgroundColor: '#AAA',
            borderRadius: 10,
          }}></View>
      </SafeAreaView>
    </>
  );
};

export default App;
