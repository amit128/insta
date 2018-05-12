import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
export default class ap extends Component{
  static defaultProps={
   message:'hi there'
  }
constructor(props)
  {
  super(props);
  this.state = {
    name:"amit",
    showname:true,
    message:this.props.message
  }

}  render() {
    let name=this.state.showname ? this.state.name : 'no name';
    return (
      <View >
      <Text>{this.state.name}</Text>
      <Text>{name}</Text>
      <Text>{this.state.message}</Text>
      </View>
    );
  }
}

 AppRegistry.registerComponent('ap',() => ap);
