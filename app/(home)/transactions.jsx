import { Text, View } from 'react-native';
import { styles } from '../../assets/styles/transactionStyles';
import TransactionFilter from '../../components/TransactionFilter';
import TransactionItems from '../../components/TransactionItems';
import { useUser } from '@clerk/clerk-expo';
import { useTransactions } from '../../hook/useTransactions';
import PageLoader from '../../components/PageLoader';

const Transactions = () => {
  const { user } = useUser();
  const { transactions, loading } = useTransactions(user?.id);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>All Transactions</Text>
      </View>
      {/* Todo: transaction filter */}
      <TransactionFilter />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Transactions: </Text>
        <Text style={styles.totalNumber}>{transactions?.length || 0}</Text>
      </View>
      <TransactionItems
        detailed={true}
      />
    </View>
  );
};
export default Transactions;