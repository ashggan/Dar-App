import React, { Component } from 'react' 
import { Text, View ,StyleSheet ,TextInput ,TouchableHighlight} from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import axios from 'react-native-axios'

class Header extends Component {
     
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>Almost there..   </Text>
                <Text style={styles.subtitle}>jsut fill the following  </Text>
            </View> 
        );
    }
} 

export default class register extends Component {
    state = {    
      name:'',
      email:''  ,
      password:'',
      user:{}
    }

     

    setName = name => this.setState({name})
    setEmail = email => this.setState({email})

     getHandler = key => {
        return val => this.setState ({[key] : val})
    }
    submit = async () => {

       const name = this.state.name 
       const email = this.state.email 
       const password = this.state.password 
       const type = 'Business'
       const data = {name,email,password,type}

       const res  = await axios.post('https://dar-dashoard.herokuapp.com/users',data)
       const user = res.data.InsertUser
        alert( `${ user.email}`  ) 
    }  
    render() {
        return (
            < View style ={{flex :1 ,padding: 30 }}>
               <Header/>   
                {/* <Text>{this.props.navigation.navigate.data.phone} </Text> */}
               <TextInput 
                    style={styles.input} 
                    onChangeText={this.getHandler('name')} 
                    value ={this.state.name}
                    placeholder = "Name"
                />

                <TextInput 
                    style={styles.input} 
                    onChangeText={this.getHandler('email')} 
                    value ={this.state.email}
                    placeholder = "Email"
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.getHandler('password')} 
                    secureTextEntry={true}
                    value ={this.state.password} 
                    placeholder = "Password"
                />

                <TouchableHighlight style={styles.termsBtn} 
                    onPress = {this.submit} >
                    <Text style={styles.termsBtnTxt} > Sign Up </Text>
                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header :{
        width : '100%',
        height : '25%', 
        justifyContent :'center',
        paddingLeft : 50
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
        alignSelf:'center',
        height:'12%',width:'70%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,        
    },
    termsBtnTxt:{
        color:'#fff',
        fontSize: 16
    },
    input :{
        width :'100%',
        marginBottom: 10   ,
        marginTop : 5 ,
        borderColor : 'teal'  ,
        borderBottomWidth : 1 

    }
})
