import { useState } from 'react';
import { Modal, View, Alert, Pressable, Image } from 'react-native';
import { Header } from './src/component/Header';
import ControlBudget from './src/component/ControlBudget.js';
import NewBudget from './src/component/NewBudget.js';
import FormBudget from './src/component/FormBudget.js';
import styles from '../Styles/StylesApp.jsx';


export default function App() {
  const [valid, setValid] = useState(false);
  const [budget, setBudget] = useState(0);
  const [bills, setBills] = useState([]);
  const [modal, setModal] = useState(false)
  
  const handleBudget = (budget) => {
    if (Number(budget) > 0) {
      setValid(true)
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor a 0', 'OK')
    }
  }

  const handlespent = (spent)=>{
    if(Object.values(spent).includes('')){
      Alert.alert(
        'Error',
        'Todos los campos son oblidatorios'
      )
      return
    } else{

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
          modal && (
            <Modal
              animationType='slide'
              visible={modal}
              onRequestClose={()=>{
                setModal(!modal)
              }}
            >
              <FormBudget
                setModal={setModal}
                handlespent={handlespent}
              />
            </Modal>
          )
        }

      {
        valid && (
          <Pressable onPress={()=> setModal(!modal)}>
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
