import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../assets/styles/profileStyles';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';
import { useUser } from '@clerk/clerk-expo';

export default function ProfileScreen() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity
          style={[styles.backButton]}
          onPress={() => router.back('/')}
        >
          <Ionicons name='arrow-back-outline' size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>👤 Profile</Text>
      </View>

      <View>
        <Text style={styles.label}>Welcome,</Text>
        <Text style={styles.value}>
          {user?.primaryEmailAddress?.emailAddress.split('@')[0]}!
        </Text>
      </View>
    </View>
  );
}