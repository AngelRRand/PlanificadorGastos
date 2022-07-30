import React from 'react'
import { View, Text, Image } from 'react-native'
import { formatQuantity } from '../helpers/index.js'
import styles from '../Styles/ControlBudget.jsx'
const ControlBudget = ({budget}) => {
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image 
                    source={require('../IMG/grafico.jpg')}
                    style={styles.img}
                />
            </View>
            <View>
                <Text>
                    <Text>Presupuesto: {formatQuantity(budget)}</Text>
                </Text>

                <Text>
                    <Text>Disponible: {formatQuantity(budget)}</Text>
                </Text>

                <Text>
                    <Text>Gastado: {formatQuantity(budget)}</Text>
                </Text>
            </View>
        </View>
    )
}

export default ControlBudget