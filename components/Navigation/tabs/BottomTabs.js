import React, {Component}from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const tabBarIcon = name => ({ tintColor }) => (
  <Icon name={name} color={tintColor} size={24} />
);

class Album extends Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('photo-album'),
  };

  render() {
    return (
      <View>
        <Text>Album</Text>
      </View>
    );
  }
}

class Library extends Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('photo-library'),
  };

  render() {
    return (
      <View>
        <Text>Library</Text>
      </View>
    );
  }
}

class History extends Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('history'),
  };

  render() {
    return (
      <View>
        <Text>History</Text>
      </View>
    );
  }
}

class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('shopping-cart'),
  };

  render() {
    return (
      <View>
        <Text>Cart</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Album,
  Library,
  History,
  Cart,
});
