import React, { Component } from 'react' 
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
    TextInput,Button
  } from 'react-native';

import { createSwitchNavigator } from 'react-native-navigation';
// const AppNavigtor = createSwitchNavigator({
//   // "navOne" : compOneScreen,
//   // navTwo : compTwoScreen 
// });

// ************************ componant #1 *******************************
export  class compOneScreen extends Component {
  render (){
    return (
      <View styles={styles.container}>
        <Text>compOneScreen</Text>
        <Button title="got to 2" ></Button>
      </View>
    )
  }
}    

// ************************ componant #2 *******************************
export  class compTwoScreen extends Component {
  render (){
    return (
      <View styles={styles.container}>
        <Text>compTwoScreen</Text>
        <Button title="got to 1" ></Button>
      </View>
    )
  }
} 

// ************************ languages componant  *******************************

export default class languages extends Component {

    
    render() {
        return (
          // <AppNavigtor />
            <View style={styles.container}>
                <Text style={styles.title}> Ashgan  </Text>
                <TouchableOpacity onPress={() => this._onPressAppoimentButton()} style={styles.btn}>
                    <Button title="Order Online" style={styles.btn} color="#fff0" > </Button>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  
    container: {
      backgroundColor: '#BF4C47',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    title:{
      color:'#fff',
      fontSize:20,
      // fontWeight:'bold'
      paddingTop: 10,
      paddingBottom:20
    },
    bg_img:{
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginBottom:30
    },
    btn:{
      height: 40,
      width:160,
      borderRadius:10,
      backgroundColor : "#1110",
      marginLeft :50,
      marginRight:50,
      marginTop :20
    }
    
  });