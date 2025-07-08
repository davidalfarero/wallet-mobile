import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../assets/styles/homestyles';

const EmptyTransaction = () => {
  return (
    <View style={styles.emptyContainer}>
      <Ionicons
        name='receipt-outline'
        size={60}
        color="gray"
        style={[{ textAlign: 'center' }, { marginBottom: 10 }]}
      />
      <Text style={styles.emptyTitle}>Empty Transaction</Text>
      <Text style={styles.emptyText}>You haven’t added any transactions yet. Start tracking where your money goes.</Text>
      <Text></Text>
    </View>
  );
};
export default EmptyTransaction;