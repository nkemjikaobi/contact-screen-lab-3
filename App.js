import { StyleSheet, TextInput, View } from 'react-native';
import HeaderText from './components/HeaderText';
import RegularText from './components/RegularText';

export default function App() {
  return (
		<View style={styles.container}>
			<HeaderText>Contact Keeper</HeaderText>

		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
