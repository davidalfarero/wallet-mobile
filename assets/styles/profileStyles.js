import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    flexDirection: 'column',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary
  },
  label: {
    fontSize: 16,
    marginTop: 12,
    marginBottom: 5,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text
  },
  backContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backButton: {
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
});