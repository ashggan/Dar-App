import React, { Component } from 'react'
import { Text ,SectionList , StyleSheet } from 'react-native'
import Row from './row'

sectionHeader = obj =>  <Text>{obj.section.title} </Text>

renderItem = obj => <Row {...(obj.item)}  keyExtractor={(item) => item.toString()} />  

 const  ContactList = props =>   (
            <SectionList 
                renderSectionHeader = {this.sectionHeader}
                style={styles.full} data={ props.contact} 
                renderItem={this.renderItem} 
                sections = {[
                {title : 'S' ,
                data : props.contact 
                }
                ]} /> 
        )
 

const styles = StyleSheet.create({
    full :{
        width : '90%'
      }
})

export default  ContactList 

