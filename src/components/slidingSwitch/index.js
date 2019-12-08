import React, { Component } from 'react';
import { View, Animated, Platform, Dimensions, PanResponder } from 'react-native';
import styles from './styles';
import Button from './Button/index';
import PropTypes from 'prop-types';
import metrics from '../../styles/metrics';

const { width } = Dimensions.get('window');

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: new Animated.Value(0),
			currentStatus: props.currentStatus,
			posValue: 0,
			selectedPosition: 0,
			duration: 100,
			mainWidth: width - 30,
			switcherWidth: metrics.containerWidth / 1.7,
			thresholdDistance: metrics.containerWidth / 3
		};
		this.isParentScrollDisabled = false;

		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: () => true,
			onMoveShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponderCapture: () => true,

			onPanResponderGrant: () => {
				// disable parent scroll if slider is inside a scrollview
				if (!this.isParentScrollDisabled) {
					this.props.disableScroll(false);
					this.isParentScrollDisabled = true;
				}
			},

			onPanResponderMove: (evt, gestureState) => {
				const finalValue = gestureState.dx + this.state.posValue;
				if (finalValue >= 0 && finalValue <= this.state.thresholdDistance) {
					this.state.position.setValue(finalValue);
				}
			},

			onPanResponderTerminationRequest: () => true,

			onPanResponderRelease: (evt, gestureState) => {
				const finalValue = gestureState.dx + this.state.posValue;
				this.isParentScrollDisabled = false;
				this.props.disableScroll(true);
				if (gestureState.dx > 0) {
					if (finalValue >= 0 && finalValue <= this.state.thresholdDistance / 2) {
						this.inStartLogin();
					} else {
						this.inStartCreate();
					}
				} else {
					if (finalValue >= -100 && finalValue <= this.state.thresholdDistance / 2) {
						this.inStartLogin();
					} else {
						this.inStartCreate();
					}
				}
			},

			onPanResponderTerminate: () => {},
			onShouldBlockNativeResponder: () => {
				// Returns whether this component should block native components from becoming the JS
				// responder. Returns true by default. Is currently only supported on android.
				return true;
			}
		});
	}

	componentDidMount() {
		this.moveInitialState();
	}

	moveInitialState = () => {
		switch (this.state.currentStatus) {
			case 'login':
				this.inStartLogin();
				break;
			case 'criar':
				this.inStartCreate();
				break;
		}
	};

	inStartLogin = () => {
		Animated.timing(this.state.position, {
			toValue: Platform.OS === 'ios' ? -2 : 0,
			duration: this.state.duration
		}).start();
		setTimeout(() => {
			this.setState({
				posValue: Platform.OS === 'ios' ? -2 : 0,
				selectedPosition: 0
			});
		}, 100);
		this.props.onStatusChanged('login');
	};

	inStartCreate = () => {
		Animated.timing(this.state.position, {
			toValue:
				Platform.OS === 'ios'
					? this.state.mainWidth - this.state.switcherWidth
					: this.state.mainWidth - this.state.switcherWidth - 2,
			duration: this.state.duration
		}).start();
		setTimeout(() => {
			this.setState({
				posValue:
					Platform.OS === 'ios'
						? this.state.mainWidth - this.state.switcherWidth
						: this.state.mainWidth - this.state.switcherWidth - 2,
				selectedPosition: 1
			});
		}, 100);
		this.props.onStatusChanged('criar');
	};

	getStatus = () => {
		return this.state.selectedPosition == 0 ? 'Login' : 'Criar';
	};

	render() {
		return (
			<View style={styles.container}>
				<Button name="Login" onPress={this.inStartLogin} />
				<Button name="Criar" onPress={this.inStartCreate} />
				<Animated.View
					{...this._panResponder.panHandlers}
					style={[
						styles.switcher,
						{
							transform: [ { translateX: this.state.position } ]
						}
					]}
				>
					<Button name={this.getStatus()} />
				</Animated.View>
			</View>
		);
	}
}

index.propTypes = {
	disableScroll: PropTypes.func,
	onStatusChanged: PropTypes.func
};

index.defaultProps = {
	disableSwitch: true
};
