import React, { Component } from 'react'
import { Text, View ,StyleSheet, TouchableHighlight ,ScrollView ,Image ,FlatList} from 'react-native' 
import {  Input  } from 'react-native-elements';
import { connect } from 'react-redux' 
import axios from 'react-native-axios'
import Cont from './../../components/offerContainer'
import districts  from './../api'
import Icon from 'react-native-vector-icons/FontAwesome5'
 

const ApartPropCont = props => {
  return(
      <TouchableHighlight onPress={props.getDetails}> 
        <View style={{flexDirection:'row',marginTop: 20 , alignItems:'stretch'  }}>
            <Image source={require('./../../assets/kh.jpg')} 
            style={{
                width:'50%' , 
                height:120 ,  
                borderRadius: 7, 
                marginRight:20
                }} />
            <View style={{ flex:1,marginRight:0 }} >
            <View style={{flexDirection:'row',marginTop: 0 , justifyContent: 'space-between' }}>
                <Text style={{fontSize:12}}>{props.data.category}</Text> 
                <Text style={{fontSize:12}}>${props.data.price}/month</Text> 
            </View>
            
            <Text style={{marginTop:20,color:'gray'}}>{props.getAdress} , {props.data.address} </Text> 
            
            {/* <Text style={{marginTop:20,color:'gray'}}> {props.getFas} </Text>  */}
            { ['Apartment', 'Villa','House'].includes(props.data.category ) && 
            <View style={{flexDirection:'row',marginTop: 0 ,alignItems:'center',marginTop:20 ,justifyContent:'space-between' }}>
                <View style={{flexDirection:'row',marginTop: 0 ,alignItems:'center',marginTop:20 }}>
                    <Text>{props.data.rooms} </Text>    
                    <Icon style={[{color: '#b3b3b3',marginLeft:5}]} size={16} name="bed" />

                </View>
                <View style={{flexDirection:'row',marginRight: 0 ,alignItems:'center',marginTop:20 }}>
                    <Text>{props.data.baths} </Text> 
                    <Icon style={[{color: '#b3b3b3',marginLeft:5}]} size={16} name="bath" />

               </View>

               <View style={{flexDirection:'row',marginRight: 0 ,alignItems:'center',marginTop:20 }}>
                   <Text>{props.data.halls}  </Text>
                    <Text> Halls </Text> 
               </View>

            </View>
            }

            {props.data.category  == 'Land' && 
            <View style={{flexDirection:'row',marginTop: 0 ,alignItems:'center',marginTop:20 ,justifyContent:'space-between' }}>
                 

               <View style={{flexDirection:'row',marginRight: 0 ,alignItems:'center',marginTop:20 }}>
                   <Text>{props.data.size}  </Text>
                    <Text> m2 </Text> 
               </View>

            </View>
            }
            
            </View>
        </View>
    </TouchableHighlight>
  )
}


export default class ListPage extends Component {

    state = {
      properties :[], districts: [],facilities:[],
    }
  
    async componentDidMount()  {
        //    const displayDistricts = this.props 

            const res = await axios.get('https://dar-dashoard.herokuapp.com/properties')
            const resDist = await axios.get('https://dar-dashoard.herokuapp.com/districts')
            const resFas = await axios.get('https://dar-dashoard.herokuapp.com/facilities')
            const properties = res.data.Prop
            const districts = resDist.data.Districts
            const facilities = resFas.data.Fas
            this.setState({properties , districts ,facilities})
            // console.log('properties')
            // console.log(facilities )
            // console.log(   districts.length ) 

    }   
    
    showDistrict  = dist => {
        console.log(dist.name)  
        // this.props.navigation.navigate('ListPage')
    }

    getLoction = item => {
      const {districts} = this.state
            // console.log(   districts[0].name ) 
        let dist =   districts.filter( x => {
          if (x.id == item.loction ) return x.name  
        })
        
        if(dist[0])   return   dist[0].name   
         

    //   return  typeof districts
         
    }
    goToDetails = item => {
        // console.log(item) 
        let loction = this.getLoction(item)
        // console.log(loction) 
        this.props.navigation.navigate('singleProp', {data:item ,loction}) //
    }
 
    render() {
        const { properties } = this.state 
        return (
            <View style={styles.container}>
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
                        leftIcon={  <Icon  name='search' size={24} color='white'  /> }/>   
                
                
                </View>

                <View   style={[styles.container,{ padding:20 ,  }]}>
                    {/* <Text style={styles.title}>Feature  Districts  </Text>  */}
                    { this.props.navigation.state.params.name &&  
                    <View>
                        <Text style={{fontSize:22,color:'#222',marginBottom:7}} >{this.props.navigation.state.params.name }</Text>
                    </View> }
                     
                        <FlatList    
                          showsVerticalScrollIndicator={false}
                            data={ properties} 
                            renderItem =  {({item :  el}) =>   
                                (<ApartPropCont  
                                      data={el}
                                       getAdress= { this.getLoction(el) }     
                                       getDetails = {() =>  this.goToDetails(el)  }
                                  /> )
                            } 
                            keyExtractor = {(el)=> el.id.toString() }
                        /> 
                </View>
            </View>
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
        paddingLeft:20,
        paddingBottom:10
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

// function mapStateToProps(state) {
//     return{
//         districts : state
//     }
// }

// export default connect(mapStateToProps)(Home)
