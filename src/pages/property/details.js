import React, { Component } from 'react'
import { Text, View ,StyleSheet ,TouchableHighlight ,FlatList ,ScrollView ,Modal , TextInput} from 'react-native'
import NumericInput from 'react-native-numeric-input'
import Field from './../../components/Field'
import Input from './../../components/Input'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import axios from 'react-native-axios'
import RedBox from './../../components/RedBox'
import  Box from './../../components/Box' 

export default class Details extends Component {

    state ={
        rooms:0, halls:0,  baths:0,price:0,size:0, Fas :[], selected:[],districts:[] ,floors :1,
        loction:'',loction_name:'',address:'',owmer_type:'business',owner_id:1,status:'bending',
        cats : ['Apartment', 'Villa','House'] , modalVisible:false,add_note:''
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    
    setValue = (value,key) =>  {   if (value > 0 ) this.setState({[key]:value})}
  
    show = async ()=> {
        const {rooms , halls ,baths , price ,size  ,add_note,address ,owmer_type,owner_id ,status ,floors} = this.state
        const facilites = this.state.selected  
        const imgs = this.props.navigation.state.params.imgs
        // const property = { //...this.props.navigation.state.params.data , 
            //   rooms , price ,size ,halls ,baths ,add_note,address ,owmer_type,owner_id,status,floors,img:'', type:'',category:''}

        const property ={
                type: "Sell",
                category :'House',
                // rooms:0 ,halls:0,baths :0,
                size:"",price:0,
                // loction:'',address:'jhjhjh',
                // add_note:'',status :'rejected', 
                // pin:false,facilites:[],owmer_type:'business',
                // floors: 1,
                // loction:2
        }

        const formData = new FormData()
        let headers =  {  'Content-Type': 'multipart/form-data'  } 

        formData.append('property', JSON.stringify(property))
        // imgs.forEach(file => {   console.log(file)  });

        formData.append('files', imgs)
        console.log(typeof formData)
        try {
            const res =   await axios.post('https://dar-dashoard.herokuapp.com/properties', formData ,{headers}  )
            .then((res) => {
                if(res.status=== 200){
                  console.log('success')
                }
              }) 
            //   .catch(err=> console.log(err))
            console.log( typeof imgs)
        } catch (error) {
            console.log(error)
        }
      
        
    }

    async componentDidMount(){

        try {
            const res = await axios.get('https://dar-dashoard.herokuapp.com/facilities')
            const res2 = await axios.get('https://dar-dashoard.herokuapp.com/districts')
            const districts = res2.data.Districts
            this.setState({districts })
            const Fas = res.data.Fas
            this.setState({Fas}) 
            // console.log(districts)

        } catch (error) {
            console.log(error)
        }

    }

    renderDistrict = ({item,index}) => {
        return (
            <TouchableHighlight style={{
                backgroundColor:'#fff',
                margin:20
            }} onPress={()=>this.setLoction(item)}>
               <Text>{item.name} </Text> 
            </TouchableHighlight>
            
        )
    }

    setLoction = item => {
        // alert(item.name)
        this.setState({
            loction:item.id,
            loction_name:item.name,
            // modalVisible:!modalVisible
        })
        this.setModalVisible(!this.state.modalVisible)
    }

    renderItem = ({item,index})  =>{
       
        if(this.state.selected.includes(item)){
            return(
                <RedBox  text={item.name} setVal={()=> this.removeFromSelected(item)}  /> 
            )
        }else{
            return( 
                <Box  text={item.name} setVal={()=> this.addToSeleted(item)} /> 
            )
        }

    }

    addToSeleted = item => {
        let selected =this.state.selected
        selected.push(item)
        this.setState({selected}) 
    }

    removeFromSelected = item => {
        let selected =this.state.selected 
        selected = selected.filter(x => x !== item)
        this.setState({selected}) 
    }

    render() {

        const {address,cats,loction_name,add_note} =this.state
        const data = this.props.navigation.state.params.data
         
        if(  cats.includes(data.category)) {
            return ( 
                <ScrollView> 
                    
                    <View style={styles.container} >
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{margin: 22, }}>
                                <View>
                                <FlatList 
                                    data={this.state.districts}
                                    renderItem={this.renderDistrict}
                                    keyExtractor = {(item, index) => index.toString()}
                                    />  
                                </View>
                            </View>
                        </Modal>
                        <Text style={styles.subTitle}>About { data.category} </Text>
                         
                        <View style={styles.box}>
                            <Input 
                                title="Size" 
                                icon_name="currency-usd" 
                                value ={ this.state.size}   
                                label =  {<Text style={[{color: '#fff'}]}>m2 </Text>  } 
                                setVal={value =>  this.setValue(value, "size")} 
                            />

                            <Input 
                                title="Price" 
                                icon_name="currency-usd" 
                                value ={this.state.price} 
                                currency-usd="currency-usd" 
                                label =  {<Icon style={[{color: '#fff'}]} size={25} name="currency-usd" />} 
                                setVal={value =>  this.setValue(value, "price")} 
                                />

                            <Field title="Rooms"value ={this.state.rooms} setValue={value =>  this.setValue(value, "rooms")}   />
                            <Field title="Halls"value ={this.state.halls} setValue={value =>  this.setValue(value, "halls")}   />
                            <Field title="Baths"value ={this.state.baths} setValue={value =>  this.setValue(value, "baths")}   />
                            <Field title="floors"value ={this.state.floors} setValue={value =>  this.setValue(value, "floors")}   />
                            
                        </View>

                        <View>
                            <Text style={styles.subTitle}>Facilites   </Text>
                            <View style={styles.box}>
                                <FlatList 
                                    data={this.state.Fas}
                                    renderItem={this.renderItem}
                                    numColumns={3}  
                                    keyExtractor = {(item, index) => index.toString()}
                                />
                            </View>   
                        </View>  
                        <View>
                            <Text style={styles.subTitle}>Districts  </Text>
                            <View style={[styles.box,{justifyContent:'space-between'}]}>
                                <Text>Select Districts </Text> 
                                <Text>{loction_name} </Text>
                                <TouchableHighlight onPress={() => {  this.setModalVisible(true); }}>
                                    <Icon2 name="keyboard-arrow-down" style={[{color: '#111'}]} size={25} />
                                </TouchableHighlight> 
                            </View>
                        </View>
                        <View style={{  width:'100%'}}>
                            <Text style={styles.subTitle}>Address    </Text>
                                <TextInput 
                                    value={address}
                                    onChangeText={ val => this.setState({address:val})}
                                    
                                    style={{
                                        // backgroundColor:'#eee',S
                                        borderColor:'#eee',
                                        borderWidth:1, 
                                        justifyContent: "flex-start" 
                                    }}
                                />
                        </View>
                        <View style={{  width:'100%'}}>
                        <Text style={styles.subTitle}>Additional Info  </Text>
                                <TextInput 
                                    value={add_note}
                                    onChangeText={ val => this.setState({add_note:val})}
                                    numberOfLines={4}
                                    multiline={true}
                                    style={{
                                        // backgroundColor:'#eee',S
                                        borderColor:'#eee',
                                        borderWidth:1, 
                                        justifyContent: "flex-start" 
                                    }}
                                />
                        </View>
                        
                        <TouchableHighlight style={{position:'absolute',bottom:0, right:10, padding:20 }}  onPress={this.show}  >
                            <Text>next</Text>
                        </TouchableHighlight>       
                    </View> 
                    
                </ScrollView>
            )    
        }else {
            return ( 
                <View style={styles.container} >
                <Text style={styles.subTitle}>About { data.category} </Text>
                {value => this.setValue(value, "price") }
                    <View style={styles.box}>
                        <Input 
                            title="Size" 
                            icon_name="currency-usd" 
                            value ={ this.state.size}   
                            label =  {<Text style={[{color: '#fff'}]}>m2 </Text>  } 
                            setVal={value =>  this.setValue(value, "size")} 
                        />

                        <Input 
                            title="Price" 
                            icon_name="currency-usd" 
                            value ={this.state.price} 
                            currency-usd="currency-usd" 
                            label =  {<Icon style={[{color: '#fff'}]} size={25} name="currency-usd" />} 
                            setVal={value =>  this.setValue(value, "price")} 
                            />

                         
                    </View>
                        <TouchableHighlight style={{position:'absolute',bottom:0, right:10, padding:20 }}  onPress={this.show} >
                            <Text>next</Text>
                        </TouchableHighlight>       
            </View> 
            )
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1 , 
        padding : 30 ,
        justifyContent: 'flex-start',
        alignItems:'flex-start'
    },
    subTitle:{
        fontSize:16,
        textAlign:'left', 
        paddingTop:10 ,
        marginBottom:20
    },
    box:{
        borderWidth:2,
        borderColor: '#eee',
        width:'100%', 
        borderRadius:5, 
        flexDirection:'row',
        flexWrap:'wrap',
        // marginTop:20,
        padding:20,  

    },
    formField:{
        marginTop:20,
        alignItems:'flex-start',
         
    }
})