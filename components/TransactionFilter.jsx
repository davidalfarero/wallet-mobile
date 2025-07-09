import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/transactionStyles';

const TransactionFilter = () => {

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={styles.filterButtonActive}
      >
        <Text style={styles.filterTextActive}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Income</Text></TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Expense</Text></TouchableOpacity>
    </View>
  );
};
export default TransactionFilter;