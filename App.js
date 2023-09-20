import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import HeaderText from './components/HeaderText';
import RegularText from './components/RegularText';
import { useState } from 'react';

export default function App() {
	const [firstName, onChangeFirstName] = useState('');
	const [lastName, onChangeLastName] = useState('');
	const [email, onChangeEmail] = useState('');

	const onClearForm = () => {
		onChangeFirstName('');
		onChangeLastName('');
		onChangeEmail('');
	};

	const onSendHandler = () => {
		Alert.alert('Contact Saved', `${firstName}, your details have been saved`, [
			{ text: 'OK', onPress: () => onClearForm() },
		]);
	};

	return (
		<View style={styles.container}>
			<HeaderText>Contact Keeper</HeaderText>

			<View style={styles.inputWrapper}>
				<View>
					<RegularText>First Name</RegularText>
					<TextInput
						style={styles.input}
						onChangeText={onChangeFirstName}
						value={firstName}
						placeholder='Enter your first name'
					/>
				</View>
				<View>
					<RegularText>Last Name</RegularText>
					<TextInput
						style={styles.input}
						onChangeText={onChangeLastName}
						value={lastName}
						placeholder='Enter your last name'
					/>
				</View>
				<View>
					<RegularText>Email</RegularText>
					<TextInput
						style={styles.input}
						onChangeText={onChangeEmail}
						value={email}
						placeholder='Enter your email'
					/>
				</View>
			</View>

			<View style={styles.buttons}>
				<View style={styles.sendBtn}>
					<Button
						onPress={onSendHandler}
						title='Send'
						color='green'
						accessibilityLabel='Send button'
					/>
				</View>
				<View style={styles.clearBtn}>
					<Button
						onPress={onClearForm}
						title='Clear'
						color='#841584'
						accessibilityLabel='Clear button'
					/>
				</View>
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
	inputWrapper: {
		marginTop: 40,
	},
	input: {
		height: 40,
		width: 200,
		marginTop: 12,
		marginBottom: 30,
		borderWidth: 1,
		padding: 10,
		borderColor: 'green',
		borderRadius: 10,
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
	},
	clearBtn: {
    marginLeft: 10,
    width: 100
	},
	sendBtn: {
		width: 100,
	},
});
