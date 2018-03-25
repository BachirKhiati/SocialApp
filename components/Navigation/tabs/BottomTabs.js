import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Feed from '../../feed'
import Search from '../../search'
import Noti from '../../noti'
import Profile from '../../profile'
import Photo from '../../foto'

export default Tabs = () => {
  const Tabs = createBottomTabNavigator({
    Feed,
    Search,
    Noti,
    Profile
  })

  return <Tabs />
}
