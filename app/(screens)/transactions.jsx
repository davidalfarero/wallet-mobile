import { Text, View } from 'react-native';
import { styles } from '../../assets/styles/transactionStyles';
import TransactionItems from '../../components/TransactionItems';

const Transactions = () => {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>All Transactions</Text>
      </View>

      <TransactionItems
        showHeader={true}
        detailed={true}
      />
    </View>
  );
};
export default Transactions;