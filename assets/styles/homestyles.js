import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/Colors';

export const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.background,
    },
    logoContent: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      width: 100,
      height: 100,
    },
    logoText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: COLORS.primary
    },
    balanceCard: {
      backgroundColor: COLORS.white,
      marginHorizontal: 10,
      borderRadius: 16,
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    balanceTitle: {
      fontSize: 15,
      fontWeight: '500',
      marginBottom: 10,
      color: COLORS.text,
      textAlign: 'center'
    },
    balanceAmount: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 30,
      color: COLORS.text,
      textAlign: 'center',
    },
    balanceStats: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    balanceStatLabel: {
      fontSize: 14,
      marginBottom: 4,
      marginRight: 10,
      color: COLORS.text
    },
    balanceStatAmount: {
      fontSize: 18,
      fontWeight: "600",
    },
    balanceButton: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 10,
      paddingVertical: 4,
    },
    balanceStatItem: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    statDivider: {
      borderRightWidth: 1,
      borderColor: COLORS.border,
    },
    transactionHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
      marginHorizontal: 10,
    },
    transactionTitle: {
      fontSize: 20,
      fontWeight: "600",
      color: COLORS.text,
    },
    seeAllButton: {
      backgroundColor: COLORS.primary,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 999,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    seeAllText: {
      color: COLORS.white,
      fontWeight: '600',
      fontSize: 14,
      textAlign: 'center',
    },
    emptyContainer: {
      backgroundColor: COLORS.white,
      borderRadius: 16,
      paddingHorizontal: 20,
      paddingVertical: 40,
      marginHorizontal: 10,
    },
    emptyTitle: {
      fontSize: 20,
      fontWeight: '500',
      color: 'gray',
      textAlign: 'center',
      marginBottom: 10,
    },
    emptyText: {
      fontSize: 15,
      color: 'gray',
      textAlign: 'center',
    },
  }
);