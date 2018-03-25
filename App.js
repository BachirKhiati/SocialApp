import React, {Component} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import BottomTabs from './components/Navigation/tabs/BottomTabs.js'
class Home extends Component {
  render () {
    return (

         this.props.navigation.push('BottomTabs')

    )
  }
}

const App = createStackNavigator({
  Home,
  BottomTabs,
  MaterialTopTabs,
  MaterialBottomTabs
})

const styles = {
  item: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee'
  }
}
