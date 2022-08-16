import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, SafeAreaView, Picker } from 'react-native'
import styles from '../Styles/FormBudget.jsx'

const FormBudget = ({setModal, handlespent}) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Pressable
                    onLongPress={()=>setModal(false)}
                    style={styles.btnClouse}>
                    <Text style={styles.btnTextClouse}>
                        Cancel
                    </Text>
                </Pressable>
            </View>
            <View style={form}>
                <Text style={title}>New Bills</Text>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Expense name</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                        placeholder='Expense name. ej. Cine'
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Amount spent</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={styles.input}
                        placeholder='Spending amount. ej. 700'
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Expense Category</Text>
                    <Picker
                        selectValue={category}
                        onValueChange={(itemVal)=>{
                            setCategory(itemVal)
                        }}
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
                <Pressable 
                    onPress={()=>{
                        handlespent({
                            name,
                            amount,
                            category
                        })
                    }}
                    style={styles.btnSubmit}>
                    <Text style={styles.btnText}>New Bills!!</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default FormBudget