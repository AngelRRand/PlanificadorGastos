import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, TextInput, SafeAreaView, Picker } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import styles from '../Styles/FormBudget.jsx'

const FormBudget = ({ setModal, handlespent, setSpent, spent, deletSpent }) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [day, setDay] = useState('');
    const [id, setId] = useState('');
    useEffect(() => {
        if (spent?.name) {
            setName(spent.name)
            setAmount(spent.amount)
            setCategory(spent.category)
            setDay(spent.day)
            setId(spent.id)
        }
    }, [spent])
    return (
        <SafeAreaView style={styles.container}>
            <View style={btnDeletClose}>
                <Pressable
                    onLongPress={() => {
                        setModal(false)
                        setSpent({})
                    }
                    }
                    style={[styles.btn, styles.btnClose]}>
                    <Text style={styles.btnTextTop}>
                        Cancel
                    </Text>
                </Pressable>
                {
                    !!id && (
                        <Pressable
                            onLongPress={() => {
                                deletSpent(id)
                            }}
                            style={[styles.btn, styles.btnEliminar]}>
                            <Text style={styles.btnText}>
                                Delet
                            </Text>
                        </Pressable>

                    )
                }
            </View>
            <View style={form}>
                <Text style={title}>{spent?.name ? 'Edit Bills' : 'New Bills'}</Text>

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
                        onValueChange={(itemVal) => {
                            setCategory(itemVal)
                        }}
                    >
                        <Picker.Item label="--Selection--" value="" />
                        <Picker.Item label="Save money" value="Save" />
                        <Picker.Item label="Food" value="Food" />
                        <Picker.Item label="House" value="House" />
                        <Picker.Item label="Miscellaneous expenses" value="Expenses" />
                        <Picker.Item label="Leisure" value="Leisure" />
                        <Picker.Item label="Subscription" value="Subscription" />
                        <Picker.Item label="Health" value="Health" />
                    </Picker>
                </View>
                <Pressable
                    onPress={() => {
                        handlespent({
                            name,
                            amount,
                            category,
                            day,
                            id
                        })
                    }}
                    style={styles.btnSubmit}>
                    <Text style={styles.btnText}>{spent?.name ? 'Save Bill' : 'New Bills!!'} </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default FormBudget