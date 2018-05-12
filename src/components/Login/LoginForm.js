import React, { Component } from 'react'
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

export default class LoginForm extends Component {

    render() {
      return (
          <View style={styles.container}>
            <TextInput
              placeholder="user name"
              placeholderTextColor="white"
              returnKeyType="next"
              style={styles.input}
            />
            <TextInput
              placeholder="password"
              placeholderTextColor="white"
              returnKeyType="go"
              secureTextEntry
              style={styles.input} />
            <TouchableOpacity  style={styles.button_container}>
              <Text style={styles.button_text}>LOGIN</Text>
            </TouchableOpacity>
          </View>
      )
    }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#3498db',
    padding:20,
  },
  input: {
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:20,
    paddingLeft:10,
  },
  button_container: {
    backgroundColor:'#2980b9',
    justifyContent:'center',
    alignItems:'center',
  },
  button_text: {
    padding:14,
    color:'white',
    fontWeight:'bold'
  }
})
