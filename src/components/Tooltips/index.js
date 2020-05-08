import React from 'react';
import {View, Modal, Text} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const Tooltips = props => {
  const {onCancel, isVisible, content, step} = props;
  const tipsArray = content.split(';');
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onCancel}
      animationType="slide"
      transparent>
      <View style={styles.frame}>
        <View style={styles.container}>
          <View style={styles.contentTips}>
            {tipsArray.map(tip => {
              return (
                <Text key={tip} style={styles.tip}>
                  {tip}
                </Text>
              );
            })}
          </View>
          <ChoiceButton step={step} text="Fechar" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

Tooltips.propTypes = {
  content: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  step: PropTypes.number.isRequired,
};

Tooltips.defaultProps = {
  isVisible: false,
};
export default Tooltips;
