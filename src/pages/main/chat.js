import React, { Component } from 'react'
import { Image, View } from 'react-native'

export default class Chat extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                backgroundColor: '#111'
            }}>
                <Image style={{
                      width:  '100%', 
                      height: '100%', 
                     resizeMode: 'cover',
                }}  source={require('./../../assets/chat.png')}  />  
                 
            </View>
        )
    }
}
