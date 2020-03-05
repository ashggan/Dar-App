import React, { Component } from 'react'
import { Text, View ,StyleSheet } from 'react-native'
import NumericInput from 'react-native-numeric-input'


const iconSize = 1

 const Field  = props =>  (
     
            <View style={styles.formField}>
                <Text>{props.title}</Text>
                    <NumericInput 
                        value={props.value} 
                        onChange={ props.setValue }
                        // rounded 
                        minValue={0} 
                        textColor='#111'
                        borderColor='#fff0'
                        totalHeight={50}
                        containerStyle={{
                            backgroundColor:'#eee' ,
                            marginTop: 20
                        }}
                        type="up-down"
                        upDownButtonsBackgroundColor="#B3433F"
                        iconStyle={{ color: '#fff' , fontSize:14 ,paddingTop:5}} 
                    /> 
            </View>
          
  )
const styles = StyleSheet.create({
    
    formField:{
        width:'50%', 
        alignItems:'flex-start',
        marginTop:20
    }

})
export default  Field  
