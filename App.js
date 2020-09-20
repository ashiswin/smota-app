/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import DailyReadingScreen from './src/screens/DailyReadingsScreen';
import BulletinsScreen from './src/screens/BulletinsScreen';
import MoreScreen from './src/screens/MoreScreen';

const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Daily Readings') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Bulletins') {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
              } else if (route.name === 'More') {
                iconName = focused
                  ? 'ellipsis-horizontal'
                  : 'ellipsis-horizontal-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Daily Readings" component={DailyReadingScreen} />
          <Tab.Screen name="Bulletins" component={BulletinsScreen} />
          <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
