import React from 'react';
import { Button, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenComponentOne from './screen/conListScreen'
import Main from './../intro/main'

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
  mainPageRoute: Main,
});

const Nav = createAppContainer(MyNavigator);

export default Nav