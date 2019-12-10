import React, { Component } from 'react'
import { Text, View ,StyleSheet } from 'react-native'

export default  Row = props => (
    <View style={styles.field}  >
      <Text style={styles.title} >{props.name} </Text>
      <Text style={styles.subtitle} >{props.phone} </Text>
    </View>
  )


  const styles = StyleSheet.create({
      field :{
          width :'100%',
          marginBottom: 40   ,
          borderBottomColor : '#eee'  ,
          borderBottomWidth : 1 
      },
      title :{
          fontSize :22,
          paddingBottom :10,
          color : '#111'
      },
      subtitle: {
          fontSize: 18,
          color : 'teal'
      }
  })