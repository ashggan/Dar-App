import React from 'react';
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
    );
  }
}
