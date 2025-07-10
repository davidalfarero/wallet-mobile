import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { View } from "react-native";
import { COLORS } from "../../constants/Colors";

export default function HomeLayout() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href={'/sign-in'} />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          paddingTop: 4,
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index" // maps to app/(home)/index.jsx
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.primary,
                borderWidth: 1,
                borderColor: COLORS.border,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 5,
              }}
            >
              <Ionicons name="add" size={30} color={COLORS.white} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          tabBarLabel: "Transactions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}