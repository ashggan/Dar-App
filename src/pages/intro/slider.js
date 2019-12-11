import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenComponentOne from './screen/conListScreen'




class ScreenComponentTwo extends React.Component {
    static navigationOptions = {
      headerTitle  : 'Second screen'
    }
    render() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            borderWidth: 25,
            borderColor: 'orange',
          }}>
          <Button
            title="Go to one"
            onPress={() => this.props.navigation.navigate('routeNameOne')}
          />
        </View>
      );
    }
  }

  const MyNavigator = createStackNavigator({
    routeNameOne: ScreenComponentOne,
    routeNameTwo: ScreenComponentTwo,
   });
  
  const Nav = createAppContainer(MyNavigator);
  
 
export default class slider extends Component {
    render() {
        return (
            <View>
                <Nav/>
            </View>
        )
    }
}


import React from 'react';
import { Button, View } from 'react-native';

 

// class ScreenComponentOne extends React.Component {
//   static navigationOptions = {
//     headerTitle  : 'First screen'
//   }
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           borderWidth: 25,
//           borderColor: 'teal',
//         }}>
//         <Button
//           title="Go to two"
//           onPress={() => this.props.navigation.navigate('routeNameTwo')}
//         />
//       </View>
//     );
//   }
// }


