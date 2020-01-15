import React, { Component } from 'react'
import { Image, View ,Text} from 'react-native'

export default class Favorites  extends Component {
    render() {
        return (
            <View style={{
                flex:1, 
                justifyContent:'center',
                alignItems: 'center'
            }}>

                <Image style={{
                      width:  200, 
                      height: 200,  
                }}  source={require('./../../assets/fav.png')}  />  
                <Text style={{
                    marginTop: 20,fontSize:15
                }}> Looks like it’s empty</Text>
                <Text style={{ 
                    marginTop: 20,fontSize:15

                }}>go and admire some real state</Text>
            </View>
        )
    }
}
