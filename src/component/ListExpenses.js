import React from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import Spent from './Spent'
const ListExpenses = ({ bills, setModal, setSpent, filtro, billsFilter }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>

      {
        filtro ? billsFilter.map(b => (
          <Spent
            key={b.id}
            bill={b}
            setModal={setModal}
            setSpent={setSpent}
          />
        ))
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
      {
        (bills.length === 0 || (billsFilter.length === 0 && !!filtro))&& (
          <Text>No hay Gastos</Text>
        )
      }
    </View>
  )
}

export default ListExpenses