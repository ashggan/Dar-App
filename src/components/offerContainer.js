import React, { Component } from 'react'
import { Text, View ,StyleSheet, TouchableHighlight  ,Image } from 'react-native' 

export default class Cont extends Component {
    render() {
        return (
            <TouchableHighlight  >
                <View   style={styles.cont} onPress={this.props.showData}  >
                <Image style={styles.image}  source={require('./../assets/kh.png')}  />  
                <Text style= {styles.title}>{ this.props.place} </Text>

                </View>
            </TouchableHighlight>
        );
    }
} 

const styles = StyleSheet.create({
   image:{
        width:  '100%', 
        height: '100%', 
        resizeMode: 'cover',
        borderRadius : 10

    },
    cont:{
        marginTop: 20,
        height: 150,
        width : 100,
        backgroundColor:'#fff',
        marginRight: 15,
        borderRadius: 10,
        alignItems:'flex-start',
        justifyContent:'flex-end',
    
    },
    title:{
        position:'absolute',
        bottom: 10,
        left: 10,
        color: '#fff',
        fontSize: 15,
    }
})
