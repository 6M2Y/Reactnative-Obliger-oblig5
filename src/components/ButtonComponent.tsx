import { Text, Pressable } from 'react-native';
import styles from '../utility/Styles';
import { PropsBtn } from '../utility/Types';

export default function ButtonComponent({ title, action, color }: PropsBtn) {
  return (
    <Pressable
      onPress={action}
      style={[styles.btn, { backgroundColor: color }]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
}
