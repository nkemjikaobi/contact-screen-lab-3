import { Button, StyleSheet, TextInput, View } from 'react-native';
import HeaderText from './components/HeaderText';
import RegularText from './components/RegularText';

export default function App() {
	return (
		<View style={styles.container}>
			<HeaderText>Contact Keeper</HeaderText>

			<View>
				<View>
					<RegularText>First Name</RegularText>
					<TextInput
						// style={styles.input}
						// onChangeText={onChangeText}
						// value={text}
						placeholder='Enter your first name'
					/>
				</View>
				<View>
					<RegularText>Last Name</RegularText>
					<TextInput
						// style={styles.input}
						// onChangeText={onChangeText}
						// value={text}
						placeholder='Enter your last name'
					/>
				</View>
				<View>
					<RegularText>Email</RegularText>
					<TextInput
						// style={styles.input}
						// onChangeText={onChangeText}
						// value={text}
						placeholder='Enter your email'
					/>
				</View>
			</View>

			<View style>
				<Button
					// onPress={onPressLearnMore}
					title='Send'
					color='#841584'
					accessibilityLabel='Send button'
				/>
				<Button
					// onPress={onPressLearnMore}
					title='Clear'
					color='#841584'
					accessibilityLabel='Clear button'
				/>
			</View>
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
