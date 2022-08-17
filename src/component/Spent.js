import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from '../Styles/Spent.jsx'
import { formatQuantity } from '../helpers/index.js'

const Spent = ({ bill }) => {

  const { name, category, amount, id } = bill
  const icons = {
    Save: require('../IMG/icono_ahorro.png'),
    Food: require('../IMG/icono_comida.png'),
    House: require('../IMG/icono_casa.png'),
    Expenses: require('../IMG/icono_gastos.png'),
    Leisure: require('../IMG/icono_ocio.png'),
    Subscription: require('../IMG/icono_suscripciones.png'),
    Health: require('../IMG/icono_salud.png'),
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerCount}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={icons[category]}
          />
          <View style={styles.containerText}>

            <Text style={styles.category}>{category}</Text>
            <Text style={styles.name}>{name}</Text>

          </View>
        </View>
        <Text style={styles.amount}>{formatQuantity(amount)}</Text>
      </View>
    </View>
  )
}

export default Spent