import React, { Component } from 'react'
import { Text, View ,StyleSheet, ImageBackground , Image ,TouchableHighlight , TextInput , FlatList, SafeAreaView,KeyboardAvoidingView ,Modal} from 'react-native'
import data from './Countries' 
import Icon from 'react-native-vector-icons/MaterialIcons'  
  
export default class Main extends Component {

  state = {
    phone:'',code: {}, modalVisible: false 
  }


  async componentDidMount(){
    try {
      let code = await data.filter(
        obj => obj.name === 'Sudan'
      )[0]
      this.setState({code:code}) 

    } catch (error) {
      console.log(error)
    }
  }

  async selectCountry(country) {  
    // Get data from Countries.js  
      try {
        let code = await data.filter(
          obj => obj.name === country
        )[0]
        this.setState({code:code})
        console.log(code)
      await this.hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }
  showModal() {  this.setState({ modalVisible: true  }) }
  
  hideModal() {  this.setState({ modalVisible: false }) }
 
  signup = () => {
    let {code,phone} = this.state
    if(this.state.phone.length < 9 ) alert('Add a valid phone number')
    else {
      let lang = this.props.navigation.state.params.lang
      phone = parseInt(phone,10)
      let data = {lang, phone ,counrty_code: parseInt(code.dial_code,10) ,counrty :code.name }
      // console.log(data)  =parseInt(code.dial_code,10)
      this.props.navigation.navigate('typeRoute', data)
    }
  }

  setVal = val => { if(val.length < 11) this.setState({phone:val})  }
  // {this.props.navigation.state.params.lang}
    render() {
      const countryData = data
      const {phone , code , modalVisible} = this.state 
        return (
        //   
            
           <View style={{
             flex:1,
            //  backgroundColor:'teal' 
           }}>
              {/* Modal for country code and flag */}
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}>
              <View style={{ flex: 1 }}>

              <View style={{ flex: 7, padding   : 30 ,paddingRight:0 }}>
                {/* Render the list of countries */}
                <FlatList
                style={{marginLeft:30}}
                  data={countryData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={
                    ({ item }) =>
                      <TouchableHighlight 
                        onPress={() =>       this.selectCountry(item.name)}>
                        <View style={styles.countryStyle}>
                          <Text style={styles.textStyle}>
                            {item.flag} {item.name} ({item.dial_code})
                          </Text>
                        </View>
                      </TouchableHighlight>
                  }
                />
              </View>

            <TouchableHighlight
              onPress={() => this.hideModal()}
              style={styles.closeButtonStyle}>
              <Text style={styles.textStyle}>
                Cancel
              </Text>
            </TouchableHighlight>
          </View>
        </Modal>
             <View style={{ flex:.7,  justifyContent:'center',alignItems:'flex-start' }}>
               <ImageBackground source={require('./../../assets/kh.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.Topcontainer}>
                    <Image source={require('./../../assets/dar_logo.png')} style={styles.bg_img}></Image>
                </View>
              </ImageBackground>
             </View>
             <View style={{ flex:.3,  }}>
             <SafeAreaView style={styles.container}>
              <KeyboardAvoidingView    behavior="height" keyboardVerticalOffset={60}> 
              <View style={[styles.innerContainer,{marginTop:-30,}]}>
                  <TouchableHighlight style={styles.codeInput} 
                  onPress={() => this.showModal() }>
                    <View style={{flexDirection:'row'}}>
                      <Text >{  code.flag } </Text>
                      <Text >  {  code.dial_code}</Text>
                      <Icon style={[{color: '#111',paddingLeft:5}]} size={22} name={'keyboard-arrow-down'}/>    
                    </View>
                    

                    </TouchableHighlight>
                      <TextInput
                        placeholder="9011100000"
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={val => this.setVal(val)}
                        style={styles.phone}
                        />  
                  </View>
                  <View style={styles.innerContainer}>
                    <TouchableHighlight 
                    style={styles.signup}
                    onPress={this.signup}>
                      <Text style={{  color:'#fff', fontSize:14 }}>Sign Up</Text>
                    </TouchableHighlight>
                    </View>
                          <View style={{
                      justifyContent:'flex-end',
                      alignItems:'center', 
                      height:'30%'
                    }}>
                    
                      <Text style={{  color:'#6494AA'  }}>Already have an account?  
                        <Text style={{color:'#E9B872'}} onPress={() => this.props.navigation.navigate('SignInRoute')}> Sign In</Text> 
                      </Text> 
                    </View>
              </KeyboardAvoidingView>
              </SafeAreaView>
              </View>
              
           </View>
               
          

           
                  

                   
           
           
        //   </KeyboardAvoidingView>
        // </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'flex-start',
      alignItems:'center',
      margin :0,
      // flexDirection:'column'
    },
    Topcontainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      margin :0,
      // flexDirection:'column'
    },
    signup:{
      backgroundColor:'white',
      marginRight:0, 
      width:'80%',
      marginTop:20,
      borderRadius:5,
      backgroundColor:'#E9B872',
      height:60,
      justifyContent:'center',
      alignItems:'center'
    },
   innerContainer:{
    flexDirection:'row',
    backgroundColor:'#fff', 
    // backgroundColor:'teal', 
    width:'100%' , 
    },
    fullWidthButton: {
      height:70,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // width:'70%',
      // backgroundColor:'teal'
    },
    fullWidthButtonText: {
      fontSize:24,
      color: 'blue'
    },
    inputsContainer: {
      flex: 1, 
      width:'100%',
     position:'relative'
    },
    bg_img:{
      width: 300,
      height: 100,
      resizeMode: 'contain',
      marginBottom:30
    },  
    phone:{
      backgroundColor:'white', 
      height:60, 
      width:'50%', 
      borderBottomWidth:1,
      borderBottomColor:'#eee'
    },
    codeInput :{
      backgroundColor:'white',
      marginRight:0, 
      width:'30%',
      height:60,
      justifyContent:'center',
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:'#eee'
    },
    countryStyle:{  
      padding :12 
    },
    textStyle:{
      fontSize: 14
    }
  });