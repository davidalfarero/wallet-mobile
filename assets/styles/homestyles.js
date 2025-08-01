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
    signoutContainer: {
      position: 'absolute',
      top: 40,
      right: 20,
      zIndex: 10,
    },
    signoutButton: {
      backgroundColor: COLORS.white,
      borderRadius: 999,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderWidth: 1,
      borderColor: '#eee',
    },
    profileContainer: {
      position: 'absolute',
      top: 40,
      left: 20,
      zIndex: 10,
    },
    profileButton: {
      backgroundColor: COLORS.white,
      borderRadius: 999,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderWidth: 1,
      borderColor: '#eee',
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
    refreshContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 10,
    },
    refreshButton: {
      backgroundColor: COLORS.white,
      borderRadius: 999,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderWidth: 1,
      borderColor: COLORS.border,
    },
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    }
  }
);