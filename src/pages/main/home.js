import React, { Component } from 'react'
import { Text, View ,StyleSheet, TouchableHighlight ,ScrollView ,Image ,FlatList} from 'react-native' 
import {  Input  } from 'react-native-elements';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import axios from 'react-native-axios'
import Cont from './../../components/offerContainer'
import WideCont from './../../components/wideContainer'
import districts  from './../api'


class Home extends Component {

    state = {
        districts :[],
        offers :[],
    }
   
  
    async componentDidMount()  {
        //    const displayDistricts = this.props
            // const res = await axios.get('https://dar-dashoard.herokuapp.com/districts')
            const res = await axios.get('https://dar-dashoard.herokuapp.com/offers')
            // const districts = res.data.Districts
            this.setState({districts : districts.Districts , offers : res.data.Offers}) 
            // displayDistricts(districts)
            // console.log( res.data.Offers )
    }   
    
    showDistrict  = dist => { 
        this.props.navigation.navigate('ListPage',{name:dist.name})
    }
 
    render() {
        const { districts ,offers} = this.state 
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
                        <Text style={styles.btnTxt}> Buy</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btn}>
                        <Text style={styles.btnTxt}> Rent</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btn}>
                        <Text style={styles.btnTxt}> Residential Complex</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btn}
                    onPress={() => this.props.navigation.navigate('Filter')}>  
                    <Icon  name='tune' size={24} color='white'  /> 
                    </TouchableHighlight>

                    
                </View>
                </View>

                <View   style={[styles.container,{ padding:10}]}>
                    <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                        <Text style={styles.title}>  Feature</Text> 
                        <Text style={{color:'#6494AA'}} onPress={() => this.props.navigation.navigate('ListPage')}>  See all</Text> 
                    </View>
                        <FlatList horizontal  showsHorizontalScrollIndicator={false}
                            data={ this.props.districts} 
                            renderItem =  {({item :  el}) =>   
                                (<Cont place={el.name}   showDist={ () => this.showDistrict(el)} /> )
                            } 
                            keyExtractor = {(el)=> el.id.toString() }
                        /> 
                </View>
                <View   style={[styles.container,{ padding:10}]}>
                    <Text style={styles.title}> Offers </Text>  
                        <FlatList horizontal  showsHorizontalScrollIndicator={false}
                            data={ offers} 
                            renderItem =  {({item :  el}) =>   
                                (<WideCont place={el.name}   showDist={ () => this.showDistrict(el)} /> )
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
        // paddingLeft:20
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

// function  mapDispatchToProps(dispatch) {
//     return {
//         displayDistricts : districts => dispatch ({
//             type : 'DISPLAY_DISTRICTS',
//             payload : {districts}
//         })
//     }
// }

function mapStateToProps(state) {
    return{
        districts : state.districts.Districts
    }
}

export default connect(mapStateToProps)(Home)
