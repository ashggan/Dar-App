import React, { Component } from 'react'
import { Text, View ,StyleSheet, Image  ,TouchableHighlight } from 'react-native'
 
export default class Switch extends Component {
   
  state = {
    check : false
  }

  choose = () => {
    // console.log(this.state.check)
     this.setState(prevState => ({check : !prevState.check }) )
  }

  render() {
      return (
       <View style={styles.container}>
          <View style={styles.header}>
              <Image source={require('./../../../img/translation.png')} style={styles.bg_img}></Image>
          </View>
          <View style={styles.mainText}>
              <Text style={styles.title}> Language setting </Text>
              <Text style={styles.SubTitle}> Please select your language   </Text>
          </View>
          {/* { this.state.lang.map(lan => (<Lang  name={lan.name}  img={this.img}  />) ) }    */}
          
          <TouchableHighlight style={ styles.full } onPress={this.choose}  >
              <View style={ styles.fullBtn } >
                <Image style={styles.langImg}
                source={require('./../../../img/en.png')}/>
                <Text  style={styles.LangText}> English  </Text>  
                { this.state.check ? <Image style={styles.check}
                source={require('./../../../img/check.png')}/> : null }
              </View>
          </TouchableHighlight>

          <TouchableHighlight style={ styles.full } onPress={this.choose}  >
              <View style={ styles.fullBtn } >
                <Image style={styles.langImg}
                source={require('./../../../img/ar.png')}/>
                <Text  style={styles.LangText}> العربية  </Text>  
                { !this.state.check ? <Image style={styles.check}
                source={require('./../../../img/check.png')}/> : null }    
              </View>
        
          </TouchableHighlight>

          <TouchableHighlight style={ [styles.full , styles.footer]} 
                  onPress={() => this.props.navigation.navigate('mainPageRoute')} > 
                  <Text  style={styles.FooterTxt}>Continue </Text>
            </TouchableHighlight>
      </View>
      )
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