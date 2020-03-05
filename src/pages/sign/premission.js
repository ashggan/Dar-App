import React, { Component } from 'react'
import { Text, View , StyleSheet,Image ,TouchableHighlight,Alert } from 'react-native'
import GetLocation from 'react-native-get-location'
import Loader from "react-native-modal-loader";
import axios from 'react-native-axios' 

export default class Premission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: {},
            loading:false,
        }
        this.getCurrentoction = this.getCurrentoction.bind(this);
    }

    // setLoc = async loc => {
        

    //     try {
    //         let data =  this.props.navigation.state.params.data
    //                 id  = data.id
    //                 let loction =   JSON.stringify(loc)
    //         await axios.put('https://dar-dashoard.herokuapp.com/clients/location/'+id,{loction})
    //         .then(res => {
    //             if(res.status == 202 ) {
    //             this.setState({ loading:false });

    //                 this.props.navigation.navigate('NotifyRoute' )  
    //             }   
                
    //         }) 
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

      getCurrentoction() {
        // this.props.navigation.navigate('NotifyRoute' )  

        this.setState({ loading:true }); 
        let id  =  this.props.navigation.state.params.id

         GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => { 
            this.setState({location}); 
            let loction =   JSON.stringify(location)
             axios.put('https://dar-dashoard.herokuapp.com/clients/location/'+id,{loction})
                .then(res => { 
                    if(res.status == 202 ) {
                        console.log(res)
                        // this.setState({ loading:false });
                        this.props.navigation.navigate('NotifyRoute' )  
                    } 
                })
                .catch(err=>console.log(err)) 
       
        
      }).catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
        
    }
    
    render() {
        
        return (
            <View style = {styles.container}>
                <View style={styles.LoaderContainer}>
                    <Loader loading={this.state.loading} color="#6494AA" /> 
                </View>
                <Text style = {styles.title} > ACCESS YOUR LOCATION  { this.props.navigation.state.params.id} </Text>
                <View style =  {styles.bgc}>
                   <Image  source={require('./../../assets/loction.png')}  /> 
                </View>
                <Text style={styles.txt}>In order for us to deliver the best experience  Please enable location access.
                </Text>
                <View style={{  width :'100%' , height :'35%' , alignItems:  'center' ,}}>

                
                <TouchableHighlight  style={[styles.sign , { marginTop : 50 }]}
               onPress = {  this.getCurrentoction}>
                 <Text style={styles.btnText}>Enable Location Services   </Text>
               </TouchableHighlight>
                    <Text style={styles.Btmtxt} onPress = {() => this.props.navigation.navigate('NotifyRoute') }> Do not allow</Text>
               </View>
            </View>
        )
    }
}

// 

const styles = StyleSheet.create({
    container :{
        flex :1,
        justifyContent:'space-evenly' 
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
      LoaderContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        position:'absolute'
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
        height : '40%'
    },
    title :{
        textAlign : 'center',
        paddingTop : 60,
        fontSize : 25,
        fontWeight : 'bold',
        color :'#6494AA'
    }
})