import React, {Component} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, AppRegistry } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import BottomTabs from './components/Navigation/tabs/BottomTabs.js'
import MaterialTopTabs from './components/Navigation/tabs/MaterialTopTabs'
import MaterialBottomTabs from './components/Navigation/tabs/MaterialBottomTabs'

class Home extends Component {
  render () {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.push('BottomTabs')}
        >
          <Text>Bottom tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.push('MaterialTopTabs')}
        >
          <Text>Material top tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.push('MaterialBottomTabs')}
        >
          <Text>Material bottom tabs</Text>
        </TouchableOpacity>
      </View>
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
AppRegistry.registerComponent('SocialApp', () => App)
