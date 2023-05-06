import {RootNavigation} from './src/navigator';
import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </View>
  );
}
