import React, { Component } from 'react'
import { Text, TouchableHighlight ,StyleSheet } from 'react-native'

export default class RedBox extends Component {
     
    render() {
        return (
            <TouchableHighlight 
                style={styles.redbox}
                onPress={this.props.setVal}
            >
                <Text style={{fontSize:12}}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
  
    redbox: {
        borderRadius:5,
        borderColor : '#963734',    
        borderWidth: 1,
       marginBottom: 30,
       backgroundColor:'#fff',
       marginRight: 10,
     justifyContent:'center',
    alignItems:'center',
       height:40,
       width:'30%',
       alignItems:'center'
    }, 
 
})