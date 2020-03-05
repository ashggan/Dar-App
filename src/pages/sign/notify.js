import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image ,TouchableHighlight } from 'react-native'

export default class Notify extends Component {

    render() {
        // const  data =  this.props.navigation.state.params.data

        return (
            <View style = {styles.container}>
                <Text style = {styles.title} >   CAN WE NOTIFY YOU?   </Text>

                <View style =  {styles.bgc}>
                   <Image source={require('./../../assets/notify.png')}  /> 
                </View>
                <Text style={styles.txt}>Get notifications for new offers,  </Text>
                <Text style={styles.txt}> and updates of your sales. </Text>
                
                <TouchableHighlight  style={[styles.sign  ]}
               onPress = {() => this.props.navigation.navigate('mainNavRoute')}>
                 <Text style={styles.btnText}>Enable Push Notification   </Text>
               </TouchableHighlight>
               <Text style={styles.Btmtxt} onPress = {() => this.props.navigation.navigate('mainNavRoute')}> Do not allow </Text>

        
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container :{
        flex :1,
        alignItems:'center',
        justifyContent: 'space-evenly'
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
        fontSize : 14
    },
    bgc :{ 
        height : '40%',
        // backgroundColor:'teal'
    },
    title :{
        textAlign : 'center',
        paddingTop : 60,
        fontSize : 22,
        fontWeight : 'bold',
        color :'#6494AA'
    }
})