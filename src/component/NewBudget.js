import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import styles from '../Styles/NewBudget.jsx'
const NewBudget = () => {
  return (
    <View style={styles.container}>
      <Text  style={styles.label}>Definir Presupuesto</Text>
      <TextInput
        keyboardType='numeric'
        placeholder='Agregar presupuesto'
        style={styles.input}
      />
      <Pressable  style={styles.button}>
        <Text  style={styles.buttonText}>Agregar presupuesto</Text>
      </Pressable>
    </View>
  )
}

export default NewBudget