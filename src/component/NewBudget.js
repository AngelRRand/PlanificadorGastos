import React from 'react'
import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native'
import styles from '../Styles/NewBudget.jsx'
const NewBudget = ({handleBudget, budget, setBudget}) => {



  return (
    <View style={styles.container}>
      <Text  style={styles.label}>Definir Presupuesto</Text>
      <TextInput
        keyboardType='numeric'
        placeholder='Agregar presupuesto'
        value={budget.toString()}
        onChangeText={setBudget}
        style={styles.input}
      />
      <Pressable  
        style={styles.button}
        onPress={()=>
          handleBudget(budget)
        }
        >
        <Text  style={styles.buttonText}>Agregar presupuesto</Text>
      </Pressable>
    </View>
  )
}

export default NewBudget