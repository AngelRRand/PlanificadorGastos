import { useState, useEffect } from 'react';
import { Modal, View, Alert, Pressable, Image, ScrollView } from 'react-native';
import { Header } from './src/component/Header';
import { generatoID } from './src/helpers';
import ControlBudget from './src/component/ControlBudget.js';
import NewBudget from './src/component/NewBudget.js';
import FormBudget from './src/component/FormBudget.js';
import ListExpenses from './src/component/ListExpenses.js';
import FilterSpent from './src/component/FilterSpent.js';
import styles from '../Styles/StylesApp.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [valid, setValid] = useState(false);
  const [budget, setBudget] = useState(0);
  const [bills, setBills] = useState([]);
  const [modal, setModal] = useState(false)
  const [spent, setSpent] = useState({});
  const [filtro, setFiltro] = useState('');
  const [billsFilter, setBillsFilter] = useState([]);


  useEffect(() => {
    const obtenerPresupuesto = async()=>{
      try {
        const obtenerPresupuesto = await AsyncStorage.getItem('planificadorPresupuesto') ?? 0
        if(obtenerPresupuesto >0 ){
          setBudget(obtenerPresupuesto)
          setValid(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    obtenerPresupuesto()
  }, []);


  useEffect(() => {
    if(valid){
      const validPresupuest = async()=>{
        try {
          await AsyncStorage.setItem('planificadorPresupuesto', budget)
        } catch (error) {
          console.log(error)
        }
      }
      validPresupuest()
    }
  }, [valid]);


  useEffect(() => {
    const obtenerGastosStorage = async()=>{
      try {
        const obtenerGastos = await AsyncStorage.getItem('PlanificadorGastos') 
        setBills(obtenerGastos ? JSON.parse(obtenerGastos) : [])
      } catch (error) {
        console.log(error)
      }
    }
    obtenerGastosStorage()
  }, []);




  useEffect(() => {
    const saveBillsStorage = async()=>{
      try {
        await AsyncStorage.setItem('PlanificadorGastos', JSON.stringify(bills))
      } catch (error) {
        console.log(error)
      }
    }
    saveBillsStorage()
  }, [bills]);


  const handleBudget = (budget) => {
    if (Number(budget) > 0) {
      setValid(true)
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor a 0', 'OK')
    }
  }

  const handlespent = (spent) => {
    if ([spent.name, spent.category, spent.amount].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son oblidatorios'
      )
      return
    }
    if (spent.id) {
      const spentUpdates = bills.map(stateBills => stateBills.id === spent.id ? spent : stateBills)
      setBills(spentUpdates)
    } else {
      //Añadir el nuevo gasto al state
      spent.id = generatoID();
      spent.day = Date.now()
      setBills([...bills, spent])
    }

    setModal(!modal)
  }
  const deletSpent = id => {
    Alert.alert(
      '¿Deseas eliminar este gasto?',
      'Un gasto eliminado no se puede recuperar',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Si, Eliminar', onPress: () => {
            const spentUpdates = bills.filter(state => state !== id)
            setBills(spentUpdates)
            setModal(!modal)
            setModal({})
          }
        }
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
            <>
            <FilterSpent
              filtro={filtro}
              setFiltro={setFiltro}
              bills={bills}
              setBillsFilter={setBillsFilter}
            />
            <ListExpenses
              bills={bills}
              setModal={setModal}
              setSpent={setSpent}
              filtro={filtro}
              billsFilter={billsFilter}
            />
            </>
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
          <>
            <Pressable
              style={styles.press}
              onPress={() => setModal(!modal)}>
              <Image
                style={styles.image}
                source={require('./src/IMG/nuevo-gasto.png')}
              />
            </Pressable>
          </>
        )
      }

    </View>
  );
}
