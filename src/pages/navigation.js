import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



export default class Navigation extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
