import React, {Component} from 'react';
import {View, Animated, Platform, PanResponder} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import {metrics} from '../../styles';

import SlidingButton from '../SlidingButton/index';

const textLogin = 'Entrar';
const textRegister = 'Cadastrar';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
      currentStatus: textLogin,
      posValue: 0,
      selectedPosition: 0,
      duration: 30,
      mainWidth: metrics.screenWidth - 30,
      switcherWidth: metrics.screenWidth / 3,
      thresholdDistance: metrics.containerBase / 2.2,
    };
    this.isParentScrollDisabled = false;

    // method responsible for moving the button
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        // disable parent scroll if slider is inside a scrollview
        if (!this.isParentScrollDisabled) {
          this.isParentScrollDisabled = true;
        }
      },
      // check dimensions max and min of slider button
      onPanResponderMove: (evt, gestureState) => {
        const {posValue, thresholdDistance, position} = this.state;
        const finalValue = gestureState.dx + posValue;
        if (finalValue >= 0 && finalValue <= thresholdDistance) {
          position.setValue(finalValue);
        }
      },

      onPanResponderTerminationRequest: () => true,
      // responsible for returning the animation to its original position
      onPanResponderRelease: (evt, gestureState) => {
        const {posValue, thresholdDistance} = this.state;
        const finalValue = gestureState.dx + posValue;
        this.isParentScrollDisabled = false;
        if (gestureState.dx > 0) {
          if (finalValue >= 0 && finalValue <= thresholdDistance / 2) {
            this.inStartLogin();
          } else {
            this.inStartCreate();
          }
        } else if (finalValue >= -100 && finalValue <= thresholdDistance / 2) {
          this.inStartLogin();
        } else {
          this.inStartCreate();
        }
      },

      onPanResponderTerminate: () => {},
      onShouldBlockNativeResponder: () => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  componentDidMount() {
    const {currentStatus} = this.state;
    this.moveInitialState(currentStatus);
  }

  // start position of button slider
  moveInitialState = currentStatus => {
    return currentStatus === textLogin
      ? this.inStartLogin()
      : this.inStartCreate();
  };

  inStartLogin = () => {
    const {onStatusChanged} = this.props;
    const {position, duration} = this.state;
    Animated.timing(position, {
      toValue: Platform.OS === 'ios' ? -2 : 0,
      duration,
    }).start();
    setTimeout(() => {
      this.setState({
        posValue: Platform.OS === 'ios' ? -2 : 0,
        selectedPosition: 0,
      });
    }, 100);
    onStatusChanged(textLogin);
  };

  inStartCreate = () => {
    const {onStatusChanged} = this.props;
    const {position, duration, mainWidth, switcherWidth} = this.state;
    Animated.timing(position, {
      toValue: mainWidth / 1.7 - switcherWidth / 2.3,
      duration,
    }).start();
    setTimeout(() => {
      this.setState({
        posValue: mainWidth / 1.7 - switcherWidth / 2.3,
        selectedPosition: 1,
      });
    }, 100);
    onStatusChanged(textRegister);
  };

  getStatus = selectedPosition => {
    return selectedPosition === 0 ? textLogin : textRegister;
  };

  render() {
    const {position, selectedPosition} = this.state;

    return (
      <View style={styles.container}>
        <SlidingButton
          style={styles.textColor}
          text={textLogin}
          onPress={this.inStartLogin}
        />
        <SlidingButton
          style={styles.textColor}
          text={textRegister}
          onPress={this.inStartCreate}
        />
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            styles.switcher,
            {
              transform: [{translateX: position}],
            },
          ]}>
          <SlidingButton text={this.getStatus(selectedPosition)} />
        </Animated.View>
      </View>
    );
  }
}

index.propTypes = {
  onStatusChanged: PropTypes.func.isRequired,
};
