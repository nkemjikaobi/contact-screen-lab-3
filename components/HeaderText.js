import React from 'react';
import { StyleSheet } from 'react-native';

const HeaderText = ({ children }) => {
	return <div style={styles.header}>{children}</div>;
};

export default HeaderText;

const styles = StyleSheet.create({
	header: {
		fontSize: 32,
	},
});
