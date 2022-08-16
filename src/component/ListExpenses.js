import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
const ListExpenses = ({bills}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Expenses</Text>
        {
            bills.length === 0 
            ? 
            <Text style={styles.TextNotExp}>There are no expenses yet</Text>
            :
            bills.map(b => {
                <Text></Text>
            })
        }
    </View>
  )
}

export default ListExpenses