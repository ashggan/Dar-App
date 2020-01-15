import React from 'react';
<<<<<<< HEAD
import { Button, View ,ImageBackground ,TouchableHighlight } from 'react-native'; 


export default class ScreenComponentOne extends React.Component {
  render() {
    return (
      <View style={{flex:1}}> 
         <ImageBackground source={require('./../../../../img/Layer2.png')} 
              style={{width: '100%', height: '70%' ,marginTop : 100}}>
          </ImageBackground>
          <View style={styles.inputsContainer}>
             
                  <View style={styles.content}> 
                      <Text style ={styles.title}>Advanced Search </Text>
                      <Text style ={styles.subTitle}>
                          Browse intelligently withour advanced filters   
                      </Text>
                  <TouchableHighlight style={styles.fullWidthButton} >     
                      <Button
                          title="Go to one"
                          onPress={() => this.props.navigation.navigate('routeNameOne')}
                      />
                  </TouchableHighlight>
                  </View>
              
          </View>
      </View>         
=======
import { Button, View } from 'react-native'; 


export default class ScreenComponentOne extends React.Component {
  static navigationOptions = {
    headerTitle  : 'First  '
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'teal',
        }}>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate('routeNameTwo')}
        />
      </View>
>>>>>>> 7a27d2492cef7232ffdbc793986d5494e522c96c
    );
  }
}
