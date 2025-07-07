import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../assets/styles/homestyles';
import { COLORS } from '../constants/Colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const BalanceCard = ({ summary }) => {
  console.log("📊 Summary inside BalanceCard:", summary);
  const [showBalance, setShowBalance] = useState(false);

  return (
    <View style={styles.balanceCard}>
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
    </View>
  );
};
export default BalanceCard;