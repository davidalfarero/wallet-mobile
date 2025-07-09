import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/Colors';

export const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    headerContainer: {
      flexDirection: 'column',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.primary
    },
    signoutButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      backgroundColor: COLORS.primary,
      marginHorizontal: 10,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    activeSignoutButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      backgroundColor: 'gray',
      marginHorizontal: 10,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 999,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    signoutText: {
      color: COLORS.white,
      fontSize: 20,
      fontWeight: '600',
    },
  }
);