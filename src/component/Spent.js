import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
const Spent = ({bill}) => {

  const {name, category, amount, id} = bill

  return (
    <View>
        <Text>{name}</Text>
    </View>
  )
}

export default Spent