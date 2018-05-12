import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  Switch,
  ListView,
   FlatList,
   StyleSheet

} from 'react-native';
export default class ani extends Component{

  constructor(){
          super();
          this.state = {
              textValue:'Hello',
              switchValue: false
          }
        }
  onChangeText(value){
       this.setState({
           textValue:value
       });
   }
   onSwitchChange(value){
        this.setState({
            switchValue:value
        });
    }
 render() {

    return (
      <View style={styles.container}>
              <TextInput
                  placeholder="Enter Text"
                  value={this.state.textValue}
                  onChangeText={(value) => this.onChangeText(value)}

              /><Text>{this.state.textValue}</Text>
              <Switch
               value={this.state.switchValue}
               onValueChange={(value) => this.onSwitchChange(value)}
           />
           <FlatList
                    data={[
                      {key: 'Devin'},
                      {key: 'Jackson'},
                      {key: 'James'},
                      {key: 'Joel'},
                      {key: 'John'},
                      {key: 'Jillian'},
                      {key: 'Jimmy'},
                      {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                  />


      </View>
    );
  }
}
const styles=StyleSheet.create({
  contsiner:{
    flex:1,
    paddingTop:22
  },
  item:
  {
    padding:10,
    fontSize:10,
    height:44

  }
})
 AppRegistry.registerComponent('ani',() => ani);
