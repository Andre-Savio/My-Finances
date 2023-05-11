import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../Components/Header';
import Balance from '../../Components/Balance';
import Movements from '../../Components/Movements';
import Actions from '../../Components/Actions';

const list = [
  {
    id:1,
    label: 'Boleto conta de água',
    value: '100,45',
    date: '08/05/2023',
    type: 0 //despesas
  },
  {
    id:2,
    label: 'Boleto conta de luz',
    value: '352,98',
    date: '08/05/2023',
    type: 1 //receita / entradas 
  },
  {
    id:3,
    label: 'Salario',
    value: '1.154,45',
    date: '08/05/2023',
    type: 1 //receita / entradas 
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='André Savio' />
      
      <Balance saldo='9.224,87' gastos='-560,32'/>

      <Actions/> 

      <Text style={styles.title}>Últimas movimentações</Text>
    
     <FlatList
     style={styles.list}
     data={list}
     keyExtractor={ (item) => String(item.id)}
     showsVerticalScrollIndicator={false}
     renderItem={ ({item}) => <Movements data={item}/> }
     />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
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
