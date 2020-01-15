import React, { Component } from 'react'
import { Text, View ,StyleSheet ,Image ,TouchableHighlight} from 'react-native'

export default class Type extends Component {

    state  ={
        customCircle :{ },
        textColor :{}
    }
    goTo = () => {
        this.setState(prevState => ({customCircle : {borderColor : '#B3433F'}}))
        this.setState(prevState => ({textColor : {color : '#B3433F'}}))
        setTimeout(()=> {
            this.props.navigation.navigate('mainNavRoute')
        }, 500)

    }
    render() {
        return (
            <View style ={{flex :1}}>
                <View style={styles.header}>
                <Text style={styles.title}>You’re a ? </Text>
                <Text style={styles.subtitle}>Select your experience type  </Text>
                </View>
                <View style={styles.select}>
                    <TouchableHighlight style={[styles.circle, this.state.customCircle]} 
                    onPress = {this.goTo} >
                        <Image source={require('./../../assets/user.png')}  /> 
                    </TouchableHighlight>
                    <Text style ={[styles.line , this.state.textColor ]}>An Individual</Text>
                </View> 
                <View style={styles.select}>
                    <TouchableHighlight style={[styles.circle, this.state.customCircle] }>
                        <Image source={require('./../../assets/agent.png')}  /> 
                    </TouchableHighlight>
                    <Text style ={[styles.line , this.state.textColor ]} >A Real Estate Agent  </Text>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    line :{
        paddingTop : 30,
        fontSize : 16,
        color :'#8E8E8E'
    },
    circle:{
        height : 120,
        width : 120,
        borderRadius : 100 ,
        borderWidth : 1 ,
        borderColor : '#8E8E8E',
        justifyContent :'center',
        alignItems :'center',
    },
    select :{
        width : '100%',
        height : '35%',
        // backgroundColor :'aqua',
        justifyContent :'center',
        alignItems :'center',
        paddingLeft : 30
    },
    header :{
        width : '100%',
        height : '20%',
        // backgroundColor :'aqua',
        justifyContent :'center',
        paddingLeft : 30
    },
    title :{
        fontSize :30,
        color : '#6494AA',
        fontWeight : 'bold'
    },
    subtitle :{
        color :'#BFBFBF',
        fontSize : 20
    }
} )
