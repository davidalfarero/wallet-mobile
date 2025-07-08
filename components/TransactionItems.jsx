import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import EmptyTransaction from './EmptyTransaction';
import { styles } from '../assets/styles/transactionStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../constants/Colors';
import { formatDate } from '../lib/formatDate';

const TransactionItems = ({
  transactions,
  onRefresh,
  refreshing,
  onDelete,
  detailed = false
}) => {


  const categoryIcons = {
    Income: 'cash-outline',
    Food: 'fast-food-outline',
    Bills: 'document-text-outline',
    Transport: 'car-outline',
    Entertainment: 'game-controller-outline',
    Shopping: 'cart-outline',
    Other: 'ellipse-outline', // fallback
  };

  const renderItem = ({ item }) => {
    const iconName = categoryIcons[item.category] || categoryIcons['Other'];

    return (
      <View style={styles.transactionContainer}>
        <Ionicons name={iconName} size={40} color={COLORS.primary} style={{ marginRight: 8 }} />
        <View style={{ flex: 1 }}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={{ color: 'gray' }}>{item.category}</Text>

          {detailed && (
            <Text style={{ color: 'gray', fontSize: 12 }}>
              {formatDate(item.createdAt)}
            </Text>
          )}

        </View>
        <Text
          style={[styles.transactionAmount,
          { color: item.category === 'Income' ? COLORS.income : COLORS.expense }]}
        >
          {item.category === 'Income'
            ? `₱ +${item.amount}`
            : `₱ -${item.amount}`}
        </Text>

        <View style={styles.transactionDivider} />

        <TouchableOpacity onPress={() => onDelete(item._id)}>
          <Ionicons name='trash-outline' size={25} color='red' />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={<EmptyTransaction />}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onRefresh}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <Text style={{ textAlign: 'center', marginVertical: 12, color: 'gray' }}>
          Pull down to refresh
        </Text>
      }
    />
  );
};
export default TransactionItems;