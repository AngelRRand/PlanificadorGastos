
import { StyleSheet, View, Alert  } from 'react-native';
import { Header } from './src/component/Header';
import NewBudget from './src/component/NewBudget';

export default function App() {

  const handleBudget=(budget)=>{
    if(Number(budget) > 0){
      console.log('todo bien')
    }else{
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor a 0', 'OK')
    }
  }


  return (
    <View style={styles.container}>
      <View>
        <Header style={styles.header}></Header>
        <NewBudget 
          handleBudget={handleBudget}
        ></NewBudget>
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
