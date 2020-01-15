import React, { Component } from 'react'
import { Text, View ,StyleSheet ,Image ,TouchableHighlight,ScrollView} from 'react-native'

export default class Custom extends Component {

    state  ={
        properties :['Apartment','Building','House','Land']
    }

    goTo = () => { 
            this.props.navigation.navigate('CustomRoute')
    }

    render() {
        return (
            <View style ={{flex :1}}>
                <View style={styles.header}>
                <Text style={styles.title}>Customize</Text>
                <Text style={styles.title}>Your Experience</Text>
                </View>
               
        
                 <View style ={{flexDirection:"row" }}>
                    <Text style={styles.subtitle}>You are looking for ?  </Text>
                    <Text style={styles.line}>  Select ( Max 3 ) </Text>
                </View>
                <View style={styles.vert}   >
                <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>Apartment </Text>
                    </TouchableHighlight>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>Building </Text>
                    </TouchableHighlight>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>House </Text>
                    </TouchableHighlight>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>Land </Text>
                    </TouchableHighlight>
                 </ScrollView> 
                </View>
                <View style ={{flexDirection:"row" }}>
                    <Text style={styles.subtitle}>You are looking for ?  </Text>
                    <Text style={styles.line}>  Select ( Max 3 ) </Text>
                </View>
                <View style={styles.vert}   >
                <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>Apartment </Text>
                    </TouchableHighlight>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>Building </Text>
                    </TouchableHighlight>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>House </Text>
                    </TouchableHighlight>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>Land </Text>
                    </TouchableHighlight>
                 </ScrollView> 
                </View>
                <View style ={{flexDirection:"row" }}>
                    <Text style={styles.subtitle}>You are looking for ?  </Text>
                    <Text style={styles.line}>  Select ( Max 3 ) </Text>
                </View>
                <View style={styles.vert}   >
                <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>Apartment </Text>
                    </TouchableHighlight>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>Building </Text>
                    </TouchableHighlight>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>House </Text>
                    </TouchableHighlight>
                    <TouchableHighlight   style={styles.circle} >
                        <Text style={styles.txtCirle}>Land </Text>
                    </TouchableHighlight>
                 </ScrollView> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    vert :{
        flexDirection: 'row',
        height : 140 , 
        alignItems : 'center',
        paddingLeft : 30
    },
    line :{
        paddingTop : 15,
        fontSize : 16,
        color :'#8E8E8E',
        position :'absolute',
        right:20
    },
    circle:{
        height : 90,
        width : 90,
        borderRadius : 100 ,
        borderWidth : 1 ,
        borderColor : '#8E8E8E',
        justifyContent :'center',
        alignItems :'center',
        margin: 10
    },
    txtCirle :{
        fontSize : 10
    },
    select :{
        width : '100%',
        height : '35%', 
        justifyContent :'center',
        alignItems :'center',
        paddingLeft : 30
    },
    header :{
        width : '100%', 
        justifyContent :'center',
        paddingLeft : 30,
        paddingTop : 30

    },
    title :{
        fontSize :30,
        color : '#6494AA',
        fontWeight : 'bold'
    },
    subtitle :{
        color :'#8E8E8E',
        fontSize : 16,
        paddingLeft : 30,
        paddingTop : 15

    }
} )
