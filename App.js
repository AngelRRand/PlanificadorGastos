import { useState } from 'react';
import { StyleSheet, View, Alert, Pressable, Image } from 'react-native';
import ControlBudget from './src/component/ControlBudget';
import { Header } from './src/component/Header';
import NewBudget from './src/component/NewBudget';
import styles from '../Styles/StylesApp.jsx';


export default function App() {
  const [valid, setValid] = useState(false);
  const [budget, setBudget] = useState(0);
  const [bills, setBills] = useState([
    {id:1, amount:20},
    {id:2, amount:30},
    {id:3, amount:40},
  ]);
  
  const handleBudget = (budget) => {
    if (Number(budget) > 0) {
      setValid(true)
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor a 0', 'OK')
    }
  }


  return (
    <View style={styles.container}>
      <View>
        <Header style={styles.header}></Header>
        {
          !valid ?
            <NewBudget
              budget={budget}
              setBudget={setBudget}
              handleBudget={handleBudget}
            />
            :
            <>
            <ControlBudget
            budget={budget}
            bills={bills}
            />
            
            </>
        }
      </View>
      {
        valid && (
          <Pressable>
            <Image
              style={styles.image}
              source={require('./src/IMG/nuevo-gasto.png')}
            />
          </Pressable>
        )
      }
    </View>
  );
}
