import { useState } from 'react';
import { Modal, View, Alert, Pressable, Image, ScrollView } from 'react-native';
import { Header } from './src/component/Header';
import { generatoID } from './src/helpers';
import ControlBudget from './src/component/ControlBudget.js';
import NewBudget from './src/component/NewBudget.js';
import FormBudget from './src/component/FormBudget.js';
import ListExpenses from './src/component/ListExpenses';
import styles from '../Styles/StylesApp.jsx';


export default function App() {
  const [valid, setValid] = useState(false);
  const [budget, setBudget] = useState(0);
  const [bills, setBills] = useState([]);
  const [modal, setModal] = useState(false)
  const [spent, setSpent] = useState({})

  const handleBudget = (budget) => {
    if (Number(budget) > 0) {
      setValid(true)
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor a 0', 'OK')
    }
  }

  const handlespent = (spent) => {
    if ([spent.name, spent.category, spent.amount].includes('') ) {
      Alert.alert(
        'Error',
        'Todos los campos son oblidatorios'
      )
      return
    }
    if(spent.id){
      const spentUpdates = bills.map(stateBills => stateBills.id === spent.id ? spent : stateBills)
      setBills(spentUpdates)
    }else{
      //Añadir el nuevo gasto al state
      spent.id = generatoID();
      spent.day = Date.now()
      setBills([...bills, spent])
    }

    setModal(!modal)
  }
  const deletSpent = id=>{
    Alert.alert(
      '¿Deseas eliminar este gasto?',
      'Un gasto eliminado no se puede recuperar',
      [
        {text: 'No', style:'cancel'},
        {text:'Si, Eliminar', onPress: ()=>{
          const spentUpdates = bills.filter(state =>
            state !== id
            )
        }}
      ]
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header style={styles.header} />
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

        {
          valid && (
            <ListExpenses
              bills={bills}
              setModal={setModal}
              setSpent={setSpent}
            />
          )
        }
      </ScrollView>
      {
        modal && (
          <Modal
            animationType='slide'
            visible={modal}
            onRequestClose={() => {
              setModal(!modal)
            }}
          >
            <FormBudget
              setModal={setModal}
              handlespent={handlespent}
              setSpent={setSpent}
              spent={spent}
              deletSpent={deletSpent}
            />
          </Modal>
        )
      }

      {
        valid && (
          <Pressable onPress={() => setModal(!modal)}>
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
