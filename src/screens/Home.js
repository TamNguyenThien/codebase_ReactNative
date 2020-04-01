import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <Text> Home </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
