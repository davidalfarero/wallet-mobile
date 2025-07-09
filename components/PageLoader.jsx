import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../constants/Colors";
import { styles } from "../assets/styles/homestyles";

const PageLoader = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size='large' color={COLORS.primary} />
  </View>
);

export default PageLoader;