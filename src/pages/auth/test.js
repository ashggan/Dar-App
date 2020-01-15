import React, { Component } from 'react'
import { Button , View  ,StyleSheet ,TouchableHighlight  ,Text} from 'react-native'


export class ScreenComponentOne extends React.Component {
    render() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            borderWidth: 25,
            borderColor: 'teal',
          }}>
          <Button
            title="Go to two"
            onPress={() => this.props.navigation.navigate('routeNameTwo')}
          />
        </View>
      );
    }
  }
  
 export class ScreenComponentTwo extends React.Component {
    render() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            borderWidth: 25,
            borderColor: 'orange',
          }}>
          <Button
            title="Go to one"
            onPress={() => this.props.navigation.navigate('switchRoute')}
          />
        </View>
      );
    }
  }

  
    
    
    const styles = StyleSheet.create({
      footer :{
          position : "absolute",
          bottom :0,
          right :0,
          paddingRight:'15%',
          paddingBottom:'10%',
        },
        FooterTxt :{
          fontSize :20,
          textAlign : "right"
        },
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
        container: {
          position: "relative",
          backgroundColor: '#eee',
          flex:1,
          justifyContent:'flex-start',
          alignItems:'flex-start',
          // padding:'15%'
        },
        header:{
          width: '100%' ,
          padding:'10%'
    
        },
        mainText:{
          paddingLeft:'10%'
        },
        title:{
          color:'#111',
          fontSize:30,
          fontWeight:'700'
        },
        SubTitle:{
          color:'#6494AA',
          fontSize:20,
          marginTop:15
        },
        bg_img:{
          width: 100,
          height: 120,
          resizeMode: 'contain',
         }, 
      });