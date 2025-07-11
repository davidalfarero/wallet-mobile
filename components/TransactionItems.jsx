import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import EmptyTransaction from './EmptyTransaction';
import { styles } from '../assets/styles/transactionStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../constants/Colors';
import { formatDate } from '../lib/formatDate';
import { useUser } from '@clerk/clerk-expo';
import { useEffect, useState, useMemo } from 'react';
import { useTransactions } from '../hook/useTransactions';
import PageLoader from './PageLoader';
import TransactionFilter from './TransactionFilter';

const TransactionItems = ({ showHeader = false, detailed = false, limit = null }) => {
  const { user } = useUser();
  const [filter, setFilter] = useState('all');
  const [refreshing, setRefreshing] = useState(false);
  const { transactions, loadData, deleteTransaction, loading } = useTransactions(user.id);

  const categoryIcons = {
    Income: 'cash-outline',
    Food: 'fast-food-outline',
    Bills: 'document-text-outline',
    Transport: 'car-outline',
    Entertainment: 'game-controller-outline',
    Shopping: 'cart-outline',
    Other: 'ellipsis-horizontal-circle-outline',
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter((item) => {
      const category = item.category.toLowerCase();
      if (filter === 'income') return category === 'income';
      if (filter === 'expense') return category !== 'income';
      return true;
    });
  }, [transactions, filter]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleDelete = (id) => {
    Alert.alert("Delete Transaction", "Are you sure you want to delete this transaction?", [
      { text: "Cancel", style: "Cancel" },
      { text: "Delete", style: "destructive", onPress: () => deleteTransaction(id) },
    ]);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) return <PageLoader />;


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
              {formatDate(item.createdAt || new Date())}
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

        <TouchableOpacity onPress={() => handleDelete(item._id)}>
          <Ionicons name='trash-outline' size={25} color='gray' />
        </TouchableOpacity>
      </View>
    );
  };



  return (
    <>
      {showHeader && (
        <>
          <TransactionFilter selected={filter} onChange={setFilter} />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Transactions: </Text>
            <Text style={styles.totalNumber}>{filteredTransactions?.length || 0}</Text>
          </View>
        </>
      )}
      <FlatList
        data={limit ? filteredTransactions.slice(0, limit) : filteredTransactions}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={<EmptyTransaction />}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        loadData={loadData}
        ListFooterComponent={
          <Text style={{ textAlign: 'center', marginVertical: 12, color: 'gray' }}>
            Pull down to refresh
          </Text>
        }
      />
    </>
  );
};
export default TransactionItems;