import React, { Component } from 'react'
import { Text, View ,StyleSheet, ImageBackground , Image ,TouchableHighlight} from 'react-native'

export default class Main extends Component {
    render() {
        return (
        <View > 
           <ImageBackground source={require('./../../assets/kh.jpg')} style={{width: '100%', height: '90%'}}>
                <View style={styles.container}>
                    <Image source={require('./../../assets/dar_logo.png')} style={styles.bg_img}></Image>
                </View>
            </ImageBackground>
            <View style={styles.inputsContainer}>
                <TouchableHighlight style={styles.fullWidthButton} >
                    <Text style={styles.fullWidthButtonText}>Submit</Text>
                </TouchableHighlight>
            </View>
        </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    inputsContainer: {
        // flex: 1, 
        height : 200,
        width:'100%',
        backgroundColor: 'aqua'
      },
      fullWidthButton: {
        height:70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      fullWidthButtonText: {
        fontSize:24,
        color: 'blue'
      },
      fullWidthButton: {
        height:70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      fullWidthButtonText: {
        fontSize:24,
        color: 'white'
      },
     
      inputsContainer: {
        flex: 1, 
        width:'100%'
      },
    bg_img:{
      width: 300,
      height: 100,
      resizeMode: 'contain',
      marginBottom:30
    },
   
    
  });