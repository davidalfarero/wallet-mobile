import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/Colors';

export const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    content: {
      padding: 20,
      paddingBottom: 0,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
      paddingHorizontal: 0,
      paddingVertical: 12,
    },
    headerLeft: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    headerLogo: {
      width: 75,
      height: 75,
    },
    welcomeContainer: {
      flex: 1,
    },
    welcomeText: {
      fontSize: 14,
      color: COLORS.textLight,
      marginBottom: 2,
    },
  }
);