import React, { Component  } from 'react'
import { Text, View ,TouchableHighlight ,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';     


 

class Step extends Component {
    
    state = { 
        index :0
     };
  
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.haederNav}>
                    <TouchableHighlight onPress={this.props.prevStep}>
                        <View style={styles.mid} onPress={this._goToType} >
                            <Icon   size={20} name={'list'}  type='material'/>  
                            <Text>T&C  ff </Text>   
                        </View>    
                    </TouchableHighlight>
                    
                    <TouchableHighlight  onPress={this.props.nextStep}  >
                        <View style={styles.mid}>
                            <Icon   size={20} name={'star'}  type='material'/>  
                            <Text>Type</Text>    
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight  onPress={this.props.nextStep}>
                        <View style={styles.mid} onPress={this._goToDetail}>
                            <Icon   size={20} name={'playlist-add-check'}  type='material'/>  
                            <Text>Details</Text>   
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight  onPress={this.props.nextStep}>
                        <View style={styles.mid} >
                            <Icon   size={20} name={'check-circle'}  type='material'/>  
                            <Text>Done</Text>   
                        </View>
                    </TouchableHighlight>
                </View>
                {/* <Button title="NEXT"
                disabled={this.props.isLast}
                onPress={this.props.nextStep}></Button>

                <Button title="Prev"
                disabled={this.props.isFirst}
                onPress={this.props.prevStep}></Button> */}
                {this.props.children}

             </View>
        )
    }
}



export default class Wizard extends Component {
    static Step = (props) => <Step {...props} />
    state = { 
        index :0
     };

     _goToType = () => {

            alert('dd')
        //    this.setState(prevState => ({
        //        index : 1
        //    }))    
    }

    _goToDetail = () => {
       
            this.setState(prevState => ({
                index : 2
            }))    
    }

    _goDone = () => {
        
        this.setState(prevState => ({
            index : 3
        }))    
    }
      
//      _nextStep = (index) => {
//          if(this.state.index != this.props.children.length -1){
//             this.setState(prevState => ({
//                 index : prevState.index + 1
//             }))    
//         }
//         alert(index)
//     }

//     _prevStep = () => {
//         if(this.state.index != 0 ){
//            this.setState(prevState => ({
//                index : prevState.index - 1
//            }))    
//        }
//    }

    render() {
        return (
            <View  style={styles.container}>
                {React.Children.map(this.props.children , (el, index)=>{
                    if(index === this.state.index){
                        return React.cloneElement(el, {
                            currentIndex : this.state.index ,
                            nextStep : this._nextStep ,
                            prevStep : this._prevStep ,
                            isLast: this.state.index === this.props.children.length -  1 ,
                            isFirst: this.state.index === 0 ,
                        })
                    }
                    return null
                })}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1, 
        width:'100%'
    },
    haederNav :{
        width: '100%',
        height: '10%',
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        paddingLeft: 30 ,
        paddingRight: 30
    },
    mid :{
        justifyContent:'center',
        alignItems:'center'
    }
})