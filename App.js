import React, {Component} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, AppRegistry } from 'react-native'
import { createStackNavigator, StackNavigator } from 'react-navigation'
import BottomTabs from './components/Navigation/tabs/BottomTabs.js'
export default App = () => {

  const App = createStackNavigator({
    BottomTabs
  })

  return <BottomTabs />
}

