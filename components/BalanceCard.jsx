import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../assets/styles/homestyles';
import { COLORS } from '../constants/Colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTransactions } from '../hook/useTransactions';
import { useUser } from '@clerk/clerk-expo';

const BalanceCard = ({ summary }) => {
  const user = useUser();
  const [refresh, setRefresh] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  const { loadData } = useTransactions(user.id);

  const handleRefresh = async () => {
    setRefresh(true);
    try {
      await loadData();
      setShowBalance(true);
      setTimeout(() => {
        setRefresh(false);
      }, 1500);
    } catch (err) {
      console.error('Refresh failed:', err);
      setRefresh(false);
    }
  };

  return (
    <View style={styles.balanceCard}>
      <TouchableOpacity
        style={styles.refreshContainer}
        onPress={handleRefresh}
        disabled={refresh}
      >
        <Text style={styles.refreshButton}>{refresh ? 'Refreshing...' : 'Refresh'}</Text>
      </TouchableOpacity>

      <Text style={styles.balanceTitle}>💳 Total Balance</Text>
      <TouchableOpacity
        onPress={() => setShowBalance((prev) => !prev)}
        activeOpacity={0.8}
      >
        <View style={styles.balanceButton}>
          <Text style={styles.balanceAmount}>
            {showBalance
              ? `₱ ${summary?.balance?.toFixed(2) ?? "0.00"}`
              : '₱ • • • •'
            }
          </Text>
          <Ionicons
            name={showBalance ? "eye-off-outline" : "eye-outline"}
            size={30}
            color="#555"
            style={{ paddingTop: 8 }}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.balanceStats}>
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>📈 Income: </Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            {showBalance
              ? `+₱ ${summary?.income?.toFixed(2) ?? "0.00"}`
              : '• • • •'}
          </Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>📉 Expense: </Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
            {showBalance
              ? `-₱ ${summary?.expenses?.toFixed(2) ?? "0.00"}`
              : '• • • •'}
          </Text>
        </View>
      </View>

      {refresh && (
        <ActivityIndicator size="small" color={COLORS.primary} style={styles.loadingOverlay} />
      )}
    </View>
  );
};
export default BalanceCard;