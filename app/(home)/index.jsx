import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SignOutButton } from '../../components/SignOutButton';
import { styles } from '../../assets/styles/homestyles';
import { Ionicons } from '@expo/vector-icons';
import BalanceCard from '../../components/BalanceCard';
import { useTransactions } from '../../hook/useTransactions';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const { transactions, summary, loading, loadData, deleteTransaction } = useTransactions(user.id);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContent}>
        <Image
          source={require("../../assets/images/app-logo.png")}
          style={styles.logo}
          resizeMode='contain'
        />
        <Text style={styles.logoText}>Walletly</Text>
      </View>

      <BalanceCard summary={summary} />

      <View style={styles.transactionHeaderContainer}>
        <Text style={styles.transactionTitle}>Recent Transactions</Text>
        <TouchableOpacity style={styles.seeAllButton} onPress={() => navigation.navigate('transactions')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}