import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  AppRegistry,
  Navigator,
  AsyncStorage
} from 'react-native';


 
class Memberarea extends Component{
  //define state,Set initial State
  state = {
    username: [],
  }
  ComponentDidMount(){
      this._loadInitialState().done();
  }
    //load initial state
    _loadInitialState =async() => {
        //get username from AsyncStorage
        var value = await AsyncStorage.getItem('username');
        if(value!==null){
            this.setState({ username: value}); 
        }
    }
  render(){

        return(
            <View style ={styles.container}>
                <Text>Welcome {this.state.username} </Text >
            </View>
        );
  }


};

const styles = {
 container:{
     flex:1,
     padding: 20,
 }
};

export default Memberarea;
