import React, { Component } from 'react'
import { Text, View ,StyleSheet ,ScrollView ,Dimensions } from 'react-native'
import Header from './../../components/Header'
const screenHeight = Math.round(Dimensions.get('window').height);  

export default class TermsConditions extends Component {
    goTo = () => {
        // alert('yeah')
        setInterval(() => {
            let data =  this.props.navigation.state.params.data
            this.props.navigation.navigate('PremissionRoute',{data}) 
        }, 2000);
    }

    componentDidMount (){
        let data =  this.props.navigation.state.params.data
        console.log(data)
    }


    render() {

        return (
                <View style={styles.container}>
                    <ScrollView   showsVerticalScrollIndicator={false} style={{padding:50,paddingTop:0, marginBottom:50}}>

                    <Header title="Terms & Condition " subTitle="By continuing you accept" />
                    <Text style={styles.txt} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text> 
                    <Text style={styles.txt} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text> 
                    <Text style={styles.txt} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text> 
                    </ScrollView>
                    <View style={styles.agreeBox}>
                        <Text style={styles.agreeTxt} onPress={this.goTo}>I Agree    </Text>
                    </View> 
                </View>
                

        )
    }
}


const styles = StyleSheet.create({  
    container:{
        flex:1,  
        justifyContent:'flex-start', 
    },
    txt:{
        color:'#8E8E8E', 
        fontSize:16, 
        lineHeight:25
    },
    agreeBox:{
        backgroundColor:'rgba(255, 255, 255, 0.7)', 
        height:120,
         width: '100%',
         position:'absolute', 
        top:screenHeight-120,
        justifyContent:'center',
        alignItems:'center'
    },
    agreeTxt:{color:'#E9B872',fontSize:24}

   
} )