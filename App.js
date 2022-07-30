import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Header } from './src/component/Header';
import NewBudget from './src/component/NewBudget';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Header style={styles.header}></Header>
        <NewBudget></NewBudget>
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
