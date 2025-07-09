import { Text, View } from 'react-native';
import { styles } from '../../assets/styles/profileStyles';
import { SignOutButton } from '../../components/SignOutButton';

const profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <SignOutButton />
    </View>
  );
};
export default profile;