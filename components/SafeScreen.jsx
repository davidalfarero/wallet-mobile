import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../constants/Colors';

export default function SafeScreen({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{
      paddingTop: insets.top,
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
      {children}
    </SafeAreaView>
  );
}