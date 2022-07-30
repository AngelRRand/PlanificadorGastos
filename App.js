import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import ControlBudget from './src/component/ControlBudget';
import { Header } from './src/component/Header';
import NewBudget from './src/component/NewBudget';

export default function App() {
  const [valid, setValid] = useState(false);
  const [budget, setBudget] = useState(0);

  
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
            <ControlBudget
            budget={budget}
            />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1f1',

  },
  header: {
    backgroundColor: '#00000078',
  },
});
