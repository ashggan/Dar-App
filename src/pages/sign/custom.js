import React, { Component } from 'react'
import { Text, View ,StyleSheet ,FlatList ,TouchableHighlight,ScrollView ,SafeAreaView} from 'react-native'
import axios from 'react-native-axios'
import districts  from  './../api'
import Loader from "react-native-modal-loader"


class Circle extends Component {
   
    render() {
        return (
            <TouchableHighlight   style={styles.circle} onPress={this.props.select}>
                <Text style={styles.txtCirle}>{this.props.name} </Text>
            </TouchableHighlight>
        );
    }
} 

class RedCircle extends Component {
    // 
    render() {
        return (
            <TouchableHighlight   style={styles.redCircle } onPress={this.props.select}>
                <Text style={styles.txtCirleWhite}>{this.props.name} </Text>
            </TouchableHighlight>
        );
    }
} 

class YellowCircle    extends Component {
    // 
    render() {
        return (
            <TouchableHighlight   style={styles.yelCircle } onPress={this.props.select}>
                <Text style={styles.txtCirleWhite}>{this.props.name} </Text>
            </TouchableHighlight>
        );
    }
} 

class  BlackCircle  extends Component {
    // 
    render() {
        return (
            <TouchableHighlight   style={styles.BlackCircle } onPress={this.props.select}>
                <Text style={styles.txtCirleWhite}>{this.props.name} </Text>
            </TouchableHighlight>
        );
    }
} 

export default class Custom extends Component {

    state  = { 
        cats: ['Apartment', 'Villa','House','Land','Load-bearing','Tower'],
        types: ['Buy', 'Rent','Investment' ],
         districts:[],
        selectCats :[] , selectDists :[] ,selectTypes :[] ,isLoading:true
        
    }

    async componentDidMount(){
        try {
            const res = await axios.get('https://dar-dashoard.herokuapp.com/districts')
            // .then(res => console.log(res.data))
            const districts = res.data.Districts
            this.setState({districts : districts ,isLoading:false}) 
        } catch (error) {
            console.log(error)
        }
    }

    select = item => {
        let {selectCats} = this.state 
        if(selectCats.length < 3){
            selectCats.push(item)
            this.setState({selectCats})
        }
        this.submit()

    }

    AddType = item => {
        let {selectTypes} = this.state
        // alert(item)
        if(selectTypes.length < 2){
            selectTypes.push(item)
            this.setState({selectTypes})
        }
        this.submit()

    }

    remove = item => {
        let {selectCats} = this.state 
        selectCats= selectCats.filter(val => val !==item)  
        this.setState({selectCats})
    }

    removeType = item => {
        let {selectTypes} = this.state 
        selectTypes= selectTypes.filter(val => val !==item)  
        this.setState({selectTypes})
    }

    addDist = item => {
        let {selectDists} = this.state
        // alert(item.name)
        if(selectDists.length < 3){
            selectDists.push(item.name)
            this.setState({selectDists})
            } 

            this.submit()
    }

    removeDist = item => {
        let {selectDists} = this.state 
        selectDists= selectDists.filter(val => val !==item)  
        this.setState({selectDists})
    }

    renderItem =  ({item,index})  =>{
        if(this.state.selectCats.includes(item)) {
            return (
                <RedCircle  name={item} select={() => this.remove(item)}  /> 
           ) 
        }else{
            return (
                 <Circle  name={item} select={() => this.select(item)}  /> 
            ) 
        }
            
    }

    renderDists = ({item,index})  =>{

        if(this.state.selectDists.includes(item.name)) {
            return (
                <YellowCircle  name={item.name} select={() => this.removeDist(item.name)}  /> 
           ) 
        }else{
            return (
                <Circle  name={item.name} select={() => this.addDist(item)}  /> 
            ) 
        }
            
    }

    renderType =  ({item,index})  =>{
        if(this.state.selectTypes.includes(item)) {
            return (
                <BlackCircle  name={item} select={() => this.removeType(item)}  /> 
           ) 
        }else{
            return (
                 <Circle  name={item} select={() => this.AddType(item)}  /> 
            ) 
        }
            
    }

    submit = () => {
        let {selectDists,selectTypes,selectCats} = this.state
         
        if(selectCats.length > 0    && selectDists.length > 0  && selectTypes.length > 0 ) {
            let property_type  = selectCats 
            let property_category  = selectTypes 
            let property_loction_name  = selectDists 
            let preference =  { property_category,property_loction_name,property_type}
            let  data = this.props.navigation.state.params.data
            preference = JSON.stringify(preference)
            data = {...data,preference}  
            // console.log( data )

            setTimeout(() => {
             this.props.navigation.navigate('RegisterRoute',{data}) 
            }, 2000);

        } 


    }

    render() {
        const {cats ,selectCats ,districts,selectDists,types,selectTypes} = this.state
        return (

            <View style ={{flex :1}}>
                <View style={styles.LoaderContainer}>
                    <Loader loading={this.state.isLoading} color="#ff66be" /> 
                </View>
                <View style={styles.header}>
                    <Text style={styles.title}>Customize  </Text>
                    <Text style={styles.title}>Your Experience</Text>
                </View>
               

            <ScrollView>

        
                <View style ={{flexDirection:"row" }}>
                    <Text style={styles.subtitle}>You are looking for ?  </Text>
                    <Text style={styles.line}>  Select {selectCats.length}/ Max 3 </Text>
                </View>
                
                <View style={styles.vert} >

                        <FlatList horizontal
                            showsHorizontalScrollIndicator={false}
                            data={cats}
                            renderItem={this.renderItem}
                            keyExtractor = {(item, index) => index.toString()}
                            />
                </View>


                <View style ={{flexDirection:"row" }}>
                    <Text style={styles.subtitle}>Your favourable location ?  </Text>
                    <Text style={styles.line}>  Select {selectDists.length}/ Max 3  </Text>
                </View>
                <View style={styles.vert}   >
                    <FlatList horizontal
                            showsHorizontalScrollIndicator={false}
                            data={districts}
                            renderItem={this.renderDists}
                            keyExtractor = {(item, index) => index.toString()}
                    /> 
                </View>
                
                <View style ={{flexDirection:"row" }}>
                    <Text style={styles.subtitle}>You want to ?  </Text>
                    <Text style={styles.line}>   Select {selectTypes.length}/ Max 2 </Text>
                </View>
                <View style={styles.vert}   >
                    <FlatList horizontal
                        showsHorizontalScrollIndicator={false}
                        data={types}
                        renderItem={this.renderType}
                        keyExtractor = {(item, index) => index.toString()}
                        /> 
                </View>
            
            
            </ScrollView>
            
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
    LoaderContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        position:'absolute'
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
    redCircle:{
        height : 90,
        width : 90,
        borderRadius : 100 ,
        borderWidth : 1 ,
        borderColor : '#B3433F',
        backgroundColor:'#B3433F',
        justifyContent :'center',
        alignItems :'center',
        margin: 10
    },
    yelCircle:{
        height : 90,
        width : 90,
        borderRadius : 100 ,
        borderWidth : 1 ,
        borderColor : '#E9B872',
        backgroundColor:'#E9B872',
        justifyContent :'center',
        alignItems :'center',
        margin: 10
    },
    BlackCircle:{
        height : 90,
        width : 90,
        borderRadius : 100 ,
        borderWidth : 1 ,
        borderColor : '#484848',
        backgroundColor:'#484848',
        justifyContent :'center',
        alignItems :'center',
        margin: 10
    },
    txtCirle :{
        fontSize : 10
    },
    txtCirleWhite:{
        fontSize : 10,
        color:'#fff'
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
