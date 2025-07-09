import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/transactionStyles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors';

const TransactionFilter = ({ selected, onChange }) => {
  const filters = [
    { id: 'all', name: 'All', icon: 'reorder-three-outline' },
    { id: 'income', name: 'Income', icon: 'arrow-down-circle-outline' },
    { id: 'expense', name: 'Expense', icon: 'arrow-up-circle-outline' },
  ];

  return (
    <View style={styles.filterContainer}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter.id}
          style={[
            styles.filterButton,
            selected === filter.id && styles.filterButtonActive]}
          onPress={() => onChange(filter.id)}
        >
          <Ionicons
            name={filter.icon}
            size={16}
            color={selected === filter.id ? COLORS.white : COLORS.text}
            style={{ marginRight: 6 }}
          />
          <Text style={[
            styles.filterText,
            selected === filter.id && styles.filterTextActive]}
          >
            {filter.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default TransactionFilter;