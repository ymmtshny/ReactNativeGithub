import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.title_wapper}>
          <Text style={styles.title}>Github App</Text>
        </View>
        <View style={styles.subtitle_wapper}>
          <Text style={styles.subtitle}>Powered by React Native</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'#1abc9c',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title_wapper: {
    flex:1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
    paddingBottom:16,
  }
})
