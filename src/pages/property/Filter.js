import React, { Component } from 'react'
import { Text, View , ScrollView , FlatList ,StyleSheet, TouchableHighlight} from 'react-native'
import RedBox from './../../components/RedBox'
import Box from './../../components/Box'  
import axios from 'react-native-axios' 
import MultiSlider from  '@ptomasroos/react-native-multi-slider'
import Field from './../../components/Field' 

export default class Filter extends Component {

    state = {
        types: ['Rent', 'Buy'],districts : [],Fas:[],cats : ['Apartment', 'Villa','House','Land'] ,
        type:'',loction:'', value:0 ,category:'',selected:[],baths:'',halls:'',rooms:'',
        sliderOneChanging: false, 
        multiSliderValue: [700, 900],
        priceRangeValue: [2000, 9000],
        priceRange:[1000,10000],
        nonCollidingMultiSliderValue: [0, 140],
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

    setValue = (value,key) =>  {   if (value > 0 ) this.setState({[key]:value})}


    renderItem = ({item,index})  =>{
        if(item === this.state.type){
            return(
                <RedBox  text={item} setVal={()=> this.setState({type:item})} /> 
 
            )
        }else{
            return(
                <Box  text={item} setVal={()=> this.setState({type:item})} /> 

            )
        }
    }

    renderFas = ({item,index})  =>{
        if(this.state.selected.includes(item.id)){
            return(
                <RedBox  text={item.name} setVal={()=> this.removeFromSelected(item)}  /> 
            )
        }else{
            return( 
                <Box  text={item.name} setVal={()=> this.addToSeleted(item)} /> 
            )
        }
    }

    renderCats = ({item,index})  =>{
        if(item === this.state.category){
            return(
                <RedBox  text={item} setVal={()=> this.setState({category:item})} /> 
 
            )
        }else{
            return(
                <Box  text={item} setVal={()=> this.setState({category:item})} /> 

            )
        }
    }

    addToSeleted = item => {
        let selected =this.state.selected
        selected.push(item.id)
        this.setState({selected}) 
    }

    removeFromSelected = item => {
        let selected =this.state.selected 
        selected = selected.filter(x => x !== item.id)
        this.setState({selected}) 
    }

    renderDistrict = ({item,index}) => {
        if(item.name === this.state.loction){
            return(
                <RedBox  text={item.name} setVal={()=> this.setState({loction:item.name})} /> 
 
            )
        }else{
            return(
                <Box  text={item.name} setVal={()=> this.setState({loction:item.name})} /> 

            )
        }
    }

    multiSliderValuesChange = values => {
        this.setState({
            multiSliderValue: values,
        });
    }

    priceValuesChange = values => {
        this.setState({
            priceRangeValue: values,
        });
    }

    search = () => {
        // alert('done')
        let { type, category , loction ,   multiSliderValue ,priceRangeValue  ,halls ,rooms ,baths ,selected} = this.state
        let data = { type, category , loction ,  multiSliderValue ,priceRangeValue  ,halls ,rooms ,baths ,selected}
        console.log(data)
    }
    render() {

        const  { types, districts , Fas , value ,cats ,category}  =this.state
        return (
            <ScrollView>
                <View style={{ padding:30}}>
                <Text> Filter </Text>    

                <Text> You Want to </Text>    
                    <View style={{  justifyContent: 'flex-start', paddingTop:20, flexDirection:'row'}}>
                        <FlatList 
                            numColumns={3}
                            data = {this.state.types}
                            renderItem={this.renderItem}
                            keyExtractor = {(item, index) => index.toString()}
                        /> 
                    </View>

                <Text> Location     </Text>    
                <View style={{  justifyContent: 'flex-start', paddingTop:20, flexDirection:'row'}}>
                        <FlatList 
                            // horizontal
                            numColumns={3} 
                            data = {districts }
                            renderItem={this.renderDistrict}
                            keyExtractor = {(item, index) => index.toString()}
                        /> 
                    </View>

                <Text> Type of Property      </Text>    
                <View style={{  justifyContent: 'flex-start', paddingTop:20, flexDirection:'row'}}>

                        <FlatList 
                            numColumns={3}
                            data = {cats }
                            renderItem={this.renderCats}
                            keyExtractor = {(item, index) => index.toString()}
                        /> 
                    </View>

                <Text> Size range    </Text> 
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:300,paddingTop:20}}>
                    <Text style={styles.smallTxt}>600</Text>
                    <Text style={styles.smallTxt}>Price range: {this.state.multiSliderValue[0]} - {this.state.multiSliderValue[1]}m2 </Text>
                    <Text style={styles.smallTxt}>1,000</Text>
                </View>
                    <View style={{  justifyContent: 'center'   }}>
                        <MultiSlider
                            values={[
                                this.state.multiSliderValue[0],
                                this.state.multiSliderValue[1],
                            ]}
                            sliderLength={300}
                            onValuesChange={this.multiSliderValuesChange}
                            min={600}
                            max={1000}
                            step={10}
                            
                            trackStyle={{
                                height: 5,
                                backgroundColor: '#EEF0F3',
                            }}
                            selectedStyle={{
                                backgroundColor: '#B3433F',
                            }}
                            unselectedStyle={{
                                backgroundColor: 'silver',
                            }}
                            markerStyle={{
                                height: 15,width:15,
                                backgroundColor:'#B3433F',
                                
                            }}
                            snapped
                        />
                    </View>

                    <Text> Price Range </Text> 
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:300,paddingTop:20}}>
                        <Text style={styles.smallTxt}>1,000</Text>
                        <Text style={styles.smallTxt}>Price range: {this.state.priceRangeValue[0]} - {this.state.priceRangeValue[1]}</Text>
                        <Text style={styles.smallTxt}>10,000</Text>
                    </View>
                    <View style={{  justifyContent: 'center'  }}>
                    <MultiSlider
                        values={[
                            this.state.priceRangeValue[0],
                            this.state.priceRangeValue[1],
                        ]}
                        sliderLength={300}
                        onValuesChange={this.priceValuesChange}
                        min={1000}
                        max={10000}
                        step={10}
                         
                        trackStyle={{
                            height: 5,
                            backgroundColor: '#EEF0F3',
                        }}
                        selectedStyle={{
                            backgroundColor: '#B3433F',
                        }}
                        unselectedStyle={{
                            backgroundColor: 'silver',
                        }}
                        markerStyle={{
                            height: 15,width:15,
                            backgroundColor:'#B3433F',
                            
                        }}
                        snapped
                    />
                    </View>
                    
                   
                 

                   
                { ['Apartment', 'Villa','House' ].includes(category) &&
                    <View  style={{flexDirection:'row' ,flexWrap:'wrap'}}>
                        <Field title="Rooms"value ={this.state.rooms} setValue={value =>  this.setValue(value, "rooms")}   />    
                        <Field title="Halls"value ={this.state.halls} setValue={value =>  this.setValue(value, "halls")}   />     
                    <Field title="Bathrooms"value ={this.state.baths} setValue={value =>  this.setValue(value, "baths")}   />
                    </View>
                }
                { ['Apartment', 'Villa','House' ].includes(category) &&  <Text style={styles.subTitle}>Facilites   </Text>} 
                { ['Apartment', 'Villa','House' ].includes(category) &&
                        <View style={{  justifyContent: 'flex-start', paddingTop:20, flexDirection:'row'}}>
                            <FlatList 
                                data={Fas}
                                renderItem={this.renderFas}
                                numColumns={3}  
                                keyExtractor = {(item, index) => index.toString()}
                            />
                        </View> 
                } 
                <TouchableHighlight style={{
                    backgroundColor:'#E9B872' ,
                    justifyContent:'center',
                    alignItems:'center',
                    padding:15,
                    borderRadius:5,
                    marginTop:20
                    }}
                    onPress={this.search} >
                   <Text style={{color:'#fff',fontSize:16}}>FInd </Text> 
                </TouchableHighlight>
                 
                </View>
             </ScrollView>
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
    smallTxt:{
        color:'#bbb',
    }
})