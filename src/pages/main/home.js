import React, { Component } from 'react'
import { Text, View ,StyleSheet, TouchableHighlight ,ScrollView ,Image ,FlatList} from 'react-native' 
import {  Input  } from 'react-native-elements';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import axios from 'react-native-axios'
import Cont from './../../components/offerContainer'
import districts  from './../api'
 
class Home extends Component {
   
  
    async componentDidMount()  {
           const displayDistricts = this.props
            // const res = await axios.get('https://dar-dashoard.herokuapp.com/districts')
            // const disticts = res.data.Districts
            // this.setState({districts : disticts})
            displayDistricts(districts)
    }     
 
    render() {
        const { districts } = this.props; 
        return (
            <ScrollView style={styles.container}>
                <View style={{ 
                    width:'100%',
                    backgroundColor:'#B3433F',
                    padding:30, 
                }}>
 
                    <Input  
                        placeholder='any where'  inputContainerStyle={{
                            backgroundColor: '#893430',
                            borderRadius: 5,
                            borderBottomWidth:0, 
                        }}
                        leftIcon={  <Icon  name='search' size={24} color='white'  /> }    />   
                
                <View style={styles.line}>
                    <TouchableHighlight style={styles.btn}>
                        <Text style={styles.btnTxt}> But</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btn}>
                        <Text style={styles.btnTxt}> Rent</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btn}>
                        <Text style={styles.btnTxt}> Residential Complex</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btn}>  
                    <Icon  name='tune' size={24} color='white'  /> 
                    </TouchableHighlight>

                    
                </View>
                </View>

                <View   style={[styles.container,{ padding:10}]}>
                    <Text style={styles.title}>Feature   </Text> 
                        <FlatList horizontal  showsHorizontalScrollIndicator={false}
                            data={ districts} 
                            renderItem =  {({item :  el}) =>   
                                (<Cont place={el.name}   onPress={this.showDistrictId} /> )
                            } 
                            keyExtractor = {(el)=> el.id.toString() }
                        /> 
                </View>
            </ScrollView>
        )
    }
}
 

const styles = StyleSheet.create({
    container:{
        flex :1, 
    },
    line:{
        flexDirection:'row',
        marginTop: 10,
        padding:10, 
    }, 
    title :{
        fontSize: 16,
        paddingLeft:20
    },
    btn :{
        backgroundColor:'#893430',
        padding  : 10, 
        marginRight:5,
        borderRadius: 5

    }, 
    btnTxt :{
        color:'#fff',
        fontSize:14
    },
    cont:{
        marginTop: 20,
        height: 150,
        width : 100,
        backgroundColor:'#fff',
        marginRight: 15,
        borderRadius: 10,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        // paddingBottom : 10,
        // paddingLeft : 10
    },
    offer:{
        marginTop: 20,
        height: 150,
        width : 200,
        backgroundColor:'#fff',
        marginRight: 15,
        borderRadius: 10,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        // paddingBottom : 10,
        // paddingLeft : 10
    }
})

function  mapDispatchToProps(dispatch) {
    return {
        displayDistricts : districts => dispatch ({
            type : 'DISPLAY_DISTRICTS',
            payload : {districts}
        })
    }
}

function mapStateToProps(state) {
    return{
        districts : state
    }
}

export default connect(mapStateToProps)(Home)
