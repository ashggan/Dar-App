import React, { Component } from 'react'
import { Text, View ,StyleSheet ,SafeAreaView ,Image ,KeyboardAvoidingView,Modal ,TouchableHighlight,ScrollView,FlatList} from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from 'react-native-axios' 
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Loader from "react-native-modal-loader"
import Header from './../../components/Header'
 
class Cuurency extends Component {
    render() {
        return (
            <TouchableHighlight style={[styles.btn]} onPress={this.props.select}>
                <Text style={{color:'#111'}}>{this.props.curency}</Text>
            </TouchableHighlight>
        );
    }
} 

class RedCuurency extends Component { 
    render() {
        return (
            <TouchableHighlight style={[styles.red]} onPress={this.props.select}>
                <Text style={{color:'#fff'}}>{this.props.curency}</Text>
            </TouchableHighlight>
        );
    }
} 

const ConfirmModal = props => (
    <Modal  animationType="fade" transparent={true} visible={  props.modalVisible}
            // onRequestClose={() => { Alert.alert('Modal has been closed.'); }}
            >
        <View style={styles.ModalConstaoner}>
            <View style={styles.ModalInnerContainer}>
                {props.check == true &&<Image source={require('./../../../img/done.png')} />}
                {props.check == false &&<Image source={require('./../../../img/error.png')} />}

                
            <Text style={{fontSize:24, marginTop:20}}> {props.title} </Text>
            <Text style={{fontSize:16, marginTop:20}}> {props.subTitle} </Text>
            {props.check == false && <Text 
            onPress={  this.props.navigation.navigate('SignInRoute') }
            style ={{
                color:'#E9B872'
            }} 
            > Sign in </Text> } 
          
            {props.check == false &&<Text 
            onPress={props.colse}
            style={{
                marginTop:20,
                color:'#B3433F'
            }}>
                 Close</Text> }
            
            </View>
        </View>
    </Modal>
)


export default class Register extends Component {
    state = {
            name:'',
            email :'',
            password:'',
            office:'',addres:'',
            curency:'SDG',
            type:'personal',
            type:'per',
            ERROR:'',PassError:'',
            curs : ['Dollar','SDG'],
            currancy:'',
            order:false,
            isLoading: false,
            modalVisible:false,
            valid:false,
            ConfirmMsg:{
                title : '',
                subtitle:'', 
                check:false, 
            },
           
            
    } 

    getHandler = key => {
        return val => this.setState({[key] : val})
        console.log(this.state.name)
    }
 
    renderItem =  ({item,index}) => {
        if(this.state.currancy==  item){
            return(
                <RedCuurency    curency={item} select={() => this.setState({currancy:''})} ></RedCuurency>
            )
        }else{
            return(
                <Cuurency    curency={item}  select={() => this.setState({currancy:item})}></Cuurency>
            )
        }
        
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    submit =  async () => { 
        // this.setModalVisible(true)
        this.setState({isLoading:true})
         let data =  this.props.navigation.state.params.data 
         let { name , email ,addres , password ,office ,currancy , ConfirmMsg} = this.state
         this.validate(email)
         console.log()
         data = { ...data, name , email ,addres , password ,office,currancy }
        let  SuccuessConfirmMsg = {
            title : 'Welcome!',
            subtitle:'Signed up successfully', 
            check:true, 
        }
        let ErroronfirmMsg  = {
            title : 'Sorry!',
            subtitle:'Email alrady existed',
            check:false, 
        }
 
        try {   
            await axios.post('https://dar-dashoard.herokuapp.com/clients/signup',data)
            .then(  res =>  {
                this.showLoader()
                setTimeout(() => {  
                    if(res.status == 201){
                        console.log(res.data.newClient);
                        this.setState({ConfirmMsg:SuccuessConfirmMsg})
                        setTimeout(() => {
                            this.setState({isLoading:false})  
                            this.setModalVisible(false)
                            let id = res.data.newClient.id
                            console.log(data)
                            this.props.navigation.navigate('PremissionRoute',{id}) 
                        }, 2000); 
                    }else{
                        this.setState({ConfirmMsg:ErroronfirmMsg}) 
                    }
                 }, 3000)    
              })
        
        } catch (error) {
            console.log(error)
        } 
        // this.props.navigation.navigate('PremissionRoute')}
    }

    validate = (text) => {
        // console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        { 
        this.setState({ERROR:'Incorrect Email'})
        this.setState({email:text})
        return false;
          }
        else {
          this.setState({email:text,ERROR:''}) 
        }
    }

    validPass = val => {
        if(val.length > 5){
            this.setState({password:val,PassError:''})
        }else{
            this.setState({password:val,PassError:'Password Length less than 6 digits'})

        }
    }

    CurVal = val => {
        this.setState(() =>({user:{curency:val}}))
    }
    
    showLoader = () => {
        this.setState({ isLoading: true });
    };
 
