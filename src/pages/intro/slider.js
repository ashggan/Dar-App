 import React, { Component } from 'react'
 import { StyleSheet,Text, View , Image } from 'react-native'
 import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'react-native-best-viewpager';


  
  
  export default class Slider extends Component {
      render() {
          return (
            <View>
              <View style={{flex:1}}>
                  <IndicatorViewPager style={{height:'85%'  }}
                      indicator={this._renderDotIndicator()} >
                        <View  >
                        <Image  style={{ height:'80%' , resizeMode : 'cover',width: '100%', alignSelf: 'stretch' }} 
                        source={require('./../../../img/Layer1.png')}  />
                        <View style={styles.content}> 
                            <Text style ={styles.title}>Buy or Rent a House  </Text>
                            <Text style ={styles.subTitle}>Buy or rent your next house</Text>
                            <Text style ={styles.subTitle}>Right from you phone </Text>
                                 
                           
                          </View>
                      </View>  
                    
                   
                      <View  >
                        <Image  style={{ height:'80%' , resizeMode : 'cover',width: '100%', alignSelf: 'stretch' }} 
                        source={require('./../../../img/Layer2.png')}  />
                        <View style={styles.content}> 
                            <Text style ={styles.title}>Advanced Search   </Text>
                            <Text style ={styles.subTitle}>Browse intelligently with  </Text>
                            <Text style ={styles.subTitle}> our advanced filters  </Text>
                                 
                           
                          </View>
                      </View>
                      <View   >
                      <Image style={{height:'80%' , resizeMode : 'cover',width: '100%', alignSelf: 'stretch'  }} 
                      source={require('./../../../img/Layer3.png')}  />
                      <View style={styles.content}> 
                        <Text style ={styles.title}>Explore Now!</Text>
                        <Text style ={styles.subTitle}>Join us now and explore our</Text>
                        <Text style ={styles.subTitle}>rich real-state options</Text>
                        
                        
                        
                    </View>
                      </View>
                  </IndicatorViewPager>
              </View>
            </View>
              
          );
      }
   
  
      _renderDotIndicator() {
          return <PagerDotIndicator pageCount={3} />;
      }
  }

  const styles = StyleSheet.create({
     
    
    
    content : {
        flex: 1,
        justifyContent : "center",
        alignItems : "center", 
        marginTop: 20
    },
    title: {
        fontSize : 24 ,
        fontWeight : "bold"
    },
    subTitle :{
        fontSize: 14 ,
        color : 'teal',
        paddingTop: 5,
        textAlign : "center"
    },
    
   
    
  });

 


 