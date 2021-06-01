/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Component1 from './src/componant1';


const App= () => {
 

  return (
    <View style={styles.background}>
        <Component1></Component1>
    </View>
  );
};

const styles = StyleSheet.create(
{
  background:{
    width: '100%',
    height: '100%',
    backgroundColor:'#656565'
  }
});

export default App;
