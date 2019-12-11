
import  React, { Component } from 'react';
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
    }, 2000)  
  }

  

  render(){
     return (
         this.state.view
        // <SplashScreen />
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
