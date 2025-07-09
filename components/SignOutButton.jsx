import { useClerk } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { styles } from '../assets/styles/homestyles';
import { COLORS } from '../constants/Colors';

export const SignOutButton = () => {
  const { signOut } = useClerk();
  const [isSigningout, setIsSigningout] = useState(false);

  const handleSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          setIsSigningout(true);
          try {
            await signOut();
          } catch (error) {
            console.error("Sign out failed:", error);
          } finally {
            setIsSigningout(false);
          }
        }
      }
    ]);
  };

  return (
    <View style={styles.signoutContainer}>
      <TouchableOpacity
        style={[styles.signoutButton]}
        onPress={handleSignOut}
        disabled={isSigningout}
        activeOpacity={0.7}
      >
        <Ionicons name='log-out-outline' size={24} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};