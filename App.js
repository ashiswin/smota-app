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
import HomeScreen from './src/screens/HomeScreen';
import DailyReadingScreen from './src/screens/DailyReadingsScreen';
import BulletinsScreen from './src/screens/BulletinsScreen';
import MoreScreen from './src/screens/MoreScreen';

const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
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
