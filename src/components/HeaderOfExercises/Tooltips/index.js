import React from 'react';
import {View, Modal} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButton from '../../ChoiceButton';
import styles from './styles';

const Tooltips = props => {
  const {onCancel, isVisible, content} = props;
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onCancel}
      animationType="slide"
      transparent>
      <View style={styles.frame}>
        <View style={styles.container}>
          <View>{content}</View>
          <ChoiceButton text="Fechar" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

Tooltips.propTypes = {
  content: PropTypes.element.isRequired,
  onCancel: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};

Tooltips.defaultProps = {
  isVisible: false,
};
export default Tooltips;
