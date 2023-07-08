// App.js
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import MainContainer from './components/MainContainer';
import MainNavigator from './components/MainNavigator';
function App(props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        hidden={true}
        backgroundColor="transparent"></StatusBar>
      <MainNavigator />
    </SafeAreaView>
  );
}

export default App;
