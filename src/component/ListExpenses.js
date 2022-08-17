import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import Spent from './Spent'
const ListExpenses = ({bills, setModal, setSpent}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Expenses</Text>
        {
            bills.length === 0 
            ? 
            <Text style={styles.TextNotExp}>No hay gastos..</Text>
            :
            bills.map(b => (
                <Spent
                    key={b.id}
                    bill={b}
                    setModal={setModal}
                    setSpent={setSpent}
                />
            ))
        }
    </View>
  )
}

export default ListExpenses