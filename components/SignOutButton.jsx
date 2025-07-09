import { useClerk } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Alert, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/Colors';
import { styles } from '../assets/styles/profileStyles';
import { useState } from 'react';

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
    <TouchableOpacity
      style={[styles.signoutButton, isSigningout && styles.activeSignoutButton]}
      onPress={handleSignOut}
      disabled={isSigningout}
    >
      <Text style={styles.signoutText}>
        {isSigningout ? 'Signing Out...' : 'Sign Out'}
      </Text>
      <Ionicons name='log-out-outline' size={25} color={COLORS.white} />
    </TouchableOpacity>
  );
};