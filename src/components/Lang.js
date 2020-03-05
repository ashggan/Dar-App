import React, { Component } from 'react'
import { Text, View,TouchableHighlight ,StyleSheet,Image } from 'react-native'
 
 
 export default class Lang extends Component {
       
     render() {
         
         return (
          <TouchableHighlight style={ styles.full } 
            onPress={ this.props.selectLang}  >
              <View style={ styles.fullBtn } >
                <Image style={styles.langImg} source={this.props.flag}/>
                <Text  style={styles.LangText}> { this.props.name}   { this.props.check}   </Text>
                {this.props.check ? <Image style={styles.check}  source={require('./../../img/check.png')}/> : null }  
              </View>
          </TouchableHighlight>
         )
     }
 }
 
const styles = StyleSheet.create({
     
      check:{
        position: 'absolute', 
        right:50 ,
       },
      full : { 
        width :'100%',  
      },
      fullBtn : {
        width :'100%',
        paddingLeft:'10%',
        paddingTop: 40,
        paddingBottom: 20,
        borderColor :'#D6DADD',
        borderBottomWidth :1,
        flexDirection : "row", 
        alignItems :"center"
      },
      LangText:{
        fontSize:20
      },
      langImg:{
         marginRight: 20
      },
      bigText:{
        fontSize: 30,
        textAlign: 'center' ,
        color: 'teal'
      },
      
       
    }); 