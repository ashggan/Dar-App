import React, { Component } from 'react'
import { Text, View , StyleSheet,Image ,TouchableHighlight } from 'react-native'

export default class Premission extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.title} > ACCESS YOUR LOCATION </Text>

                <View style =  {styles.bgc}>
                   <Image  source={require('./../../assets/loction.png')}  /> 
                </View>
                <Text style={styles.txt}>In order for us to deliver the best experience  Please enable location access.
                </Text>
                <View style={{  width :'100%' , height :'35%' , alignItems:  'center' ,}}>

                
                <TouchableHighlight  style={[styles.sign , { marginTop : 50 }]}
               onPress = {() => this.props.navigation.navigate('NotifyRoute')}>
                 <Text style={styles.btnText}>Enable Location Services   </Text>
               </TouchableHighlight>
               <Text style={styles.Btmtxt} onPress = {() => this.props.navigation.navigate('NotifyRoute')}> Do not allow</Text>

               </View>
            </View>
        )
    }
}

// 

const styles = StyleSheet.create({
    container :{
        flex :1,
        // backgroundColor :'teal'
    },
    Btmtxt:{
        textAlign : 'center',
        color : '#6494AA',
        fontSize : 16,
        paddingTop : 30
    },
    btnText :{
        color :'#fff', 
      },
    sign :{
        backgroundColor : '#E9B872' , 
        alignItems: 'center' , 
        justifyContent : 'center',
        width :'80%' , 
        height : 50,
        marginTop : 10 , 
        borderRadius : 5 ,
        
      },
    txt :{
        // backgroundColor : 'teal',
        marginLeft : 40,
        marginRight : 40,
        textAlign : 'center',
        color : '#8E8E8E',
        fontSize : 16
    },
    bgc :{
        justifyContent : 'center', 
        alignItems : 'center', 
        height : '50%'
    },
    title :{
        textAlign : 'center',
        paddingTop : 60,
        fontSize : 25,
        fontWeight : 'bold',
        color :'#6494AA'
    }
})