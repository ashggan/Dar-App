import React, { Component } from 'react'
import { Text, View ,StyleSheet, Image ,Button ,TouchableHighlight } from 'react-native'


class Lang extends Component {
  state = {
    name :''
  }
  choose() {
    console.log('language is arabic')
  }
  render(){
    return(

      <TouchableHighlight style={ styles.full }  onPress={this.choose} >
        <View style={ styles.fullBtn } >
          <Image style={styles.langImg}
          source={require('./../../../img/en.png')}/>
          <Text  style={styles.LangText}> English </Text>    
        </View>
      
    </TouchableHighlight>
    
    )
  }
}



class Footer extends Component {
  render(){
    return(
      <View style={ styles.footer }> 
      
         <Text  style={styles.FooterTxt}>Continue </Text>
       </View>
    )
  }
}




export default class login extends Component {

  constructor(){
    super()
    this.state ={
      count : 0, 
      lang :[
        {name: 'English', img:'en.png'},
        {name: 'العربية', img:'ar.png'},
      ]
      // showCounter : true
    }
  }
   
  componentDidMount(){
    // setInterval(this.inc  ,1000)
  }

  inc = () => {
    // console.log(this.state.count)

    this.setState(presState  => ({
      count : presState.count +1
    }))
   }
   
   toggle = () => this.setState(presState => ({
     showCounter : !presState.showCounter
   }))


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
          {/* <Lang/> */}
          <Lang  name="Ashgan" />
          <Footer />
      </View>
      )
  }
}


const styles = StyleSheet.create({
  footer :{
      position : "absolute",
      bottom :0,right :0,
      // backgroundColor : 'blue',
      paddingRight:'15%',
      paddingBottom:'10%',
    },
    FooterTxt :{
      fontSize :20,
      textAlign : "right"
    },
      
    full : { width :'100%', },
    fullBtn : {
      // backgroundColor :'teal',
      width :'100%',
      paddingLeft:'15%',
      paddingTop: 40,
      paddingBottom: 40,
      borderColor :'#D6DADD',
      borderBottomWidth :1,
      // flex :1 ,
      flexDirection : "row",
      // justifyContent : "space-evenly",
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
        // backgroundColor :'#111',
        width: '100%' ,
        padding:'15%'

    },
    mainText:{
      paddingLeft:'15%'
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
      // marginBottom:20
    }, 
  });