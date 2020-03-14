import React, { Component } from 'react'
import { Text, View ,Image , StyleSheet ,SafeAreaView ,ScrollView, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Conditioner} from './../property/facilities'
import axios from 'react-native-axios' 

  
// let data =this.props.navigation.state.params.data
//   let data = {"add_note": "Additional Info ", "address": "lhjj", "baths": 1, "category": "House", "created_at": "2020-01-06T15:54:47.356Z", "facilites": [2, 1], "fav": false, "halls": 1, "id": 1, "imgs": ["1578326060276-55c65181968673.5d0fbdfe5a58e.jpg", "1578326068266-1 fm87fAluZi8ZtS231kgw1g.png", "1578326083442-1541087057454.png"], "loction": 2, "map_img": null, "offer_id": null, "owmer_type": "business", "owner_id": null, "pin": false, "price": 4, "rooms": 1, "size": "5", "status": "open", "type": "Sell", "updated_at": "2020-01-06T15:54:47.356Z"}
//  let  loction = 'Alriyadh'

export default class singleProp extends Component {

    state ={
        fas:[]
    }

    geBack = () => alert('ddd')

    async componentDidMount (){
        const res  = await axios.get('https://dar-dashoard.herokuapp.com/facilities')
        const fas = res.data.Fas
        this.setState({fas})
        // console.log(fas)
    }
    

    renderItem =   ({item,index})  => {
        return(
            <View>
                <Text>{item.name} </Text>
            </View>
            
        )
    }

    renderItemImg =  ({item,index})  => {
        return (
            <Text>{item} </Text>
            // <Image  style={{ height:100,  width:120,  borderRadius:10  }} 
            //     source={require('./../../assets/kh.jpg')}  /> 
        )
    }

    mark = id => {
        alert(id)
    }

    render() {
        const {fas} = this.state
        // const {datan} = this.props.navigation.state.params.data
        let data =this.props.navigation.state.params.data
        let loction =this.props.navigation.state.params.loction


        return (  
            <View style={styles.container}>
                <ScrollView  style={{ flex: 1,  }}
                 contentContainerStyle={styles.scrollview}  >
                     
                <View style={{height: 250  }}>
                    <Image source={require('./../../assets/kh.jpg')}  style={styles.fullImg} />
                    <View style={styles.imgCont}>
                        <Icon   onPress={() => this.props.navigation.navigate('ListPage')} 
                        style={styles.backIcon}  size={20} name="arrow-left" /> 
                        <Text style={styles.title}>{data.category}   </Text>
                        <Text style={styles.subTitle}>{loction},  {data.address}   </Text>
                    </View>
                    <View style={styles.iconsCont}>
                        <View style={styles.innerIconCont}>
                            <Icon   onPress={() => goBack()}  style={styles.iconStyle}  size={16}  name="share-alt" />    
                        </View>
                        <View style={styles.innerIconCont}>
                            <Icon  onPress={() => this.mark(data.id)}  style={styles.iconStyle}  size={16}  name="star-o" /> 
                        </View> 
                    </View>
                </View>  

                <View style={{  }}>

                </View>
                    <Text style={styles.bigTitle}>About</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.boxContainer}>   
                            <View style={{justifyContent:'center' ,alignItems:'center' }}> 
                                <Icon  style={{color:'#8E8E8E'}}   size={20} name="bed" /> 
                                <Text style={styles.iconSubTitle}>{data.rooms} Rooms </Text>
                            </View>
                            <View style={{justifyContent:'center' ,alignItems:'center' }}> 
                                <Icon  style={{color:'#8E8E8E'}}   size={20} name="bath" /> 
                                <Text style={styles.iconSubTitle}>{data.baths} Baths </Text>
                            </View>  
                            <View style={{justifyContent:'center' ,alignItems:'center' }}> 
                                <Icon  style={{color:'#8E8E8E'}}   size={20}  name="tv"  /> 
                                <Text style={styles.iconSubTitle}>{data.halls} Halls </Text>
                            </View>  
                            <View style={{justifyContent:'center' ,alignItems:'center' }}> 
                                <Icon  style={{color:'#8E8E8E'}}   size={20}name="expand-arrows-alt"/> 
                                <Text style={styles.iconSubTitle}>{data.size} m2 </Text>
                            </View> 
                        </View>
                    </View>

                    <Text style={styles.bigTitle}>Facilities </Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.boxContainer}>
                            <FlatList     
                                horizontal 
                                data={fas}
                                renderItem={this.renderItem}
                                keyExtractor = {(el)=> el.id.toString() } 
                            />  
                        </View>
                    </View>

                    <Text style={styles.bigTitle}>Images </Text>
                    <View style={styles.contentContainer}> 
                        {/* <FlatList
                            data={data.imgs} 
                            renderItem={this.renderItemImg}
                            keyExtractor = {(el)=> el.id.toString() } 
                        /> */}
                         
                    </View> 


                    <Text style={styles.bigTitle}>Map </Text>
                    <View style={styles.contentContainer}> 
                            <Image 
                            style={{
                                height:150,
                                width:'100%',
                                borderRadius:10
                            }} source={require('./../../../img/map.png')}
                            /> 
                    </View> 

                    <Text style={styles.bigTitle}>Notes </Text>
                    <View style={[styles.contentContainer,{marginBottom:30} ]}>
                        <View style={styles.boxContainer}>
                            <Text> {data.add_note} </Text>
                        </View>
                    </View> 

                </ScrollView> 
            </View>         
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    scrollview: {
        flexGrow: 1,
        backgroundColor:'#fff'
    },
    boxContainer:{
        width:'90%' , 
        paddingBottom:40,
        paddingTop:40,
        flexDirection:'row' ,
        justifyContent:'space-between',
        // backgroundColor:'#eee',
        padding:20,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#111',
        shadowOpacity: 1,
        elevation: 3,
        // background color must be set
        backgroundColor : "#0000"
    },
    iconSubTitle:{
        fontSize:11 ,
        paddingTop:15
    },
    contentContainer:{ 
        width:'100%',
        // height:300 ,  
        justifyContent:'center' ,
        alignItems:'center',
    },
    bigTitle:{fontSize:26, margin : 20,color:'#8E8E8E'},
    fullImg:{  
        width:'100%' ,   
        height:'100%' , 
    },
    imgCont:{
        width:'100%' ,   
        height:'100%' ,  
        position:'absolute',
        zIndex:99,
        justifyContent:'flex-end', 
        padding:20, 
    },
    backIcon:{
        color: '#fff',
        position:'absolute',
        top: 20,left:20
     },
    title:{
        paddingBottom:5, 
        color:'#fff', 
        fontSize:32 , 
    },
    subTitle:{
        paddingBottom:10, 
        color:'#fff', 
        fontSize:18 , 
    },
    iconsCont:{
        width:'100%' ,   
        height:80,   
        zIndex:99,
        justifyContent:'flex-end',
        alignItems:'center',
        padding:20,
        flexDirection:'row', 
        marginTop:-40
    },
    innerIconCont:{
        backgroundColor:'#E9B872',
        borderRadius:60, 
        marginLeft:10
    },
    iconStyle:{
        color: '#fff',  
        padding : 20,   
    } 
})
                    
             
                 