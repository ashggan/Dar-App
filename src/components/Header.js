import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'

const Header = props =>  (
    <View style={styles.header}>
                <Text style={styles.title}>{ props.title}  </Text>
                <Text style={styles.subtitle}>{ props.subTitle} </Text>
            </View>
)
     
 


let styles = StyleSheet.create({
    header :{
        width : '100%',
        height : '25%', 
        justifyContent :'center',
        // paddingLeft : 50
    },
    title :{
        fontSize :30,
        color : '#6494AA',
        fontWeight : 'bold'
    },
    subtitle :{
        color :'#BFBFBF',
        fontSize : 20
    },
})

export default Header