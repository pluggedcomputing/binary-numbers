import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const metrics = {
	containerWidth: width - 30
};

const styles = StyleSheet.create({
	button: {
		flex: 1,
		width: metrics.containerWidth / 3,
		height: 54,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default styles;
