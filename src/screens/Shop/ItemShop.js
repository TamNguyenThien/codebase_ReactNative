import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ItemShop = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent:'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor:'#a2e1f2'
  },
  title: {
    fontSize: 18
  }
})