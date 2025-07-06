import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SignOutButton } from '../../components/SignOutButton';
import { styles } from '../../assets/styles/homestyles';
import { Ionicons } from '@expo/vector-icons';

export default function Page() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* HEADER */}
        <View stlye={styles.header}>
          {/* LEFT */}
          <View style={styles.headerLeft}>
            <Image
              source={require("../../assets/images/app-logo.png")}
              style={styles.headerLogo}
              resizeMode='contain'
            />
            <View stlye={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split('@')[0]}
              </Text>
            </View>
          </View>
          {/* RIGHT */}
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={() => router.push('/create')}>
              <Ionicons name='add' size={20} color='#fff' />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>

        </View>
      </View>
    </View>
  );
}