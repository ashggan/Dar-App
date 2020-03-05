import React, { Component } from 'react'
import { Text, View ,StyleSheet ,FlatList ,TouchableHighlight,Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'; 


class Circle extends Component {
     
    render() {
        return (
            <View style={styles.select}>
                <TouchableHighlight style={styles.circle } 
                onPress = {this.props.onSelect} >
                    <Icon  name={this.props.icon} size={44} color='#eee'  />  
                </TouchableHighlight>
                <Text style ={styles.line}>{this.props.title} </Text>
            </View> 
        );
    }
}

class RedCircle extends Component {
     
    render() {
        return (
            <View style={styles.select}>
                <TouchableHighlight style={styles.RedCircle} 
                onPress = {this.props.onSelect} >
                    <Icon  name={this.props.icon} size={44} color="#B3433F"  />  
                </TouchableHighlight>
                <Text style ={styles.redline }>{this.props.title} </Text>
            </View> 
        );
    }
}
 
export default class Type extends Component {

    state  =  {
        customCircle :{ },
        textColor :{},
        types :[
            { icon:'md-person',   title:'Personal',selected:false},
            { icon:'md-briefcase',title:'Business',selected:false}
        ],
        type:""
    }

    onSelect = index => {
        // alert(index)
        
            let {types ,type} = this.state
            types[index].selected=!types[index].selected
            type =  types[index].title
            if(index==0) types[1].selected = false
            else types[0].selected = false
            this.setState({types,type})  
            let data = this.props.navigation.state.params 
            data = { ...data, type} 
            // console.log(data)
            setTimeout( () => { 
                this.props.navigation.navigate('CustomRoute',{data})
            }, 2000)  
    }

    renderItem = ({item,index})  =>{
       
        if(item.selected ==true){
            return(
                <RedCircle  icon={item.icon} title={item.title} onSelect={() => this.onSelect(index)} /> 
            )
        }else{
            return( 
                <Circle    title={item.title} icon={item.icon} onSelect={() => this.onSelect(index)} />    
            ) 
           
            }

    }


    render() {
        const {types} = this.state
        return (
            <View style ={{flex :1}}>
                <View style={styles.header}>
                <Text style={styles.title}>You’re a ? </Text>
                <Text style={styles.subtitle}>Select your experience type  </Text>
                </View>
                <View style={{ 
                    flex: .9,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <FlatList   
                    data={types}
                    renderItem={this.renderItem}
                    keyExtractor = {(item, index) => index.toString()}
                />
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
    redline:{
        paddingTop : 30,
        fontSize : 16,
        color :'#B3433F'   
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
    RedCircle:{
        height : 120,
        width : 120,
        borderRadius : 100 ,
        borderWidth : 1 ,
        borderColor : '#B3433F',
        justifyContent :'center',
        alignItems :'center',    
    },
    select :{
        width : '100%', 
        justifyContent :'center',
        alignItems :'center',
        marginTop : 30
    },
    header :{
        width : '100%',
        height : '20%', 
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
