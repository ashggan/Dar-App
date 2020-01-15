 import React, { Component } from 'react'
 import { Text, View ,FlatList ,TouchableHighlight ,StyleSheet ,Image} from 'react-native'
 import { ActionSheet  ,Root} from 'native-base' 
 import ImagePicker from 'react-native-image-crop-picker';
 import {PermissionsAndroid} from 'react-native';

 export default class main extends Component {
   state = {
    fileList : []
   }

   renderItem = ({item,index}) => {
    return (
      <View style={{width:100,height:100 , backgroundColor:'teal' , marginBottom:20}} >
        {/* <Text>{`require(${item.url})`}</Text> */}
        <Image source={{ uri :item.url}} style={styles.img} />
      </View>
    )
   }

   onSelectImge = image => {
     let list = this.state.fileList
     const src = {url: image.path}
     let item = {
       id : Date.now(),
       url: image.path , 
     }
     list.push(item)
     console.log(item)
     this.setState( {fileList: list})
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
    //  let  {fileList} = this.state
     return (
       <Root> 
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text> upload image  </Text>
            <FlatList 
            data = {  this.state.fileList}
            renderItem={this.renderItem}
            keyExtractor = {(item,index) => index.toString() }
              extraData = {this.state}
            />
            <TouchableHighlight style={styles.btn} onPress={this.onClickAddNewImage}>
              <Text>Add image</Text>
            </TouchableHighlight>
          </View>
       </Root>
     )
   }
 }

 const styles = StyleSheet.create({
   btn :{
     backgroundColor:'teal',
     padding: 30,
     marginBottom:30,
     borderRadius: 4,
   },
   img:{ 
     width: '100%',
     height:'100%',
     resizeMode : 'cover'
   }
 })