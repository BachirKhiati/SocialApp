import React, {Component} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import Tabs from './components/Navigation/TabsNavigationRoot'
import './ReactotronConfig'

export default class App extends Component {

  render () {
    return (
      <Tabs />
    )
  }
}
