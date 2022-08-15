import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, SafeAreaView, Picker } from 'react-native'
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
                    <Text style={styles.label}>Expense name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Expense name. ej. Cine'
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Amount spent</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Spending amount. ej. 700'
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Expense Category</Text>
                    <Picker
                        style={styles.input}
                    >
                        <Picker.Item label="--Selection--" value=""/>
                        <Picker.Item label="Save money" value="Save"/>
                        <Picker.Item label="Food" value="Food"/>
                        <Picker.Item label="House" value="House"/>
                        <Picker.Item label="Miscellaneous expenses" value="Expenses"/>
                        <Picker.Item label="Leisure" value="Leisure"/>
                        <Picker.Item label="Health" value="Health"/>
                    </Picker>
                </View>
                <Pressable>
                    <Text>New Bills!!</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default FormBudget