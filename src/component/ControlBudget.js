import React, { useState, useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { formatQuantity } from '../helpers/index.js'
import styles from '../Styles/ControlBudget.jsx'
import CircularProgress from 'react-native-circular-progress-indicator';
const ControlBudget = ({ budget, bills }) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
    const [value, setValue] = useState(0);


    useEffect(() => {
        const totalSpent = bills.reduce((total, spent) => Number(spent.amount) + total, 0)
        const availableTotal = budget - totalSpent

        const UpdateValue = (
            ((available - availableTotal / budget) * 100)
        )
        setValue(UpdateValue)
        setAvailable(availableTotal)
        setSpent(totalSpent)
    }, [bills])


    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <CircularProgress
                    value={value}
                    radius={120}
                    duration={2000}
                    progressValueColor={'#ecf0f1'}
                    maxValue={100}
                    valueSuffix={'%'}
                    title={'Gasto'}
                    titleColor={'white'}
                    titleStyle={{ fontWeight: 'bold' }}
                />
            </View>
            <View style={styles.containerText}>
                <Pressable
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>
                        Reiniciar App
                    </Text>
                </Pressable>
                <Text style={styles.textValue}>
                    <Text style={styles.textLabel}>Presupuesto: {formatQuantity(budget)}</Text>
                </Text>

                <Text style={styles.textValue}>
                    <Text style={styles.textLabel}>Disponible: {formatQuantity(available)}</Text>
                </Text>

                <Text style={styles.textValue}>
                    <Text style={styles.textLabel}>Gastado: {formatQuantity(spent)}</Text>
                </Text>
            </View>
        </View>
    )
}

export default ControlBudget