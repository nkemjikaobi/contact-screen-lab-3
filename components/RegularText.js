import React from 'react';
import { StyleSheet } from 'react-native';

const RegularText = ({ children }) => {
	return <div className={styles.regular}>{children}</div>;
};

export default RegularText;

const styles = StyleSheet.create({
	regular: {
		fontSize: 16,
	},
});
