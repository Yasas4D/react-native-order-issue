/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{order:2}}>Second</Text>
      <Text style={{order:1}}>First</Text>
      <Text style={{order:3}}>Third</Text>
    </View>
  );
};

export default App;
