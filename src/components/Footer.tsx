import { View, Text } from 'react-native';
import styles from '../utility/Styles';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerHeaderText}>Åpningstider</Text>

      <Text style={styles.footerText}>Man-tors: 16.00-00.00</Text>
      <Text style={styles.footerText}>Fre-lør: 16.00-01.00</Text>
      <Text style={styles.footerText}>Søndag: STENGT</Text>
    </View>
  );
}
