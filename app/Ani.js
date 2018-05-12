import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
export default class ani extends Component{

constructor(props)
  {
  super(props);
  this.state = {
    name:"amit",
    showname:true,

  }

}  render() {

    return (
      <View >
      <Text>{this.state.name}</Text>
      <Text>{name}</Text>

      </View>
    );
  }
}

 AppRegistry.registerComponent('ani',() => ani);
