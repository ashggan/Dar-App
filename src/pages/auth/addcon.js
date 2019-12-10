import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView ,View ,Button , TextInput } from 'react-native'

export default class AddCon extends Component {
    state = {
        name :'',
        phone :'',
        valid : true
    }

    componentDidUpdate (prevProps , prevState  ) {
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone ){
            this.validate()
        }
    }

    setName = name => this.setState({name})
    setPhone = phone => {
        if(phone >= 0 && phone.length <= 10) this.setState({phone})   
        
    } 

    handle = () => {
        this.props.onSubmit(this.state)
    }
    getHandler = key => {
        return val => this.setState ({[key] : val})
    }

    validate  = () => {
        if(this.state.name.length >= 3 && +this.state.phone >= 0 && this.state.phone.length === 10 ){
            this.setState(prevState => ({valid : false}))
        }else {
            this.setState(prevState => ({valid : true}))

        }
    }
    

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.field} enabled> 
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.getHandler('name')} 
                    value ={this.state.name}
                    placeholder = "Name"
                />
                <TextInput 
                    style={styles.input} 
                    value ={this.state.phone}
                    placeholder="Phone"
                    onChangeText={this.getHandler('phone')} 
                    keyboardType="numeric"
                 />
                  
                <Button title="add" onPress={this.handle} disabled={this.state.valid} />
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
     
    field: {
        flex :1,
        width :'90%',
        marginBottom: 40   ,
        borderBottomColor : '#eee'  ,
        borderBottomWidth : 1 ,
        justifyContent: 'center'
    },
    input :{
        width :'100%',
        marginBottom: 10   ,
        marginTop : 5 ,
        borderColor : 'teal'  ,
        borderWidth : 1 

    }
  });