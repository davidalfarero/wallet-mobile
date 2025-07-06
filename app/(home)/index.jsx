import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { SignOutButton } from '@/components/SignOutButton';
import { styles } from '../../assets/styles/homestyles';

export default function Page() {
  const { user } = useUser();

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

        </View>
      </View>
    </View>
  );
}