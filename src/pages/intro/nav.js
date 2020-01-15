import React from 'react';
import {   View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';  

// screens of switch nav
import Main from './main'
import Switch  from  './switch'
import Splash from './splash'
import Slider from './slider'
import Type from './../sign/type'
import Custom from './../sign/custom'
import Register from './../sign/register'
import Premission from './../sign/premission'
import Notify from './../sign/notify'


import Home from './../main/home' 
import Profile from './../main/profile'
import Favorites  from './../main//favorites ' 
import Chat from './../main/chat'
import Add from './../main/add'


import Terms from './../property/terms'
import Details from './../property/details'


const AddProp = createMaterialBottomTabNavigator({
  Terms : {screen : Terms,
    navigationOptions:{  
      tabBarLabel:'Terms',  
      tabBarVisible: false,

  } },
  Details : {screen : Details,
    navigationOptions:{  
      tabBarLabel:'Details',  
      tabBarVisible: false,

  } },
},{
  initialRouteName : 'Details',
  tabBarVisible: false,

})


// main bottom nav
const ManinNavigator = createMaterialBottomTabNavigator({
  Home : {screen : Home,
    navigationOptions:{  
      tabBarLabel:'Home',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'home'}/>  
          </View>),  
   
  } },
  Favorites : {screen : Favorites,navigationOptions:{  
      tabBarLabel:'Favorites',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'star'}  type='material'/>  
          </View>),  
      
  } },
  Add  : {screen : AddProp,
    navigationOptions:{  
      tabBarLabel:'Add',  
      tabBarVisible: false,
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'add'}/>  
          </View>),  
        
  }  }, 
  Profile  : {screen : Home,
    navigationOptions:{  
      tabBarLabel:'Profile',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'person'}/>  
          </View>),  
        
  }  },
  Chat  : {screen : Chat,
    navigationOptions:{  
    tabBarLabel:'Chat',  
    tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name={'chat'}  type='material'/>  
        </View>),  
      
  }},
  
},{
  initialRouteName : 'Add',
  activeColor: '#B3433F',
  inactiveColor: '#BAC1C9',
  textColor: '#BAC1C9',
  showIcon: true,
  showLabel: true,
  barStyle: { backgroundColor: '#eee' ,height:70},
})

// export const MainNav = createAppContainer(ManinNavigator)


const IntroNavigator = createSwitchNavigator({
  SplashRoute: Splash,
  switchRoute :Switch,
  mainPageRoute: Main, 
  typeRoute :Type,
  SliderRoute:Slider,
  RegisterRoute : Register,
  CustomRoute :Custom,
  PremissionRoute :Premission ,
  NotifyRoute :Notify,
  mainNavRoute : ManinNavigator
  }, {
    initialRouteName :'mainNavRoute'
});

const IntroNav = createAppContainer(IntroNavigator);
    
export default IntroNav
