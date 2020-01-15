import React, { Component } from 'react'
import { Text, View , StyleSheet  ,TouchableHighlight } from 'react-native'
import { CheckBox } from 'react-native-elements'

export default class Terms extends Component {
    state = {
        hideStyle :{
            display:'none',
            zIndex: -2 
        },
        checkedFirst: false,
        checkedSec: false,
        checkedThird : false
    }

    getHandler = key => {
        return val => this.setState ({[key] : val})
    }

    render() {
        return (
            <View style={styles.container} >
            <View style={{  flex:1, justifyContent: 'flex-start',padding : 30 ,}}>
                <Text style={styles.termsTitle}>
                    Our Terms and Conditions
                </Text>
                <View style={styles.termBox} >
                    <View style={ [styles.agree, !this.state.checkedFirst ?  this.state.hideStyle  : '']} >
                        <Text style={styles.agreeTxt}>Agreed </Text>
                    </View>
                    <View style={styles.termCheck}>
                    <CheckBox 
                        checkedColor='#23D25B'
                        checked={this.state.checkedFirst}
                        onPress={() => this.setState({checkedFirst: !this.state.checkedFirst})} 
                        /> 
                    </View>
                    <View style={styles.termTxt}>
                        <Text style={styles.termSub}>
                            Fill in all the needed
                            information carefully.
                        </Text>
                    </View>
                </View>
                <View style={styles.termBox} >
                    <View style={ [styles.agree, !this.state.checkedSec ?  this.state.hideStyle  : '']} >
                        <Text style={styles.agreeTxt}>Agreed </Text>
                    </View>
                    <View style={styles.termCheck}>
                    <CheckBox 
                        checkedColor='#23D25B'
                        checked={this.state.checkedSec}
                        onPress={() => this.setState({checkedSec: !this.state.checkedSec})}  
                        /> 
                    </View>
                    <View style={styles.termTxt}>
                        <Text style={styles.termSub}>
                            locate the property precisely 
                            and upload a clear image of it.
                        </Text>
                    </View>
            </View>

            <View style={styles.termBox} >
                <View style={ [styles.agree, !this.state.checkedThird ?  this.state.hideStyle  : '']} >
                    <Text style={styles.agreeTxt}>Agreed </Text>
                </View>
                <View style={styles.termCheck}>
                <CheckBox 
                    checkedColor='#23D25B'
                    checked={this.state.checkedThird} 
                    onPress={() => this.setState({checkedThird: !this.state.checkedThird})}  
                    /> 
                </View>
                <View style={styles.termTxt}>
                    <Text style={styles.termSub}>
                        Update the property
                        Status after its sale/rent.
                    </Text>
                </View>
            </View>
              
                    
                <TouchableHighlight style={styles.termsBtn} onPress={() => this.props.navigation.navigate('Details')}>
                    <Text style={styles.termsBtnTxt} > Approve All</Text>
                </TouchableHighlight>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1 , 
        justifyContent: 'center',
        alignItems:'center'
    },
    termsTitle:{
        fontSize:21,
        fontWeight:"bold",
        color:'#8E8E8E',  
    },
    termBox:{
        backgroundColor:'aqua',
        height: '15%',
        flexDirection:'row',
        marginTop: 30, 
    },
    termCheck:{
        width:'30%',height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F0D8D8',
        
    },
    termTxt:{
        width:'70%',height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingLeft:20
    },
    termSub :{
        color:'gray'
    },
    agree:{
        backgroundColor:'#23D25B',
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0 , left:0,
        zIndex:1, 
        display: 'none',
        justifyContent:'center',
        alignItems:'center'
    },
    agreeTxt:{
        color: '#fff',
        fontSize: 14
    },
    termsBtn :{
        // width: '100%',
        backgroundColor: '#23D25B',
        marginTop: 30,
        alignSelf:'center',
        height:'12%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,        
    },
    termsBtnTxt:{
        color:'#fff',
        fontSize: 16
    }
})