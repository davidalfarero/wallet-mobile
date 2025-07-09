import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { styles } from '../assets/styles/homestyles';
import { COLORS } from '../constants/Colors';
import { useRouter } from 'expo-router';

const ProfileButton = () => {
  const router = useRouter();

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity
        style={[styles.profileButton]}
        onPress={() => router.push('/profile')}
      >
        <Ionicons name='person-outline' size={24} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};
export default ProfileButton;