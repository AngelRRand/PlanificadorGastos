import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.texto}>Planificador de Gastos</Text>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00000078',
    },
    texto:{
        textAlign:'center',
        fontSize:30,
        color:'white',
        fontWeight: 'bold',
        paddingVertical: 10,
    }
  });
  