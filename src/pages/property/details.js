import React, { Component } from 'react'
import { Text, View ,StyleSheet ,FlatList ,TouchableHighlight ,Image} from 'react-native'
import { ActionSheet  ,Root} from 'native-base' 
import ImagePicker from 'react-native-image-crop-picker';
import {PermissionsAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import RedBox from './../../components/RedBox'
import  Box from './../../components/Box'


export default class Details extends Component {
    state = {
        type : '',
        category:'',index:'',length:0,
        imgs:['empty','empty','empty','empty','empty','empty'],
        types: ['Rent', 'Sell'],
        cats: ['Apartment', 'Villa','House','Land','Load-bearing','Tower'],
        
    }
    
    setType = val => {
        this.setState( {  type : val  })
 
    }

    setCat = val => {
        this.setState({ category : val })
 
    }

    show = () => {
        const type = this.state.type
        if(type==='') alert('Please select Purpose')
        
        const category = this.state.category
        if(category==='') alert('Please select Category')

        const imgs = this.state.imgs
        // alert(`${type} and ${category} and ${imgs} `)

    }

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

    renderItemCats = ({item,index})  =>{
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

    setImage =  index => {
        this.setState({index})
        this.onClickAddNewImage()
    }

    renderImgs  = ({item,index}) => {
        if(item ==='empty'){
            return(
                <TouchableHighlight style={{width:90,height:90 , backgroundColor:'#eee' , justifyContent:'center', margin :10,alignItems:'center'}} 
                onPress={() =>   this.setImage(index) }> 
                <Icon style={[{color: '#A3A3A3'}]} size={25} name={'photo-camera'}/>  
                </TouchableHighlight>
            )
        }
        else {
            return (
                <TouchableHighlight style={{width:90,height:90 , backgroundColor:'#eee' , justifyContent:'center', margin :10,           alignItems:'center'}} 
                    onPress={()  => this.setImage(index) }> 
                    <Image source={{ uri :item.url}} style={styles.img} />
                </TouchableHighlight>
            )    
        }
       
    }
 
    
    onSelectImge = image => {
        let list = this.state.imgs
        const src = {url: image.path}
        const index = this.state.index
        let item = {
        id : Date.now(),
        url: image.path , 
        }
        list[index] = item 
        console.log(list)
        this.setState( {imgs: list})
        this.setState(prevState => ({ length : prevState.length++ })  )
    }
        
    lanchCamera = async () => {
       
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          // cropping: true
        }).then(image => {
          this.onSelectImge(image)
          // console.log(image);
        });
       
    }
    
    openGallery = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400, 
        }).then((image) => {
          this.onSelectImge(image)
          // console.log(image)
        }); 
    }
     
    onClickAddNewImage = () => {
        const Buttons = ['Camera ' , 'Gallery' , 'cancel']
        ActionSheet.show(  {
          options :Buttons ,
          cancelButtonIndex : 2,
            title:'Add Image'
          },
          buttonIndex  => {
            switch (buttonIndex) {
              case 0:
                this.lanchCamera()
                break;
              case 1: 
                this.openGallery()
                break;
              default:
                break;
            }
        })
    }
 
    render() {
         
            return (
            <Root>   
               <View style={styles.container} >  
                    <Text style={styles.detailTitle}>Select property type </Text>
                    <Text style={styles.subTitle}>Purpose </Text>
                    <View style={{  justifyContent: 'flex-start', paddingTop:20, flexDirection:'row'}}>
                        <FlatList 
                            numColumns={3}
                            data = {this.state.types}
                            renderItem={this.renderItem}
                            keyExtractor = {(item, index) => index.toString()}
                        /> 
                    </View>
                    <Text style={styles.subTitle}>Category   </Text> 
                    <View style={{  justifyContent: 'flex-start', paddingTop:20, flexDirection:'row'}}>
                        <FlatList 
                            numColumns={3}
                            data = {this.state.cats}
                            renderItem={this.renderItemCats}
                            keyExtractor = {(item, index) => index.toString()}
                        /> 
                    </View>

                    <TouchableHighlight style={{  paddingTop:40 ,width:'100%'}}>
                        <View style={{ flexDirection:'row',position:'relative'}}>
                            <Text>  Upload images  </Text>
                            <Text style={{ position:'absolute',right:0}}>  min 3 ({this.state.length})    </Text>    
                        </View>
                        
                    </TouchableHighlight>

                        <FlatList
                            data={this.state.imgs}
                            numColumns={3}
                            renderItem={this.renderImgs}
                            keyExtractor={(item,index)=> index.toString()}
                         /> 
 
                         {/* {() => this.props.navigation.navigate('Home')  } */}

                    <TouchableHighlight style={{position:'absolute',bottom:10, right:10, backgroundColor:'teal',padding:20 }}  onPress={this.show}  >
                       <Text>next</Text>
                    </TouchableHighlight>
                 </View> 
            </Root>      
            )
      
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1 , 
        padding : 30 ,
        justifyContent: 'flex-start',
        alignItems:'flex-start'
    },
    detailTitle:{
        fontSize:18,
        fontWeight:"bold",
        color:'#8E8E8E',  
        textAlign:'left',
    },
    subTitle:{
        fontSize:16,
        textAlign:'left', 
        paddingTop:10 
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
    },
    img:{ 
        width: '100%',
        height:'100%',
        resizeMode : 'cover'
    }
})