    render() {
        let {name,email ,curs, addres,office,password,ConfirmMsg ,modalVisible} = this.state
        let type =  this.props.navigation.state.params.data.type 
        return (
            <View style ={{flex :1,paddingLeft:30, paddingRight:30}}>
                <Header title="Almost there... "  subTitle="jsut fill the following "/> 
                <View style={styles.LoaderContainer}>
                    <Loader loading={this.state.isLoading} color="#ff66be" /> 
                </View>
                <ConfirmModal 
                    modalVisible={ modalVisible} 
                    // title={ConfirmMsg.title} 
                    // subTitle={ConfirmMsg.subtitle} 
                    // check={ConfirmMsg.check}
                    colse = {()=> this.setState({modalVisible:false})} /> 

                <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView   behavior="height" keyboardVerticalOffset={20}> 
                       <ScrollView showsVerticalScrollIndicator={false}>
                        <Input  
                            containerStyle={{height:80}}
                            value ={name}
                            placeholder='Your name'
                            onChangeText={ this.getHandler('name')}  
                            errorStyle={{ color: 'red' }}
                            leftIcon={  <Icon  name='person-outline' size={24} color='grey'  /> } />

                        <Input  
                            containerStyle={{height:80}}
                            value={email}
                            placeholder='Your Email'
                            keyboardType="email-address" 
                            errorMessage={this.state.ERROR}
                            onChangeText={val =>  this.validate(val)}  
                            leftIcon={  <Icon  name='mail-outline' size={24} color='grey'  /> }   />

                        <Input  
                            containerStyle={{height:80}}
                            value={password}
                            placeholder='Your Password'
                            secureTextEntry={true}
                            errorMessage={this.state.PassError}
                            onChangeText={val =>  this.validPass(val)}   
                            leftIcon={  <Icon  name='lock-open' size={24} color='grey'  /> }    />   

                        {type=="Business" &&
                            <Input  
                                containerStyle={{height:80}}
                                value={office}
                                placeholder='Your office'
                                keyboardType="email-address"
                                onChangeText={this.getHandler('office')}  
                                leftIcon={  <Icon2  name='briefcase-outline' size={24} color='grey'  /> }   />
                        }

                        {type=="Business" &&
                            <Input  
                                containerStyle={{height:80}}
                                value={addres}
                                placeholder='Your Address'
                                keyboardType="email-address"
                                onChangeText={this.getHandler('addres')}  
                                leftIcon={  <Icon2  name='map-marker-outline' size={24} color='grey'  /> }   />
                        }
                        
                        <View style={ styles.cuurency } >
                            <Text>Currancy   </Text>
                            <FlatList
                                // horizontal={true}
                                data={curs}
                                numColumns={3}
                                renderItem={this.renderItem}
                                keyExtractor = {(item, index) => index.toString()}
                            />
                        </View>

                        <TouchableHighlight 
                            // disabled={ valid}
                            style={styles.termsBtn} 
                            onPress={this.submit}
                            // onPress={  this.props.navigation.navigate('SignInRoute') } 
                            >
                            <Text style={styles.termsBtnTxt} > Sign Up </Text>
                        </TouchableHighlight>
                   
                        </ScrollView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </View>
        )
    }
}


const styles = StyleSheet.create({  
    container:{
        flex:1,
        justifyContent:'flex-start', 
    },
    ModalConstaoner:{ 
        backgroundColor:'#0000006a',
        height:'100%', 
        justifyContent:'center',
        alignItems:'center'
    },
    ModalInnerContainer:{
        backgroundColor:'#fff',
        width:'70%',
        height:'40%',
        borderRadius:4,
        justifyContent:'center',alignItems:'center'
    },
    LoaderContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        position:'absolute'
    },
    line :{
        paddingTop : 30,
        fontSize : 16,
        color :'#8E8E8E'
    },
    btn:{
        borderWidth:2, 
        borderColor:'#eee',
        borderRadius:4,
        padding: 20 ,
        width:'30%',
        marginLeft:30,
        alignItems:'center'
    },
    red:{
        borderWidth:2, 
        borderColor:'#B3433F',
        backgroundColor:'#B3433F',
        borderRadius:4,
        padding: 20 ,
        marginLeft:30,
        width:'30%',
        alignItems:'center'
    },
    select :{
        width : '100%', 
        flex: 1,
        // backgroundColor :'aqua',
        justifyContent :'space-around',
        // alignItems :'center',
        padding  : 30
    },
    header :{
        width : '100%',
        height : '25%', 
        justifyContent :'center',
        // paddingLeft : 50
    },
    title :{
        fontSize :30,
        color : '#6494AA',
        fontWeight : 'bold'
    },
    subtitle :{
        color :'#BFBFBF',
        fontSize : 20
    },
    termsBtn :{ 
        backgroundColor: '#90A959',
        marginTop: 30,
        marginBottom:60,
        alignSelf:'center',
        height:50,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,        
    },
    termsBtnTxt:{
        color:'#fff',
        fontSize: 16
    },
    cuurency :{
        flexDirection: 'row', 
        width:'100%',
        marginTop : 40,
        height: '15%', 
        alignItems:'center' , 
        justifyContent:'space-around'
    }
} )