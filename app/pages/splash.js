import  React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, 
  Image,Button
} from 'react-native';
 
export default class Splash  extends Component  {
  render(){
     return (
        <View style={styles.container}>   
          <Text>gg</Text>      
        </View>
    );  
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
 
