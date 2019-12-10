import  React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, 
  Image,Button
} from 'react-native';
 

export default class App  extends Component  {
  render(){
     return (
        <View style={styles.container}>
          <Image source={require('./img/logo.png')} style={styles.bg_img}></Image>
          <Text style={styles.title}>DAR </Text>
          
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

// export default App;
