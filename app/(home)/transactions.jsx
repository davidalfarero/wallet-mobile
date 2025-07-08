import { View, Text } from 'react-native';
import TransactionItems from '../../components/TransactionItems';
const transactions = () => {
  return (
    <View>
      <Text>transactions screen</Text>
      <TransactionItems
        transactions={transactions}
        detailed={true}
      // onDelete={handleDelete}
      // onRefresh={handleRefresh}
      // refreshing={refreshing}
      />
    </View>
  );
};
export default transactions;