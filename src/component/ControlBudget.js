import React, {useState, useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import { formatQuantity } from '../helpers/index.js'
import styles from '../Styles/ControlBudget.jsx'
const ControlBudget = ({budget, bills}) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);


    useEffect(()=>{
        const totalSpent = bills.reduce((total, spent)=> Number(spent.amount) + total, 0)
        const availableTotal = budget - totalSpent

        setAvailable(availableTotal)
        setSpent(totalSpent)
    }, [bills])


    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image 
                    source={require('../IMG/grafico.jpg')}
                    style={styles.img}
                />
            </View>
            <View style={styles.containerText}>
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