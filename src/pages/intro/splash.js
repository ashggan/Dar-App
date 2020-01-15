import  React, { Component } from 'react';
<<<<<<< HEAD
import { StyleSheet, View, Text,  Image } from 'react-native';
 
class SplashScreen extends Component {
  render(){
    return (
       <View style={styles.container}>
         <Image source={require('./../../../img/logo.png')} style={styles.bg_img}></Image>
         <Text style={ styles.title }>DAR  </Text>  
       </View>
   );  
 }
}

export default class Splash  extends Component  {  
 
    state = {
      view : <SplashScreen />
    } 

  componentDidMount() {
    setTimeout( () => {
      this.props.navigation.navigate('switchRoute')
=======
import {
  StyleSheet,
  View,
  Text, 
  Image,Button,Picker
} from 'react-native';
import Switch from './switch'


class SplashScreen extends Component {
  render(){
    return (
       <View style={styles.container}>
         <Image source={require('./../../../img/logo.png')} style={styles.bg_img}></Image>
         <Text style={ styles.title }>DAR  </Text>  
       </View>
   );  
 }
}

export default class Splash  extends Component  {  
 
    state = {
      view : <SplashScreen />
    } 

  componentDidMount() {
    setTimeout( () => {
       this.setState({view : <Switch /> })
>>>>>>> 7a27d2492cef7232ffdbc793986d5494e522c96c
    }, 2000)  
  }

  

  render(){
     return (
<<<<<<< HEAD
       
         <SplashScreen />
=======
         this.state.view
        // <SplashScreen />
>>>>>>> 7a27d2492cef7232ffdbc793986d5494e522c96c
    ) 
  }
 
};
 
const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#BF4C47',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    color:'#fff',
    fontSize:40,
    fontWeight:'bold'
  },
  bg_img:{
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom:30
  }
  
});

// export default App;
