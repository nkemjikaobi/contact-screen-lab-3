import { Button, StyleSheet, TextInput, View } from 'react-native';
import HeaderText from './components/HeaderText';
import RegularText from './components/RegularText';
import { useState } from 'react';

export default function App() {
	const [firstName, onChangeFirstName] = useState('');
	const [lastName, onChangeLastName] = useState('');
	const [email, onChangeEmail] = useState('');

	return (
		<View style={styles.container}>
			<HeaderText>Contact Keeper</HeaderText>

			<View>
				<View>
					<RegularText>First Name</RegularText>
					<TextInput
						// style={styles.input}
						onChangeText={onChangeFirstName}
						value={firstName}
						placeholder='Enter your first name'
					/>
				</View>
				<View>
					<RegularText>Last Name</RegularText>
					<TextInput
						// style={styles.input}
						onChangeText={onChangeLastName}
						value={lastName}
						placeholder='Enter your last name'
					/>
				</View>
				<View>
					<RegularText>Email</RegularText>
					<TextInput
						// style={styles.input}
						onChangeText={onChangeEmail}
						value={email}
						placeholder='Enter your email'
					/>
				</View>
			</View>

			<View style={styles.buttons}>
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
	buttons: {
		display: 'flex',
		flexDirection: 'row',
	},
	clearBtn: {
		marginLeft: 20,
	},
	sendBtn: {},
});
