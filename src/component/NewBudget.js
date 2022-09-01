import React, {useEffect} from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from '../Styles/NewBudget.jsx'
const NewBudget = ({handleBudget, budget, setBudget}) => {

  useEffect(() => {
    const NewAsyng = async() =>{
      const value = await AsyncStorage.getItem('prueba')
    }
    NewAsyng()
  }, []);

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