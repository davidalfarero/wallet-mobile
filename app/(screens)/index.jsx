import { useUser } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../assets/styles/homestyles';
import BalanceCard from '../../components/BalanceCard';
import PageLoader from '../../components/PageLoader';
import TransactionItems from '../../components/TransactionItems';
import { useTransactions } from '../../hook/useTransactions';
import { SignOutButton } from '../../components/SignOutButton';
import ProfileButton from '../../components/ProfileButton';

export default function Page() {
  const { user } = useUser();

  const navigation = useNavigation();

  const { summary, loading, loadData } = useTransactions(user.id);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) return <PageLoader />;

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

      <ProfileButton />
      <SignOutButton />

      <BalanceCard summary={summary} />

      <View style={styles.transactionHeaderContainer}>
        <Text style={styles.transactionTitle}>Recent Transactions</Text>
        <TouchableOpacity style={styles.seeAllButton} onPress={() => navigation.navigate('transactions')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <TransactionItems detailed={false} limit={3} />
    </View>
  );
}