import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import styles from '../Styles/Header.jsx'

export const Header = () => {
  
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.texto}>Planificador de Gastos</Text>
        
    </SafeAreaView>
  )
}


  