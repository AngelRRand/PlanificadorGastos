import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import styles from '../Styles/NewBudget.jsx'
const NewBudget = () => {
  return (
    <View style={styles.container}>
        <Text>Definir Presupuesto</Text>
        <TextInput

        />
        <Pressable>
            <Text>Agregar presupuesto</Text>
        </Pressable>
    </View>
  )
}

export default NewBudget