import Nav from './nav'

export default Nav

// import React, { Component } from 'react'
// import { Text, View ,StyleSheet,SectionList , FlatList ,Button ,ScrollView  } from 'react-native'
// import contact , { compareNames } from './contatcs'
// import ContactList from './contactList'
// import AddCon from './addcon'

// export default class login extends Component {
  
//   state = {
//     showCon : true,
//     contact :contact 
//   }
 
//   toggleCon = () => {
//     this.setState(prevState => ( {showCon : !prevState.showCon}))
//   }

//   sort = () => {
//     this.setState(prevState => ({contact : [...prevState.contact].sort(compareNames)}))
//   }

//   addCon = newCon => {
//     this.setState(prevState => ({contact : [...prevState.contact, newCon], showCon : !prevState.showCon}))
//   }

//   render() {
//       return (
//       <View style={styles.container}>
//         <Button title="toggle" onPress={this.toggleCon}></Button>
//         <Button title="Sort " onPress={this.sort}></Button>
//           {this.state.showCon  ?  ( <ContactList contact={this.state.contact} />  ) : <AddCon onSubmit={this.addCon} /> }
//       </View>
//       )     
//   }
// }


// const styles = StyleSheet.create({
     
//     container: {
//       position: "relative",
//       backgroundColor: '#fff',
//       flex:1,
//       justifyContent:'flex-start',
//       alignItems:'center',
//       paddingTop : 30
//     },
//     full :{
//       width : '90%'
//     }
//   });


// {/* <ScrollView >
//   {contact.map(con => ( <Row  {...con} /> )) }
// </ScrollView> */}

// // <FlatList style={styles.full} data={this.state.contact} 
// //             renderItem={this.renderItem} />