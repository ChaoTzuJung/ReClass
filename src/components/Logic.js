import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements'



 
class Logic extends Component{
  constructor(props) {
    super(props);
  }
  goToCreate= () => {
    this.props.navigation.navigate('Create', {  });
  };
   goToTab = () => {
      this.props.navigation.navigate('TabRouter');
   };
  render(){
    const { container, mask, background, border, image_background, linearGradient, image_icon, TextStyle, ButtonStyle ,InputText, LoginButton, small_icon, BottonText1, BottonText2 } = styles;
    return(
      <ScrollView>
      <View style = {container}>
          
          <Image 
            source={require('../img/png/RC-icon@1x.png')} 
            style={image_icon} 
          />

          <Text style = {TextStyle}>
           REMOTE    CLASS
          </Text>
          
          <View style = {InputText}>
            <Image 
            source={require('../img/png/ios-person-outline-white.png')} 
            style={small_icon} 
            />
            <TextInput
            style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0}}
            placeholder='Username'
            placeholderStyle={{ fontFamily: "Arial", Color: 'white' }}
            maxLength={30}
            multiline={false}
            placeholderTextColor="white"
            />
          </View> 
          <View style = {InputText}>
            <Image 
            source={require('../img/png/ios-unlocked-outline.png')} 
            style={small_icon}  
            />
             <TextInput
            style={{flex:1,zIndex: 6,fontSize: 20, position: 'relative', top: 0, left:0}}
            placeholder={'Password'}
            placeholderStyle={{ fontFamily: "Arial", borderColor: 'white' }}
            maxLength={12}
            multiline={false}
            placeholderTextColor="white"
            password={true}
            />
           
          </View>

          <View style = {LoginButton}>
            <Button
              onPress={this.goToTab}
              raised
              buttonStyle={{backgroundColor: '#35C4A4', borderRadius: 100,width: 335,height: 48,}}
              textStyle={{textAlign: 'center'}} 
              title='Get Started' />
          </View>
          <Text style = {BottonText1} onPress={() => this.goToCreate()}>Create Acount</Text>
          <Text style = {BottonText2} >Need Help?</Text>
          
           <Components.LinearGradient 
            colors={['#4BE4C2', 'rgba(151,220,190,0.5)']}
            start={{x: 0.01, y: 0.01}} end={{x: 0.4, y: 0.52}}
            style={linearGradient}>     
          </Components.LinearGradient>

        <View style={[mask]}> 
        </View>
        <Image 
            source={require('../img/png/background.png')} 
            style={image_background} 
        />

      </View>
      </ScrollView>
    );
  }
};

const styles = {
  container: {
    flex:1,
    position: 'relative',
  },
  mask:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 375,
    height: 667,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1

  },
  image_background:{
    position: 'absolute',
    //flex: 1,
    //alignSelf: 'stretch',
    //width: null,
    //justifyContent: 'center',
    //top: 0,
    //left: 0,
    zIndex: 0

  },
  image_icon:{
    position: 'absolute',
    top: 90,
    left: 102,
    zIndex: 3
  },
  linearGradient: {
    width: 375,
    height: 667,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    zIndex: 3,
    top: 235,
    left: 105,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  ButtonStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 4
  },
  InputText: {
    borderRadius: 100,
    zIndex: 5,
    width: 335,
    height: 48,
    top: 363,
    left: 20,
    marginTop:10,
    backgroundColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'flex-start',
    flexDirection:'row',
    alignItems: 'center',
  },
  LoginButton: { 
    //borderRadius: 100,
    zIndex: 5,
    width: 335,
    height: 48,
    top: 363,
    left: 20,
    marginTop:35,
    backgroundColor: 'rgba(53,196,164,0)',
    justifyContent: 'center',
    flexDirection:'row',

  },
  small_icon:{
    flexDirection:'column',
    zIndex: 6,
    marginLeft: 10,
    marginRight:10,
  },
  BottonText1:{
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'white',
    zIndex: 7,
    position: 'absolute',
    top: 595,
    left: 40,
    backgroundColor: 'rgba(0,0,0,0)',
  },  
    BottonText2:{
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Arial',
    color: 'white',
    zIndex: 7,
    position: 'absolute',
    top: 595,
    left: 256,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  
};

export default Logic;