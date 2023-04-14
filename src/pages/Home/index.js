import { FlatList, StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';


const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix do Garrote',
    value: '9,00',
    date: '17/09/2022',
    type: 1 //entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '17/09/2022',
    type: 1
  },
  {
    id: 4,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 5,
    label: 'Pix do Garrote',
    value: '9,00',
    date: '17/09/2022',
    type: 1 //entrada
  },
  {
    id: 6,
    label: 'Salário',
    value: '7.200,00',
    date: '17/09/2022',
    type: 1
  },
  {
    id: 7,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Mestre Gafanhoto"/>
      <Balance saldo="3,00" gastos="-5000,00"/>
      <Actions/>      
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
}); 