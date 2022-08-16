import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
const Spent = ({bill}) => {
  return (
    <View>
        <Text>{bill.name}</Text>
    </View>
  )
}

export default Spent