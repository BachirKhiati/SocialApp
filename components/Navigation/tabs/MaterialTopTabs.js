import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

class Album extends Component {
  render () {
    return (
      <View>
        <Text>Album</Text>
      </View>
    )
  }
}

class Library extends Component {
  render () {
    return (
      <View>
        <Text>Library</Text>
      </View>
    )
  }
}

class History extends React.Component {
  render () {
    return (
      <View>
        <Text>History</Text>
      </View>
    )
  }
}

export default createMaterialTopTabNavigator({
  Album,
  Library,
  History
})
