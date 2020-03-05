import React, { Component } from 'react'
import { Text, View ,StyleSheet  ,TextInput} from 'react-native'

const Input = props => (
    <View style={styles.formField}>
    <Text style={styles.title}  > {props.title}</Text> 
    <View style={{ flexDirection:'row'   }}>
            <TextInput 
                value={ props.value}
                onChangeText={  props.setVal }
                style={{   width:'50%',  backgroundColor:'#eee'  }}
                keyboardType= "numeric"
            />
            <View style={{
                backgroundColor:'#B3433F',
                alignItems:'center',
                justifyContent:'center',
                paddingRight: 4,
                paddingLeft:5
            }}>
               { props.label}  
            </View>    
    </View>

</View>
)
const styles = StyleSheet.create({
    
    formField:{
        width:'50%',       
        marginTop:20,
        alignItems:'flex-start',
         
    }, 
    title:{
        marginBottom:10
    }
})


export default   Input 