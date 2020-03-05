import React, { Component } from 'react'
import { Text, View ,StyleSheet, Image  ,TouchableHighlight ,FlatList } from 'react-native'
import Lang from './../../components/Lang' 

export default class Switch extends Component {
   
  state = {
    lang:'',
    languages : [
    {  name:'eng' , title:'English'  , img :  require('./../../../img/en.png'),check : false},
    {  name:'ar' ,  title:'العربية' , img : require('./../../../img/ar.png'),check : false},
  ]
     
  }
 
  choose = () => {
    // console.log(this.state.check)
     this.setState(prevState => ({check : !prevState.check }) )
  }

  selectLang = (item,index) => {
    let langList =  this.state.languages 
    langList[index].check = !langList[index].check 
    if(index == 0 )  langList[1].check = false
    else    langList[0].check = false 
    
    this.setState({languages:langList, lang:langList[index].name}) 
  }
  navigateTo = () => {
  
    let lang = this.state.lang 
    if(lang=='')  alert('Select language please')

    else   this.props.navigation.navigate('mainPageRoute',{lang})
 
  }
  
  renderItem =  ({item,index})   => {
    return (<Lang name= { item.title}  flag={item.img} selectLang={()=> this.selectLang(item,index)} check = {item.check} />)
  } 

  render() {
    const language  = this.state.languages 
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
          
          <FlatList 
            style={{  width:'100%'  }}
            data={language}
            renderItem={this.renderItem}
            keyExtractor={(item,index)=> index.toString()}
 
          />
           {/* <Lang /> */}

          <TouchableHighlight style={ [styles.full , styles.footer]} 
                  onPress={this.navigateTo} > 
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