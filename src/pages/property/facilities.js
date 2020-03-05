import React, { Component } from 'react'
import { Text, View ,StyleSheet } from 'react-native'
import axios from 'react-native-axios'
 


export const Conditioner =  () => (
    <View style={{justifyContent:'center' ,alignItems:'center' }}> 
        <Icon  style={{color:'#8E8E8E'}}   size={20} name="bed" /> 
        <Text style={styles.iconSubTitle}>{data.rooms} Rooms </Text>
    </View>
)



const styles = StyleSheet.create({
    iconSubTitle:{fontSize:11 ,paddingTop:15},  
})

 
