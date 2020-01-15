import React, { Component } from 'react'
import { Text, TouchableHighlight ,StyleSheet  } from 'react-native'

export default class Box extends Component {
     
    render() {
        return (
            <TouchableHighlight 
                style={styles.box}
                onPress={this.props.setVal}
            >
                <Text style={{fontSize:12}}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
  
    box: {
        borderRadius:5, 
       marginBottom: 30,
       backgroundColor:'#eee',
       marginRight: 10,
       justifyContent:'center',
       alignItems:'center',
    //    padding : 10, 
       height:40,
       width:'30%',
       alignItems:'center'
    },
 
})