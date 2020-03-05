import React, { Component } from 'react'
import { Text, View ,StyleSheet ,FlatList ,TouchableHighlight ,Image  ,SafeAreaView } from 'react-native'
import { ActionSheet  ,Root} from 'native-base' 
import ImagePicker from 'react-native-image-crop-picker'; 
import Icon from 'react-native-vector-icons/MaterialIcons';  
import RedBox from './../../components/RedBox'
import Box from './../../components/Box' 
import axios from 'react-native-axios'
var FormData = require('form-data');

export default class Type extends Component {
    state = {
        type : '',
        category:'',index:'',length:0,
        imgs:['empty','empty','empty','empty','empty','empty'],
        types: ['Rent', 'Sell'],
        cats: ['Apartment', 'Villa','House','Land','Load-bearing','Tower'], 
    }
     
    show = async () => {
        const type = this.state.type
        // if(type==='') alert('Please select Purpose')
        
        const category = this.state.category
        // if(category==='') alert('Please select Category')

        const imgs = this.state.imgs.filter(img => img !== 'empty' )
        const data = {type,category, price:0,size:0 }
        
        //  console.log(imgs[0])
        // this.props.navigation.navigate('Details',{data,imgs})

        // const formData = new FormData() 
        const config = {
            headers:{
                'Content-Type':'multipart/form-data'
              }
        }
        
        let formData = new FormData()
        formData.append('property', JSON.stringify(data))
        // formData.append('files', imgs  ) 
        
        for( var i = 0; i < imgs.length; i++ ){
            let file = imgs[i];
            // formData.append('files[' + i + ']', file);
            console.log(file)
          }

        try {
            await  axios.post("http://192.168.0.15:5000/properties",formData,config )
                    .then( res =>
                         console.log(res.data)
                         )
                    .catch( err => 
                        { console.log(err);
                     })
            // await axios.get('http://192.168.0.15:5000/properties',formData,config)
            // .then(res => {
            //     if(res.status=== 200){
            //       console.log('success')
            //     }else{
            //         console.log('res')
            //     }
            //   }) 
            //   .catch(err=> console.error("error uploading images: ", err)) 

        } catch (error) {
            console.error("error uploading images: ", error)
            // console.log(error)
        }

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

    remove = index => { 
        this.onClickChangeImage(index)
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
                onPress={()  => this.remove(index) }> 
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
            name:image.path.split('/').pop(),
            // lastModified : Date.now(),
            url: image.path , 
            // size:image.size,
            type:image.mime,
            // data:image.data
        }
        list[index] = item 
        // console.log(list)
        this.setState( {imgs: list})
        this.setState(prevState => ({ length : prevState.length++ })  )
    }
        
    lanchCamera = async () => {
       
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          includeBase64:true,
          filename: true
        }).then(image => {
          this.onSelectImge(image) 
        });
       
    }
    
    openGallery = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400, 
        //   includeBase64:true,
        //   filename: true,
          includeBase64:true,
        }).then((image) => {
          this.onSelectImge(image) 
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

    onClickChangeImage = index => {
        const Buttons = ['remove ' ,   'cancel']
        ActionSheet.show(  {
          options :Buttons ,
          cancelButtonIndex :1,
            title:'Remove Image'
          },
          buttonIndex  => {
            switch (buttonIndex) {
              case 0:
                let imgs =this.state.imgs
                imgs[index]='empty'
                this.setState({imgs}) 
                break;
             
              default:
                break;
            }
        })
    }
 
    render() {
         
            return (
            <Root>    
                <SafeAreaView  style={styles.container}  >  
                    {/* <View> */}
                        <Text style={styles.detailTitle}>Select property type   </Text>
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

                        <TouchableHighlight 
                            style={{position:'absolute',bottom:0, right:10, padding:20 }}  
                            onPress={this.show}  >
                            <Text>next</Text>
                        </TouchableHighlight>
                        {/* </View>  */}
                    </SafeAreaView  >  
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