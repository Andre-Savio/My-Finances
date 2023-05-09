import { StyleSheet, Text, View } from 'react-native';
import Header from '../../Components/Header';
import Balance from '../../Components/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='André Savio' />
      
      <Balance saldo='9.224,87' gastos='-560,32'/>
    
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
