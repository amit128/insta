
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
 import Ap from './app/Ap.js';


export default class App extends Component{
  render() {
    return (
      <View >
      <Ap message="hello amit"/>
      </View>

    );
  }
}


 AppRegistry.registerComponent('App',()=>App);
