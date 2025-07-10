import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import SafeScreen from '@/components/SafeScreen';
import { StatusBar } from 'expo-status-bar';

export default function RootLayoutNav() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
      <StatusBar style="dark" hidden={false} backgroundColor="#fff" />
    </ClerkProvider>
  );
}