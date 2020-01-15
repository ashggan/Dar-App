import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AddCon from './../addcon'


addCon = newCon => {
    this.setState(prevState => ({contact : [...prevState.contact, newCon] }))
  }

export default class AddConScreen extends Component {
    render() {
        return (
           <AddCon onSubmit={this.addCon}  />
        )
    }
}

 


