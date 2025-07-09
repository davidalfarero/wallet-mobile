import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      marginBottom: 10
    },
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
    },
    headerContainer: {
      flexDirection: 'column',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: COLORS.primary
    },
    totalContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginLeft: 10
    },
    totalText: {
      fontSize: 15,
      color: 'gray',
    },
    totalNumber: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'gray',
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 20,
      paddingVertical: 12,
      marginBottom: 12,
      marginHorizontal: 12,
    },
    filterButton: {
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: COLORS.border,
    },
    filterButtonActive: {
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 20,
      backgroundColor: COLORS.primary
    },
    filterText: {
      fontSize: 15,
      color: COLORS.text,
      fontWeight: '500',
    },
    filterTextActive: {
      fontSize: 15,
      color: COLORS.white,
      fontWeight: '500',
    },
  }
);