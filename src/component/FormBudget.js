import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, SafeAreaView } from 'react-native'
import styles from '../Styles/FormBudget.jsx'

const FormBudget = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Pressable>
                    <Text>
                        Cancel
                    </Text>
                </Pressable>
            </View>
            <View style={form}>
                <Text style={title}>New Bills</Text>

                <View style={styles.containerInput}>
                    <Text style={styles.laber}>Expense name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Expense name. ej. Cine'
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.laber}>Amount spent</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Spending amount. ej. 700'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FormBudget