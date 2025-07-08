import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create(
  {
    transactionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      borderRadius: 16,
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginHorizontal: 10,
      marginBottom: 6,
    },
    transactionTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: COLORS.text
    },
    transactionAmount: {
      fontSize: 15,
      fontWeight: '600',
    },
    transactionDivider: {
      width: 1,
      height: '70%',
      marginHorizontal: 20,
      borderWidth: 1,
      borderColor: COLORS.border
    }
  }
);