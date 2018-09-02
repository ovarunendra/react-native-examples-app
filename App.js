import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './examples/Home';
import {
  FloatingActionExample,
  KeyboardViewExample,
  VictoryChartExample
} from './examples';

const RootStack = createStackNavigator({
  Home,
  FloatingView: FloatingActionExample,
  KeyboardView: KeyboardViewExample,
  VictoryView: VictoryChartExample
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
