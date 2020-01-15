import React, { Component } from 'react' 
import IntroNav from './src/pages/intro/nav' 
import { createStore } from 'redux' 
import { Provider } from 'react-redux'
import  districts  from './src/pages/api'

function districtsReduer (state ,action) {
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
 
