import React, { Component } from 'react' 
import IntroNav from './src/pages/intro/nav' 
import { createStore } from 'redux' 
import { Provider } from 'react-redux'
import  districts  from './src/pages/api'
import axios from 'react-native-axios'


const initalState = {
  districts:districts
}  

function districtsReduer (state = initalState ) {
  return state
}
const store = createStore(districtsReduer)
 
 export default class App extends Component {
   render() {
     return (
      <Provider store={store}>
        <IntroNav /> 
    </Provider>
      )
   }
 }
 
