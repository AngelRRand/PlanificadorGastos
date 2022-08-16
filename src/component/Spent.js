import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from '../Styles/Spent.jsx'

const Spent = ({ bill }) => {

  const { name, category, amount, id } = bill

  return (
    <View style={styles.container}>
      <View>

        <View>
          
          <Text>{category}</Text>
          <Text>{name}</Text>

        </View>
        <Text>{amount}</Text>


      </View>
    </View>
  )
}

export default Spent